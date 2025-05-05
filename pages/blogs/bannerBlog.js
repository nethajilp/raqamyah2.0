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

// Styled components
const BannerContainer = styled(Box)(({ theme }) => ({
  padding: "3%",
  paddingBottom: "10%",
  background: theme.palette.background.gradient,
}));

const BannerHeading = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  width: "100%",
  fontWeight: theme.typography.fontWeights.semiBold,
  color: theme.palette.primary.main,
  fontSize: theme.typography.fontSize[70],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[36],
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
  background: "white",
});

const bulletStyle = {
  color: "#37AA57", // Bullet color
  fontSize: "20px", // Bullet size
  display: "inline-block",
};

export default function BannerBlog() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { t, i18n } = useTranslation("blog");

  const textContent = i18n.language == "en" ? englishContent : arabicContent;
  const { heading, title, highlighted, description, button } =
    textContent.banner;

  return (
    <BannerContainer>
      <Grid container>
        <Grid size={{ xs: 12, sm: 12, md: 7, lg: 6.5, xl: 5.5 }}>
          <Grid>
            <span style={{ color: "#37AA57" }}>{t("banner.title")}</span>{" "}
            <span style={bulletStyle}>•</span> {t("banner.titleTime")}
          </Grid>
          <Grid sx={{ paddingTop: "0%", paddingBottom: "5%" }}>
            <BannerHeading variant="h1">
              {t("banner.heading1")}{" "}
              <span
                style={{
                  background: "linear-gradient( #2AA3D0, #2FA6A2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t("banner.headingHighlited")}
              </span>{" "}
              {t("banner.heading2")}
            </BannerHeading>
          </Grid>
          <Grid>
            <BannerBody variant="body1">{t("banner.description")}</BannerBody>
          </Grid>
          <Grid sx={{ paddingTop: "5%" }}>
            <Grid
              container
              width="100%"
              sx={{
                justifyContent: {
                  xs: "flex-start",
                  sm: "flex-start",
                  lg: "flex-start",
                },
                alignItems: "center",
              }}
            >
              <SectionButton variant="contained">
                {t("banner.button")}
              </SectionButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 5, lg: 5.5, xl: 6.5 }}
          sx={{
            paddingTop: { xs: "10%", sm: "10%", lg: 0 },
          }}
        >
          <BannerImage src={images.blogbanner} alt="Banner" />
        </Grid>
      </Grid>
    </BannerContainer>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "blog"])),
    },
  };
}
