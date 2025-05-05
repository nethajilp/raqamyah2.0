import { Box, Container } from "@mui/material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { useTranslation } from "react-i18next";

const SEO = React.lazy(() => import("./seo"));
const LegalBanner = React.lazy(() => import("./legalAndCompliance/LegalBanner"));
const LegalCompliance = React.lazy(() => import("./legalAndCompliance/LegalCompliance"));

function LegalAndCompliancePage() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <SEO
        title="Legal And Compliance | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia"
        description="These General Terms and Conditions (General Terms) shall apply to you as a user of the Site, irrespective of whether you are a Financer or a Financee (Debtor)."
        ogTitle="Legal Terms And Conditions"
        ogDescription="These General Terms and Conditions (General Terms) shall apply to you as a user of the Site, irrespective of whether you are a Financer or a Financee (Debtor)."
        keywords="Microloans, Debt crowdfunding ,Crowdlending risks, Crowdlending returns"
      />

      <Box>
        {/* Banner Section */}
        <Box sx={{ background: (theme) => theme.palette.background.gradient }}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              textAlign: "center", // Centered for mobile/tablet
              marginTop: 0,
              maxWidth: "1280px", // Fixed width for larger screens
              width: "100%", // Full width on smaller screens
              paddingX: {
                xs: "16px", // Adjust padding for mobile
                sm: "16px", // Adjust padding for tablets
                md: "32px", // Padding for larger screens
              },
            }}
          >
            <LegalBanner />
          </Container>
        </Box>

        {/* Main Legal Section */}
        <Box sx={{ background: (theme) => theme.palette.background.paper }}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              maxWidth: "1280px", // Fixed width for larger screens
              width: "100%", // Full width on smaller screens
              paddingTop: "5%", // Top padding to space content
              paddingX: {
                xs: "16px", // Adjust padding for mobile
                sm: "16px", // Adjust padding for tablets
                md: "32px", // Padding for larger screens
              },
            }}
          >
            <LegalCompliance />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default LegalAndCompliancePage;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // Load correct language
    },
  };
}
