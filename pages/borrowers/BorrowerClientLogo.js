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
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import englishContent from "../../public/i18n/locales/en/borrowers.json";
import arabicContent from "../../public/i18n/locales/ar/borrowers.json";
import { useTranslation } from "react-i18next";

const LogoContainer = styled(Box)(({ theme }) => ({
  padding: "3%",
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
  height: "350px",
  width: "100%",
  textAlign: "left",
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    height: "250px",
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
  [theme.breakpoints.down("sm")]: {
    width: "40px",
    height: "40px",
  },
  objectFit: "contain",
  marginBottom: theme.spacing(2),
}));

const BankImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "40px",
    height: "40px",
  },
  objectFit: "contain",
  marginBottom: theme.spacing(2),
}));

const SparkleImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "40px",
    height: "40px",
  },
  objectFit: "contain",
  marginBottom: theme.spacing(2),
}));

const BorrowerClientLogo = () => {
  const { t, i18n } = useTranslation("borrowers");

  const textContent = t("client", { returnObjects: true });

  return (
    <LogoContainer>
      <Typography
        sx={{
          fontSize: { xs: "18px", sm: "24px" },
          textAlign: "center",
          color: (theme) => theme.palette.text.darkBlue,
          marginBottom: { xs: "10px", sm: "20px" },
          marginTop: { xs: "10px", sm: "30px" },
        }}
      >
        {textContent.heading}
      </Typography>
      <Grid container spacing={2}>
        {/* <Grid
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
          <ClientHeader>{textContent.header}</ClientHeader>
        </Grid> */}

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
                    <VectorImage src={images.money} alt="Money icon" />
                  )}
                  {index === 1 && (
                    <BankImage src={images.bank} alt="Bank icon" />
                  )}
                  {index === 2 && (
                    <SparkleImage src={images.sparkle} alt="Sparkle icon" />
                  )}
                </FlexContainer>
                <Box>
                  <LogoCardHeading gutterBottom variant="h2" component="div">
                    {card.title}
                  </LogoCardHeading>
                  <LogoCardDescription variant="body2">
                    {card.description}
                  </LogoCardDescription>
                </Box>
              </LogoCardContent>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </LogoContainer>
  );
};

export default BorrowerClientLogo;

export async function getServerSideProps({ locale }) {
  return {
    redirect: {
      destination: "/borrowers",
      permanent: false,
    },
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
