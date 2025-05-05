import React from "react";
import {
  Box,
  Typography,
  Button,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import images from "@/utils/images";
import { FaStar } from "react-icons/fa";
import { MainHeadingButton, SectionButton } from "@/styles/Button/customButton";
import { PolygonIcon } from "@/styles/Image/customImage";
import englishContent from "../../public/i18n/locales/en/investors.json";
import arabicContent from "../../public/i18n/locales/ar/investors.json";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Styled components
const BannerContainer = styled(Box)(({ theme }) => ({
  padding: "3%",
  background: theme.palette.background.gradient,
  maxWidth: "1280px", // Ensure it doesn't stretch more than 1280px
  margin: "0 auto", // Center the content horizontally
  [theme.breakpoints.down("sm")]: {
    padding: "2% 10px", // Adjust padding for mobile devices
  },
}));
const BannerHeading = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  width: "100%",
  fontWeight: theme.typography.fontWeights.semiBold,
  color: theme.palette.primary.main,
  fontSize: "72px", // Default for large screens
  [theme.breakpoints.down("xl")]: {
    fontSize: "64px", // Adjust font size for extra large screens (above 1280px)
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "56px", // Adjust for large screens (above 1024px)
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "48px", // Adjust for medium screens (above 768px)
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px", // Adjust for mobile screens
  },
}));

const BannerBody = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.subHeading,
  width: "100%",
  margin: "auto",
  textAlign: "left",
  fontSize: theme.typography.fontSize[18],
  fontWeight: theme.typography.fontWeights.medium,
  lineHeight: theme.typography.lineHeights[24],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[14], // Adjust font size for mobile
  },
}));

const BannerButton = styled(Button)(({ theme }) => ({
  background: theme.palette.background.buttonGradient,
  color: theme.palette.primary.contrastText,
  borderRadius: "30px",
  width: "204px",
  height: "54px",
  padding: "20px 28px",
  gap: "10px",
  fontSize: theme.typography.fontSize[18],
  textTransform: "uppercase",
  fontWeight: theme.typography.fontWeights.regular,
  "&:hover": {
    background: theme.palette.background.buttonGradient,
  },
}));

const RattingText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.subHeading,
  width: "100%",
  margin: "auto",
  textAlign: "left",
  fontSize: theme.typography.fontSize[18],
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[24],
}));

const AvatarImage = styled("img")({
  width: "auto",
  height: "48px",
});

const BannerImage = styled("img")({
  width: "100%",
  height: "auto",
});

export default function StatisticsBanner() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { t, i18n } = useTranslation("statistics");

  const textContent = i18n.language == "en" ? englishContent : arabicContent;
  const { heading, title, description } = t("banner", { returnObjects: true });

  return (
    <BannerContainer>
      <Grid container>
        <Grid size={{ xs: 12, sm: 12, md: 7, lg: 6.5, xl: 5.5 }}>
          <Grid>
            <MainHeadingButton>
              <PolygonIcon src={images.polygon} alt="Polygon Icon" />
              {heading}
            </MainHeadingButton>
          </Grid>
          <Grid sx={{ paddingY: "5%" }}>
            <BannerHeading variant="h1">{title} </BannerHeading>
          </Grid>
          <Grid>
            <BannerBody variant="body1">{description}</BannerBody>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5.5, xl: 6.5 }}>
          <BannerImage
            src={images.statisticsGraph}
            alt="Raqamyah crowdfunding platform investor banner"
          />
        </Grid>
      </Grid>
    </BannerContainer>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    redirect: {
      destination: "/statistics",
      permanent: false,
    },
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
