import React from "react";
import {
  Box,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import images from "@/utils/images";

const BannerContainer = styled(Box)(({ theme }) => ({
  padding: "3%",
  paddingBottom: "10%",
  background: theme.palette.background.gradient,
}));

const Breadcrumbs = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "16px",
  [theme.breakpoints.down("sm")]: {
    gap: "0px",
  },
}));

const BreadcrumbText = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: "#32302F",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

const ChevronIcon = styled("img")(({ theme }) => ({
  width: "24px",
  height: "24px",
  marginTop: "4px",
  [theme.breakpoints.down("sm")]: {
    width: "20px",
    height: "20px",
    marginTop: "4px",
  },
}));

const BannerHeading = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  width: "100%",
  fontWeight: theme.typography.fontWeights.semiBold,
  color: theme.palette.primary.main,
  fontSize: theme.typography.fontSize[70],
  lineHeight: 1.2,
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[36],
    textAlign: "left",
  },
}));

const Highlight = styled("span")(() => ({
  background: "linear-gradient( #2AA3D0, #2FA6A2)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

const MetaInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  alignItems: "center",
  marginTop: theme.spacing(5),
  color: theme.palette.text.subHeading,
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(2.25),
  },
}));

const MetaItem = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "16px",
}));

const BannerImage = styled("img")(({ theme }) => ({
  width: "528px",
  height: "555px",
  borderRadius: "24px",
  objectFit: "cover",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
    marginTop: "32px",
  },
}));

export default function BlogDetailsBanner() {
  const { t } = useTranslation("blogDetail");

  return (
    <BannerContainer>
      <Grid container>
        {/* LEFT SIDE */}
        <Grid size={{ xs: 12, sm: 12, md: 7, lg: 6.5, xl: 5.5 }}>
          <Box sx={{ maxWidth: "640px" }}>
            {/* Breadcrumbs */}
            <Breadcrumbs>
              <BreadcrumbText>{t("banner.breadcrumbHome")}</BreadcrumbText>
              <ChevronIcon src={images.ChevronRight} alt=">" />
              <BreadcrumbText>{t("banner.breadcrumbBlog")}</BreadcrumbText>
              <ChevronIcon src={images.ChevronRight} alt=">" />
              <BreadcrumbText>{t("banner.breadcrumbLast")}</BreadcrumbText>
            </Breadcrumbs>

            {/* 4-line H1 */}
            <Box component="h1">
              <BannerHeading>{t("banner.heading1")}</BannerHeading>
              <BannerHeading>
                <Highlight>{t("banner.headingHighlited")}</Highlight>
              </BannerHeading>
              <BannerHeading>{t("banner.heading2_part1")}</BannerHeading>
              <BannerHeading>{t("banner.heading2_part2")}</BannerHeading>
            </Box>

            {/* Meta Info */}
            <MetaInfo>
              <MetaItem>
                <img src="/favicon.ico" alt="Raqamyah" width={20} height={20} />
                {t("banner.meta.author")}
              </MetaItem>
              <MetaItem>
                <FaCalendarAlt />
                {t("banner.meta.date")}
              </MetaItem>
              <MetaItem>
                <FaClock />
                {t("banner.meta.time")}
              </MetaItem>
            </MetaInfo>
          </Box>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid
          size={{ xs: 12, sm: 12, md: 5, lg: 5.5, xl: 6.5 }}
          sx={{ paddingTop: { xs: "10%", sm: "10%", lg: 0 } }}
        >
          <BannerImage src={images.DetailsBanner} alt="Blog Banner" />
        </Grid>
      </Grid>
    </BannerContainer>
  );
}
