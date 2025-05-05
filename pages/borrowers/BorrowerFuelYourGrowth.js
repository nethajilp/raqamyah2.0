import images from "@/utils/images";
import {
  Box,
  Button,
  CardMedia,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import englishContent from "../../public/i18n/locales/en/borrowers.json";
import arabicContent from "../../public/i18n/locales/ar/borrowers.json";
import { useTranslation } from "react-i18next";

const FuelGrowthHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[56],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[24],
    maxWidth: "100%",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.lineHeights[56],
  },
  fontWeight: theme.typography.fontWeights.semiBold,
  color: theme.palette.text.darkBlue,
  textAlign: "center",
  wordWrap: "break-word",
  whiteSpace: "normal",
  maxWidth: "65%",
  margin: "0 auto",
}));

const FuelGrowthDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.subFuelGrowthHeading,
  maxWidth: "700px",
  margin: "auto",
  fontSize: theme.typography.fontSize[16],
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[24],
  textAlign: "center",
  // marginBottom: theme.spacing(4),
}));

const FuelGrowthButton = styled(Button)(({ theme }) => ({
  background: theme.palette.background.buttonGradient,
  color: theme.palette.primary.contrastText,
  borderRadius: "30px",
  width: "350px",
  height: "54px",
  padding: "20px 28px",
  gap: "10px",
  fontWeight: theme.typography.fontWeights.regular,
  "&:hover": {
    background: theme.palette.background.buttonGradient,
  },
}));

const BlogCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  [theme.breakpoints.down("sm")]: {
    height: "auto",
  },
}));

export default function BorrowerFuelYourGrowth() {
  const { t, i18n } = useTranslation("borrowers");

  const textContent = i18n.language == "en" ? englishContent : arabicContent;
  const { heading, description, button } = t("fuelyourgrowth", {
    returnObjects: true,
  });

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: { xs: "5%", sm: "5%", lg: "0%" }, // Apply paddingTop on sm, remove on lg
          paddingBottom: { xs: "10%", sm: "10%", lg: "10%" }, // Apply paddingBottom on sm, remove on lg
        }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          // marginTop="70px"
          spacing={2}
        >
          <FuelGrowthHeading>{heading}</FuelGrowthHeading>
          <FuelGrowthDescription variant="body1">
            {description}
          </FuelGrowthDescription>
          <Grid>
            <FuelGrowthButton variant="contained">{button}</FuelGrowthButton>
          </Grid>
          {/* <BlogCardMedia
            component="img"
            image={
              isMobile ? images.fuelYourGrowthMobile : images.fuelYourGrowth
            }
          /> */}
        </Grid>
      </Grid>
    </Box>
  );
}
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
