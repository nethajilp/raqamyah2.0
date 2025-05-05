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
  background: theme.palette.background.gradient,
}));

const BannerHeading = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  width: "100%",
  fontWeight: theme.typography.fontWeights.semiBold,
  color: theme.palette.primary.main,
  fontSize: theme.typography.fontSize[72],
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
});

export default function InvestorsBanner() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { t, i18n } = useTranslation();

  const textContent = i18n.language == "en" ? englishContent : arabicContent;
  const { heading, title, titlec, highlighted, description, button } =
    textContent.banner;

  return (
    <BannerContainer>
      <Grid container>
        <Grid size={{ xs: 12, sm: 12, md: 7, lg: 6, xl: 5 }}>
          <Grid>
            <MainHeadingButton>
              <PolygonIcon src={images.polygon} alt="Polygon Icon" />
              {heading}
            </MainHeadingButton>
          </Grid>
          <Grid sx={{ paddingY: "5%" }}>
            <BannerHeading variant="h1">
              {title}{" "}
              <span
                style={{
                  background: "linear-gradient( #2AA3D0, #2FA6A2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {highlighted}
              </span>{" "}
              {i18n.language === "ar" && titlec}{" "}
              {/* Only render titlec if language is Arabic */}
            </BannerHeading>
          </Grid>
          <Grid>
            <BannerBody variant="body1">{description}</BannerBody>
          </Grid>
          <Grid sx={{ paddingTop: "5%" }}>
            <Grid container width={"100%"}>
              <SectionButton variant="contained">{button}</SectionButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={6} xl={6}>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <video
            src={images.investorBanner}
            alt="Raqamyah crowdfunding platform investor video"
            style={{
              width: isMobile?"343px":"571px",
              height: isMobile?"261px":"500px",
              padding: "10px",
              display: "block",
            }}
            autoPlay
            loop
            muted
          />
          </Box>
        
        </Grid>
      </Grid>
    </BannerContainer>
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
