import { cardData } from "@/helper/data";
import images from "@/utils/images";
import {
  Box,
  CardActionArea,
  CardContent,
  styled,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import englishContent from "../../public/i18n/locales/en/investors.json";
import arabicContent from "../../public/i18n/locales/ar/investors.json";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const LogoContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
}));

const ClientHeader = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[24],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[16],
  },
  fontWeight: theme.typography.fontWeights.semiBold,
  color: theme.palette.text.darkBlue,
  textAlign: "center",
  marginTop: 20,
}));

const LogoImage = styled("img")(({ theme }) => ({
  width: "auto",
  maxWidth: 150,
  height: "auto",
  maxHeight: "100%",
  margin: "20px auto",
  display: "block",
  opacity: 0.7,
  filter: "grayscale(100%)", // Apply grayscale by default
  transition: "filter 0.3s ease-in-out", // Smooth transition
  "&:hover": {
    filter: "grayscale(0%)", // Remove grayscale on hover
  },
  // Mobile responsiveness
  [theme.breakpoints.down("sm")]: {
    maxWidth: 50, // Reduce size for mobile
    margin: "5px auto", // Adjust spacing
    opacity: 0.9, // Increase visibility
  },
}));

const LogoCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "360px",
  width: "100%",
  textAlign: "left",
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    height: "300px",
  },
}));

const FlexContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

const LogoCardHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.darkBlue,
  fontSize: theme.typography.fontSize[20],
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize[28],
  },
  fontWeight: theme.typography.fontWeights.semiBold,
  textAlign: "left",
  marginBottom: theme.spacing(1),
}));

const LogoCardDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.subHeading,
  fontSize: theme.typography.fontSize[16],
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[24],
  textAlign: "left",
}));

const VectorImage = styled("img")(({ theme }) => ({
  objectFit: "contain",
  marginBottom: theme.spacing(2),
}));

const BankImage = styled("img")(({ theme }) => ({
  objectFit: "contain",
  marginBottom: theme.spacing(2),
}));

const SparkleImage = styled("img")(({ theme }) => ({
  objectFit: "contain",
  marginBottom: theme.spacing(2),
}));

const InvestorsClientLogo = () => {
  const { t, i18n } = useTranslation();
  const textContent =
  i18n.language == "en" ? englishContent.client : arabicContent.client;

  return (
    <LogoContainer>
      <Typography
        sx={{
          fontSize: { xs: "18px", sm: "24px" },
          textAlign: "center",
          color: (theme) => theme.palette.text.darkBlue,
        }}>
        {textContent.heading}
      </Typography>
      <Grid container spacing={2}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(5, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",
            },
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: 2,
          }}
        >
          {cardData.clientLogo.map((logo, index) => (
            <Grid
              item
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LogoImage
                src={logo.logoUrl}
                alt={logo.name}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        display={"flex"}
        alignItems={"stretch"}
        justifyContent={"center"}
        textAlign={"center"}
        sx={{
          marginTop: "30px",
        }}
      >
        {textContent.cards.map((card, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 4 }}
            sx={{
              background: (theme) =>
                theme.palette.background[`aboutCard${index + 1}`],
              borderRadius: 5,
            }}
          >
            <CardActionArea>
              <LogoCardContent>
                <FlexContainer>
                  {index === 0 && (
                    <VectorImage
                      src={images.investPeople}
                      alt="Invest People Icon"
                    />
                  )}
                  {index === 1 && (
                    <BankImage
                      src={images.saudiLicense1}
                      alt="Saudi License Icon"
                    />
                  )}
                  {index === 2 && (
                    <SparkleImage
                      src={images.islamicCompolaint}
                      alt="Islamic Complaint Icon"
                    />
                  )}
                </FlexContainer>
                <div>
                  <LogoCardHeading gutterBottom variant="h2" component="div">
                    {card.title}
                  </LogoCardHeading>
                  <LogoCardDescription variant="body2">
                    {card.description}
                  </LogoCardDescription>
                </div>
              </LogoCardContent>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </LogoContainer>
  );
};

export default InvestorsClientLogo;

export async function getServerSideProps({ locale }) {
  return {
    redirect: {
      destination: "/investors",
      permanent: false,
    },
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
