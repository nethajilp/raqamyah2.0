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
import englishContent from "../../public/i18n/locales/en/home.json";
import arabicContent from "../../public/i18n/locales/ar/home.json";
import { useTranslation } from "react-i18next";
import FuelYourGrowthSection from "@/components/FuelYourGrowthSection";

const FuelGrowthHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[56],
  lineHeight: 1,
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[32],
    maxWidth: "100%",
    textAlign: "center",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.lineHeights[50],
  },
  fontWeight: theme.typography.fontWeights.semiBold,
  color: theme.palette.text.darkBlue,
  textAlign: "left",
  wordWrap: "break-word",
  whiteSpace: "normal",
  maxWidth: "70%",
}));

const FuelGrowthDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.subFuelGrowthHeading,
  maxWidth: "70%",
  margin: "auto",
  fontSize: theme.typography.fontSize[16],
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[24],
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[20],
    textAlign: "center",
    maxWidth: "100%",
  },
  paddingTop: "30PX",
  paddingBottom: "30PX",
}));

const FuelGrowthButton = styled(Button)(({ theme }) => ({
  background: theme.palette.background.fuelGrowthButton,
  color: theme.palette.primary.contrastText,
  borderRadius: "30px",
  width: "179px",
  height: "54px",
  padding: "20px 28px",
  gap: "10px",
  fontWeight: theme.typography.fontWeights.regular,
  "&:hover": {
    background: theme.palette.background.buttonGradient,
  },
  margin: "0 auto 0 0",
  [theme.breakpoints.down("sm")]: {
    margin: "0",
    maxWidth: "100%",
  },
  maxWidth: "70%",
}));

export default function InvestorsFuelYourGrowth() {
  const { t, i18n } = useTranslation("home");
  const textContent = i18n.language == "en" ? englishContent : arabicContent;
  const { heading, description, button } = t("fuelyourgrowth", {
    returnObjects: true,
  });
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <FuelYourGrowthSection
      heading={heading}
      description={description}
      button={button}
    />

  );
}

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
