import { cardData } from "@/helper/data";
import { MainHeadingButton } from "@/styles/Button/customButton";
import { PolygonIcon } from "@/styles/Image/customImage";
import images from "@/utils/images";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useRef, useState } from "react";
import { IoEllipseSharp } from "react-icons/io5";
import englishContent from "../../public/i18n/locales/en/home.json";
import arabicContent from "../../public/i18n/locales/ar/home.json";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";

// Styled Components
const HeadingButton = styled(Button)(({ theme, cardType }) => ({
  fontSize: theme.typography.fontSize[16],
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[21],
  height: "30px",
  padding: "5px 10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "capitalize",
  borderRadius: "30px",
  border: "none",
  background:
    cardType === "investor"
      ? theme.palette.background.investorTestimonials
      : theme.palette.background.borrowerTestimonials,
}));

const TestimonialsDesc = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[56],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[24],
  },
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.lineHeights[64],
  },
  fontWeight: theme.typography.fontWeights.semiBold,
  color: theme.palette.text.darkBlue,
  textAlign: "center",
  whiteSpace: "normal",
  maxWidth: "100%",
  margin: "0 auto",
}));

const TestimonialCardContent = styled(Card)(({ theme, cardType }) => ({
  width: "100%",
  height: "100%",
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[1],
  border: `1px solid ${
    cardType === "investor"
      ? theme.palette.background.investorTestimonials
      : cardType === "borrower"
      ? theme.palette.background.borrowerTestimonials
      : "#C1E4F6"
  }`,
  borderRadius: "8px",
}));

const TestimonialCardStyle = styled("div")(() => ({
  padding: "20px 20px 0",
}));

const TestimonialCard = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
}));

const TestimonialsCardDescription = styled(Typography)(({ theme }) => ({
  width: "100%",
  color: theme.palette.primary.main,
  textAlign: "left",
  marginBottom: "20%",
  fontSize: theme.typography.fontSize[20],
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize[18],
  },
  fontWeight: theme.typography.fontWeights.meduim,
  [theme.breakpoints.down("sm")]: {
    fontWeight: theme.typography.fontWeights.semiBold,
  },
  lineHeight: theme.typography.lineHeights[28],
  [theme.breakpoints.down("md")]: {
    lineHeight: theme.typography.lineHeights[27],
  },
}));

const UserContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  marginTop: theme.spacing(1),
}));

const ProfileImage = styled("img")(() => ({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  marginRight: "10px",
  objectFit: "cover",
}));

const UserName = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: "left",
  fontSize: theme.typography.fontSize[18],
  fontWeight: theme.typography.fontWeights.bold,
  lineHeight: theme.typography.lineHeights[24],
}));

const UserRole = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.subHeading,
  textAlign: "left",
  fontSize: theme.typography.fontSize[14],
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[28],
}));

const VectorIcon = styled("img")(() => ({
  width: "20%",
  marginLeft: "auto",
  objectFit: "cover",
}));

const BrowseButton = styled(Button)(({ theme }) => ({
  background: theme.palette.background.buttonGradient,
  color: theme.palette.primary.contrastText,
  textTransform: "uppercase",
  borderRadius: "30px",
  width: "179px",
  height: "54px",
  padding: "20px 28px",
  gap: "10px",
  fontWeight: theme.typography.fontWeights.regular,
  display: "none",
  "&:hover": {
    background: theme.palette.background.buttonGradient,
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
}));

export default function HomeTestimonials() {
  const scrollRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const controls = useAnimation();
  const [cardWidth, setCardWidth] = useState(0);

  const borrowers = cardData.borrowers.map((item) => ({
    ...item,
    type: "borrower",
  }));
  const investors = cardData.investors.map((item) => ({
    ...item,
    type: "investor",
  }));

  const allCards = [];
  const maxLength = Math.max(borrowers.length, investors.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < borrowers.length) allCards.push(borrowers[i]);
    if (i < investors.length) allCards.push(investors[i]);
  }

  const clonedCards = [...allCards, ...allCards]; // duplicate for seamless loop

  const getColor = (type) => {
    switch (type) {
      case "borrower":
        return "#37AA57";
      case "investor":
        return "#28A4DB";
      default:
        return "#E6E5E533";
    }
  };

  useEffect(() => {
    if (!isMobile && scrollRef.current) {
      const totalWidth = scrollRef.current.scrollWidth / 2;
      setCardWidth(totalWidth);

      controls.start({
        x: [0, -totalWidth],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 40, // Adjust for speed
        },
      });
    }
  }, [isMobile, controls]);

  const { t, i18n } = useTranslation("home");
  const textContent = i18n.language === "en" ? englishContent : arabicContent;
  const { heading, description } = t("testimonials", { returnObjects: true });

  return (
    <Box sx={{ background: (theme) => theme.palette.background.paper }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          marginTop="30px"
          marginBottom="20px"
          spacing={2}
        >
          <MainHeadingButton>
            <PolygonIcon src={images.polygon} alt="Polygon Icon" />
            {heading}
          </MainHeadingButton>
          <TestimonialsDesc>{description}</TestimonialsDesc>
        </Grid>
      </Grid>

      <Box>
        {isMobile ? (
          <Grid container spacing={2} justifyContent="center" flexWrap="wrap">
            {allCards.map((card, index) => (
              <Grid key={index} item sx={{ maxWidth: "100%", marginBottom: 2 }}>
                <TestimonialCardContent cardType={card.type}>
                  <TestimonialCardStyle>
                    <HeadingButton cardType={card.type}>
                      <IoEllipseSharp
                        style={{
                          marginRight: "10px",
                          color: getColor(card.type),
                          fontSize: "10px",
                        }}
                      />
                      {card.title}
                    </HeadingButton>
                  </TestimonialCardStyle>
                  <CardActionArea>
                    <TestimonialCard>
                      <TestimonialsCardDescription variant="body2">
                        {card.description}
                      </TestimonialsCardDescription>
                      <UserContainer>
                        <ProfileImage src={card.profile} alt="Profile" />
                        <div>
                          <UserName>{card.name}</UserName>
                          <UserRole>{card.role}</UserRole>
                        </div>
                        <VectorIcon
                          src={images.testimonials}
                          alt="Testimonials Icon"
                        />
                      </UserContainer>
                    </TestimonialCard>
                  </CardActionArea>
                </TestimonialCardContent>
              </Grid>
            ))}
            <BrowseButton variant="contained" sx={{ marginTop: 2 }}>
              Browse More
            </BrowseButton>
          </Grid>
        ) : (
          <Box ref={scrollRef} sx={{ overflow: "hidden", width: "100%", padding: 2 }}>
            <motion.div
              animate={controls}
              style={{ display: "flex", width: "max-content" }}
            >
              {clonedCards.map((card, index) => (
                <Box
                  key={index}
                  sx={{
                    width: { xs: "100%", sm: "400px" },
                    marginRight: 2,
                    flexShrink: 0,
                  }}
                >
                  <TestimonialCardContent cardType={card.type}>
                    <TestimonialCardStyle>
                      <HeadingButton cardType={card.type}>
                        <IoEllipseSharp
                          style={{
                            marginRight: "10px",
                            color: getColor(card.type),
                            fontSize: "10px",
                          }}
                        />
                        {card.title}
                      </HeadingButton>
                    </TestimonialCardStyle>
                    <CardActionArea>
                      <TestimonialCard>
                        <TestimonialsCardDescription variant="body2">
                          {card.description}
                        </TestimonialsCardDescription>
                        <UserContainer>
                          <ProfileImage
                            src={card.profile}
                            alt={`${card.name} profile image`}
                          />
                          <div>
                            <UserName>{card.name}</UserName>
                            <UserRole>{card.role}</UserRole>
                          </div>
                          <VectorIcon
                            src={images.testimonials}
                            alt="Testimonials icon"
                          />
                        </UserContainer>
                      </TestimonialCard>
                    </CardActionArea>
                  </TestimonialCardContent>
                </Box>
              ))}
            </motion.div>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}
