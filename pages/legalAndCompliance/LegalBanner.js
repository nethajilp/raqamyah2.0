import React from "react";
import { Box, Typography, styled, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Styled components
const BannerContainer = styled(Box)(({ theme }) => ({
  padding: "6% 18%",
  background: theme.palette.background.gradient,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  minHeight: "180px", // Ensures consistent height
  [theme.breakpoints.down("sm")]: {
    padding: "6% 6%",
  },
}));

const BannerHeading = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeights.semiBold,
  color: theme.palette.primary.main,
  fontSize: theme.typography.fontSize[72], // Adjusted for better fit
  lineHeight: "1.2", // Matches spacing in the image
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[32],
  },
}));

export default function LegalBanner() {
  const theme = useTheme();
  const { t } = useTranslation("legal");

  return (
    <BannerContainer>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <BannerHeading variant="h1">{t("heading")}</BannerHeading>
        </Grid>
      </Grid>
    </BannerContainer>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
