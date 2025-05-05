import React from "react";
import {
  Box,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Styled Components
const LegalContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
}));

const LegalHeading = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontWeight: theme.typography.fontWeights.bold,
  color: theme.palette.primary.main,
  fontSize: theme.typography.fontSize[56],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[24],
  },
}));

const LegalSubHeading = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontWeight: theme.typography.fontWeights.medium,
  color: theme.palette.text.legalSub,
  fontSize: theme.typography.fontSize[40],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[20],
  },
}));

const LegalBody = styled(Typography)(({ theme }) => ({
  textAlign: "justify",
  color: theme.palette.text.legalSub,
  fontSize: theme.typography.fontSize[16],
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[24],
}));

export default function LegalCompliance() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation("legal");

  // Extract the text content from the translation
  const content5 = t("introduction.content5");

  // Split the content by "contactus@raqamyah.com" and wrap the email with <a> tag
  const email = "contactus@raqamyah.com";
  const parts = content5.split(email);
  return (
    <LegalContainer>
      <Grid container>
        <Grid
          size={{ xs: 12, sm: 12, md: 10, lg: 9, xl: 8 }}
          sx={{
            borderBottom: "1px solid var(--Cerulean-200, #C1E4F6)",
            paddingBottom: "16px",
          }}
        >
          <LegalHeading>{t("subHeading")}</LegalHeading>
          <LegalSubHeading sx={{ paddingTop: "1%" }}>
            {t("introduction.heading")}
          </LegalSubHeading>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("introduction.content1")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("introduction.content2")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("introduction.content3")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("introduction.content4")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {parts[0]}
            <a
              href={`mailto:${email}`}
              style={{ color: "blue", textDecoration: "underline" }}
            >
              {email}
            </a>
            {parts[1]}
          </LegalBody>
        </Grid>

        <Grid
          size={{ xs: 12, sm: 12, md: 10, lg: 9, xl: 8 }}
          sx={{
            borderBottom: "1px solid var(--Cerulean-200, #C1E4F6)",
            paddingBottom: "16px",
          }}
        >
          <LegalSubHeading sx={{ paddingTop: "1%" }}>
            {t("disclaimerRiskWarning.heading")}
          </LegalSubHeading>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("disclaimerRiskWarning.content1")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("disclaimerRiskWarning.content2")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("disclaimerRiskWarning.content3")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("disclaimerRiskWarning.content4")}
          </LegalBody>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 10, lg: 9, xl: 8 }}
          sx={{
            borderBottom: "1px solid var(--Cerulean-200, #C1E4F6)",
            paddingBottom: "16px",
          }}
        >
          <LegalSubHeading sx={{ paddingTop: "1%" }}>
            {t("disclaimerWarranties.heading")}
          </LegalSubHeading>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("disclaimerWarranties.content1")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("disclaimerWarranties.content2")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("disclaimerWarranties.content3")}
          </LegalBody>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 10, lg: 9, xl: 8 }}
          sx={{
            borderBottom: "1px solid var(--Cerulean-200, #C1E4F6)",
            paddingBottom: "16px",
          }}
        >
          <LegalSubHeading sx={{ paddingTop: "1%" }}>
            {t("eligibility&Registration.heading")}
          </LegalSubHeading>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("eligibility&Registration.content1")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("eligibility&Registration.content2")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("eligibility&Registration.content3")}
          </LegalBody>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 10, lg: 9, xl: 8 }}
          sx={{
            borderBottom: "1px solid var(--Cerulean-200, #C1E4F6)",
            paddingBottom: "16px",
          }}
        >
          <LegalSubHeading sx={{ paddingTop: "1%" }}>
            {t("security.heading")}
          </LegalSubHeading>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("security.content1")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("security.content2")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("security.content3")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("security.content4")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("security.content5")}
          </LegalBody>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 10, lg: 9, xl: 8 }}
          sx={{
            borderBottom: "1px solid var(--Cerulean-200, #C1E4F6)",
            paddingBottom: "16px",
          }}
        >
          <LegalSubHeading sx={{ paddingTop: "1%" }}>
            {t("siteAvailability.heading")}
          </LegalSubHeading>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("siteAvailability.content1")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("siteAvailability.content2")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("siteAvailability.content3")}
          </LegalBody>
        </Grid>

        <Grid
          size={{ xs: 12, sm: 12, md: 10, lg: 9, xl: 8 }}
          sx={{
            borderBottom: "1px solid var(--Cerulean-200, #C1E4F6)",
            paddingBottom: "16px",
          }}
        >
          <LegalSubHeading sx={{ paddingTop: "1%" }}>
            {t("siteRestriction.heading")}
          </LegalSubHeading>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("siteRestriction.content1")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("siteRestriction.content2")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("siteRestriction.content3")}
          </LegalBody>

          {t("siteRestriction.content3List", { returnObjects: true }).map(
            (point, index) => (
              <LegalBody
                key={index}
                sx={{ paddingTop: "2%", paddingLeft: "4%" }}
              >
                {t(`• ${point}`)}
              </LegalBody>
            )
          )}
        </Grid>

        <Grid
          size={{ xs: 12, sm: 12, md: 10, lg: 9, xl: 8 }}
          sx={{
            borderBottom: "1px solid var(--Cerulean-200, #C1E4F6)",
            paddingBottom: "16px",
          }}
        >
          <LegalSubHeading sx={{ paddingTop: "1%" }}>
            {t("obligations.heading")}
          </LegalSubHeading>

          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("obligations.content1")}
          </LegalBody>

          {t("obligations.content1List", { returnObjects: true }).map(
            (point, index) => (
              <LegalBody
                key={index}
                sx={{ paddingTop: "2%", paddingLeft: "4%" }}
              >
                {t(`• ${point}`)}
              </LegalBody>
            )
          )}
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("obligations.content2")}
          </LegalBody>

          {t("obligations.content2List", { returnObjects: true }).map(
            (point, index) => (
              <LegalBody
                key={index}
                sx={{ paddingTop: "2%", paddingLeft: "4%" }}
              >
                {t(`• ${point}`)}
              </LegalBody>
            )
          )}
        </Grid>

        <Grid
          size={{ xs: 12, sm: 12, md: 10, lg: 9, xl: 8 }}
          sx={{
            borderBottom: "1px solid var(--Cerulean-200, #C1E4F6)",
            paddingBottom: "16px",
          }}
        >
          <LegalSubHeading sx={{ paddingTop: "1%" }}>
            {t("conflictInterest.heading")}
          </LegalSubHeading>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("conflictInterest.content1")}
          </LegalBody>
        </Grid>

        <Grid
          size={{ xs: 12, sm: 12, md: 10, lg: 9, xl: 8 }}
          sx={{
            borderBottom: "1px solid var(--Cerulean-200, #C1E4F6)",
            paddingBottom: "16px",
          }}
        >
          <LegalSubHeading sx={{ paddingTop: "1%" }}>
            {t("liability&indemnity.heading")}
          </LegalSubHeading>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("liability&indemnity.content1")}
          </LegalBody>
          {t("liability&indemnity.content1List", { returnObjects: true }).map(
            (point, index) => (
              <LegalBody
                key={index}
                sx={{ paddingTop: "2%", paddingLeft: "4%" }}
              >
                {t(`• ${point}`)}
              </LegalBody>
            )
          )}

          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("liability&indemnity.content2")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("liability&indemnity.content3")}
          </LegalBody>
        </Grid>

        <Grid
          size={{ xs: 12, sm: 12, md: 10, lg: 9, xl: 8 }}
          sx={{
            borderBottom: "1px solid var(--Cerulean-200, #C1E4F6)",
            paddingBottom: "16px",
          }}
        >
          <LegalSubHeading sx={{ paddingTop: "1%" }}>
            {t("intellectualProperty.heading")}
          </LegalSubHeading>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("intellectualProperty.content1")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("intellectualProperty.content2")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("intellectualProperty.content3")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("intellectualProperty.content4")}
          </LegalBody>
        </Grid>

        <Grid
          size={{ xs: 12, sm: 12, md: 10, lg: 9, xl: 8 }}
          sx={{
            borderBottom: "1px solid var(--Cerulean-200, #C1E4F6)",
            paddingBottom: "16px",
          }}
        >
          <LegalSubHeading sx={{ paddingTop: "1%" }}>
            {t("confidentiality.heading")}
          </LegalSubHeading>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("confidentiality.content1")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("confidentiality.content2")}
          </LegalBody>
        </Grid>

        <Grid
          size={{ xs: 12, sm: 12, md: 10, lg: 9, xl: 8 }}
          sx={{
            borderBottom: "1px solid var(--Cerulean-200, #C1E4F6)",
            paddingBottom: "16px",
          }}
        >
          <LegalSubHeading sx={{ paddingTop: "1%" }}>
            {t("termination.heading")}
          </LegalSubHeading>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("termination.content1")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("termination.content2")}
          </LegalBody>
        </Grid>

        <Grid
          size={{ xs: 12, sm: 12, md: 10, lg: 9, xl: 8 }}
          sx={{
            borderBottom: "1px solid var(--Cerulean-200, #C1E4F6)",
            paddingBottom: "16px",
          }}
        >
          <LegalSubHeading sx={{ paddingTop: "1%" }}>
            {t("privacy&Cookies.heading")}
          </LegalSubHeading>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("privacy&Cookies.content1")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("privacy&Cookies.content2")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("privacy&Cookies.content3")}
          </LegalBody>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 9, xl: 8 }}>
          <LegalSubHeading sx={{ paddingTop: "1%" }}>
            {t("miscellaneousTerms.heading")}
          </LegalSubHeading>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("miscellaneousTerms.content1")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("miscellaneousTerms.content2")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("miscellaneousTerms.content3")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("miscellaneousTerms.content4")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("miscellaneousTerms.content5")}
          </LegalBody>
          <LegalBody sx={{ paddingTop: "2%" }}>
            {t("miscellaneousTerms.content6")}
          </LegalBody>
        </Grid>
      </Grid>
    </LegalContainer>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["legal"])),
    },
  };
}
