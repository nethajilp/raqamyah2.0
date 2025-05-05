import { cardData } from "@/helper/data";
import images from "@/utils/images";
import { Box, Card, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

// Styled Components
const LogoContainer = styled(Box)(({ theme }) => ({
  padding: "3% 0%",
  background: theme.palette.background.paper,
}));

const ClientHeader = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[24],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[20],
    marginTop: 2,
  },
  fontWeight: theme.typography.fontWeights.semiBold,
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

  // Responsive styles for mobile screens
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    maxWidth: "300px",
    height: "auto",
    margin: "10px auto",
  },
}));

const CountCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.logoBackground,
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "195px",
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    padding: "10px",
  },
}));

const CountNo = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.darkBlue,
  fontSize: theme.typography.fontSize[28],
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize[48],
  },
  fontWeight: theme.typography.fontWeights.semiBold,
  textAlign: "center",
  marginBottom: theme.spacing(1),
}));

const CountTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.subHeading,
  fontSize: theme.typography.fontSize[18],
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[24],
  textAlign: "center",
}));

const AboutImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  objectFit: "contain",
}));

const AboutClientLogo = () => {
  const { t, i18n } = useTranslation("home");

  // Fetch translated content for clientLogo dynamically
  const { trusted, investorCount, conjunction, borrowerCount } = t(
    "clientLogo",
    { returnObjects: true }
  );

  return (
    <LogoContainer>
      <Grid container spacing={2}>
        <Grid
          size={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: 2, sm: 0 },
            textAlign: { xs: "center", sm: "left" },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <ClientHeader>
            {trusted} &nbsp;
            <span
              style={{
                background: "linear-gradient(to right, #28A4DB, #37AA57)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {investorCount}
            </span>
            &nbsp; {conjunction} &nbsp;
          </ClientHeader>
          <ClientHeader>
            <span
              style={{
                background: "linear-gradient(to right, #28A4DB, #37AA57)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {borrowerCount}
            </span>
          </ClientHeader>
        </Grid>

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
              <LogoImage src={logo.logoUrl} alt={logo.name} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        sx={{
          marginTop: "30px",
        }}
      >
        {cardData.counts.map((item, index) => (
          <Grid
            key={index}
            size={{ xs: index == 2 ? 12 : 6, sm: 4, md: 4, lg: 4 }}
          >
            <CountCard elevation={0}>
              <CountNo>{item.no[i18n.language]}</CountNo>
              <CountTitle>{item.title[i18n.language]}</CountTitle>
            </CountCard>
          </Grid>
        ))}
      </Grid>
    </LogoContainer>
  );
};

export default AboutClientLogo;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}
