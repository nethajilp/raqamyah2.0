import images from "@/utils/images";
import { Box, styled, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import englishContent from "../../public/i18n/locales/en/home.json";
import arabicContent from "../../public/i18n/locales/ar/home.json";
import { useTranslation } from "react-i18next";
import SectionHeading from "@/components/SectionHeading";
import { HighlightedText } from "@/components/MainHeading";
import GridCard from "@/components/GridCard";
import { useTheme } from "@mui/styles";
import { motion } from "framer-motion";
// Styled components
const AboutTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[56],
  lineHeight: "110%",
  fontWeight: theme.typography.fontWeights.semiBold,
  color: theme.palette.text.darkBlue,
  textAlign: "left",
maxWidth:"367px",
  [theme.breakpoints.down("lg")]: {
    fontSize: theme.typography.fontSize[44],
    lineHeight: "110%",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize[32],
    lineHeight: "110%",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[32],
    lineHeight: "110%",
    paddingRight: "10px",
  },
}));
const AboutDescription = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[32],
  lineHeight: "42px",
  fontWeight: theme.typography.fontWeights.semiBold,
  color: theme.palette.text.darkBlue,
  textAlign: "left",
  paddingRigth: "30px",
  [theme.breakpoints.down("lg")]: {
    fontSize: theme.typography.fontSize[32],
    lineHeight: "30px",
    paddingRight: "10px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize[24],
    lineHeight: "30px",
    paddingRight: "10px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[24],
    lineHeight: "30px",
    paddingRight: "10px",
  },
}));

const AboutImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  objectFit: "contain",
}));
const MotionContainer = motion(Box);

export default function HomeAbout() {
  const { t, i18n } = useTranslation("home");
  const theme = useTheme();
  const textContent = i18n.language == "en" ? englishContent : arabicContent;
  const { heading, description1, description2, cards } = t("about", {
    returnObjects: true,
  });

  return (
    <MotionContainer
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 2 }}
      sx={{
        background: (theme) => theme.palette.background.paper,
      }}
    >
      <Grid2 container display={"flex"}>
        <Grid2
          size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
          pr={6}
          display={"flex"}
          flexDirection={"column"}
        >
          <Box>
            <SectionHeading title={heading} />
          </Box>

          <AboutTitle style={{ marginTop: "15px" }}>{description1}</AboutTitle>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }} display={"flex"}>
          <AboutDescription
            sx={{ marginTop: { xs: "10px", sm: "10px", lg: "0px" } }}
          >
            {description2.at}{" "}
            <HighlightedText>{description2.raqamyah}</HighlightedText>
            {" "}{description2.part1}{" "}
            <span style={{ color: "#ABB2C0" }}>{description2.highlighted}</span>
          </AboutDescription>
        </Grid2>
      </Grid2>
      <Grid2
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        mt={2}
      >
        {cards.map((card, index) => {
          return (
            <Grid2
              key={index}
              size={{ xs: 12, sm: 12, md: 4 }}
              sx={{
                borderRadius: 5,
                marginTop: "20px",
                background: (theme) =>
                  theme.palette.background[`aboutCard${index + 1}`],
              }}
            >
              <GridCard
                image={images[card.image]}
                heading={card.heading}
                description={card.description}
              />
            </Grid2>
          );
        })}
      </Grid2>

      <Grid2
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        sx={{
          display: { xs: "none", sm: "flex" },
        }}
      >
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
          <AboutImage
            src={images.cardBottom}
            alt="Background decorative image"
          />
        </Grid2>
      </Grid2>
    </MotionContainer>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
