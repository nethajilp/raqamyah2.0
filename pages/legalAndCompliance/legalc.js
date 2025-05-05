import React from "react";
import { Box, Typography, styled, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Styled components
const BannerContainer = styled(Box)(({ theme }) => ({
  padding: "3%",
  background: theme.palette.background.gradient,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}));

const BannerHeading = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeights.semiBold,
  color: theme.palette.primary.main,
  fontSize: theme.typography.fontSize[48],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[28],
  },
}));

export default function LegalComplianceBanner() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <BannerContainer>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <BannerHeading variant="h2">
            {t("General Terms and Conditions (General T&C)")}
          </BannerHeading>
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
