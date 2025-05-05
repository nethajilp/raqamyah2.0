import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  styled,
  IconButton,
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { MainHeadingButton } from "@/styles/Button/customButton";
import images from "@/utils/images";
import { PolygonIcon } from "@/styles/Image/customImage";

// Banner Section Styles
const BannerSection = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "400px",
  padding: theme.spacing(4, 0), // Default padding for larger screens
  background: "linear-gradient(90deg, #EEF8FE 0%, #EFFAF8 100%)",
  [theme.breakpoints.down("sm")]: {
    padding: 0, // Remove padding for mobile view (sm and below)
  },
}));

const ContactLabel = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  padding: theme.spacing(0.5, 2),
  borderRadius: 20,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: theme.typography.fontSize[14],
  fontWeight: theme.typography.fontWeights.medium,
  marginBottom: theme.spacing(2),
  textTransform: "uppercase",
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeights.bold,
  fontSize: theme.typography.fontSize[56],
  color: "#293E6C",
  lineHeight: 1.2,
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[38],
  },
}));

const InfoCard = styled(Card)(({ theme }) => ({
  borderRadius: 12,
  boxShadow: theme.shadows[2],
  backgroundColor: "#FFFFFF",
}));

const InfoTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: theme.typography.fontWeights.regular,
  marginTop: theme.spacing(2),
  fontSize: theme.typography.fontSize[16],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[16],
    lineHeight: theme.typography.lineHeights[27],
    fontWeight: theme.typography.fontWeights.regular,
  },
}));

const InfoText = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeights.semiBold,
  fontSize: theme.typography.fontSize[24],
  color: theme.palette.primary.main,
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[16],
  },
}));

// Social icons container (Instagram, Twitter, Facebook)
const SocialIconsContainer = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(4),
  gap: theme.spacing(2),
}));

// Style each social icon (circle with a border)
const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: "#000000",
  backgroundColor: "#FFFFFF",
  borderRadius: "50%",
  width: 48,
  height: 48,
  marginTop: "0",
  [theme.breakpoints.up("md")]: {
    marginTop: "170px", // Apply only for laptop and desktop
  },
  "&:hover": {
    backgroundColor: "#293E6C",
    color: "#FFFFFF",
  },
}));

export default function BannerContact() {
  const { t } = useTranslation("contactUs");

  return (
    <>
      {/* Banner Section */}
      <BannerSection>
        <Container
          maxWidth="xl"
          sx={{
            height: "100%",
            paddingX: { xs: 0, sm: "32px" }, // Remove padding for mobile (xs) and set padding for larger screens (sm and up)
          }}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={4}
            sx={{ height: "100%" }}
          >
            {/* LEFT COLUMN */}
            <Grid item xs={12} md={6}>
              <MainHeadingButton>
                <PolygonIcon src={images.polygon} alt="Polygon Icon" />
                {t("banner.label")}
              </MainHeadingButton>
              <MainHeading variant="h1">{t("banner.heading")}</MainHeading>
              <SocialIconsContainer direction="row">
                <SocialIconButton
                  component="a"
                  href="https://www.instagram.com/raqamyahksa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} />
                </SocialIconButton>

                <SocialIconButton
                  component="a"
                  href="https://x.com/raqamyah"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter size={24} />
                </SocialIconButton>

                <SocialIconButton
                  component="a"
                  href="https://www.facebook.com/raqamyahksa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook size={24} />
                </SocialIconButton>
              </SocialIconsContainer>
            </Grid>

            {/* RIGHT COLUMN: Info Card */}
            <Grid item xs={12} md={6}>
              <InfoCard>
                <CardContent>
                  <InfoTitle variant="subtitle1">
                    {t("infoCard.officeTimeTitle")}
                  </InfoTitle>
                  <InfoText variant="body1">
                    {t("infoCard.officeTimeText")}
                  </InfoText>

                  <InfoTitle variant="subtitle1">
                    {t("infoCard.emailTitle")}
                  </InfoTitle>
                  <InfoText variant="body1">{t("infoCard.emailText")}</InfoText>

                  <InfoTitle variant="subtitle1">
                    {t("infoCard.contactTitle")}
                  </InfoTitle>
                  <InfoText variant="body1">
                    {t("infoCard.contactText")}
                  </InfoText>

                  <InfoTitle variant="subtitle1">
                    {t("infoCard.locationTitle")}
                  </InfoTitle>
                  <InfoText variant="body1">
                    {t("infoCard.locationText")}
                  </InfoText>
                </CardContent>
              </InfoCard>
            </Grid>
          </Grid>
        </Container>
      </BannerSection>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "contactUs"])), // Load translations
    },
  };
}
