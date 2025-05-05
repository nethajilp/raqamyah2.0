import { Box, Container } from "@mui/material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import PageContainer from "@/components/PageContainer";
import { padding } from "@mui/system";
import React from "react";
const SEO = React.lazy(() => import("./seo"));
const InvestorsBanner = React.lazy(() => import("./investors/InvestorsBanner"));
const InvestorsClientLogo = React.lazy(() => import("./investors/InvestorsClientLogo"));
const InvestorsCrowdFunding = React.lazy(() => import("./investors/InvestorsCrowdFunding"));
const InvestorsHowItWorks = React.lazy(() => import("./investors/InvestorsHowItWorks"));
const InvestorsReason = React.lazy(() => import("./investors/InvestorsReason"));
const InvestorsFaq = React.lazy(() => import("./investors/InvestorsFaq"));
const InvestorsInvestingGraph = React.lazy(() => import("./investors/InvestorsInvestingGraph"));
const InvestorsInvesting = React.lazy(() => import("./investors/InvestorsInvesting"));
const InvestorsScope = React.lazy(() => import("./investors/InvestorsScope"));
const InvestorsFuelYourGrowth = React.lazy(() => import("./investors/InvestorsFuelYourGrowth"));
function InvestorsPage() {
  const { t, i18n } = useTranslation();
  const { heading, description, button } = t("fuelyourgrowth", {
    returnObjects: true,
  });
  return (
    <>
      <SEO
        title="Investors | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia"
        description="We combine the best of technology and financial analysis to select the right SMEs. Only creditworthy applications are selected and proposed to financers."
        ogTitle="We select quality SMEs for you."
        ogDescription="We combine the best of technology and financial analysis to select the right SMEs. Only creditworthy applications are selected and proposed to financers."
        ogImage={`${process.env.NEXT_PUBLIC_IMAGE_CDN}/investor/banner.webp`}
        keywords="Alternative financing, SME financing, Financial services technology, Loan management system, Crowd-sourced funding"
      />

      <Box>
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            textAlign: "center",
            marginTop: 0,
            maxWidth: "1280px", // Fixed width for large screens
            width: "100%", // Ensure full width on smaller screens
            padding: {
              xs: "16px", // Adjust padding for xs screens (mobile)
              sm: "16px", // Adjust padding for sm screens (tablet)
              md: "20px 112px 80px 112px", // Padding for md and up (larger screens)
            },
          }}
        >
          <InvestorsBanner />
        </Container>
        <Box
          sx={{
            background: (theme) => theme.palette.background.paper,
            paddingBottom: { md: "120px" },
          }}
        >
          <PageContainer>
            <InvestorsClientLogo />
          </PageContainer>
        </Box>
        <Box sx={{ background: (theme) => theme.palette.primary.main }}>
          <PageContainer>
            <InvestorsCrowdFunding />
          </PageContainer>
        </Box>
        <Box
          sx={{
            background: (theme) => theme.palette.background.paper,
            paddingBottom: { md: "120px" },
          }}
        >
          <PageContainer>
            <InvestorsHowItWorks />
          </PageContainer>
        </Box>
        <Box
          sx={{
            background: (theme) => theme.palette.background.gradient,
            paddingBottom: { md: "120px" },
          }}
        >
          <PageContainer>
            <InvestorsScope />
          </PageContainer>
        </Box>
        <Box
          sx={{
            background: (theme) => theme.palette.background.paper,
            paddingBottom: { md: "120px" },
          }}
        >
          <PageContainer>
            <InvestorsInvesting />
          </PageContainer>
        </Box>
        <Box
          sx={{
            background: (theme) => theme.palette.primary.main,
            paddingBottom: { md: "120px" },
          }}
        >
          <PageContainer>
            <InvestorsReason />
          </PageContainer>
        </Box>
        <Box sx={{ background: (theme) => theme.palette.background.gradient }}>
          <PageContainer>
            <InvestorsInvestingGraph />
          </PageContainer>
        </Box>
        <Box sx={{ background: (theme) => theme.palette.background.paper }}>
          <PageContainer>
            <InvestorsFaq />
          </PageContainer>
        </Box>
        <Box sx={{ background: (theme) => theme.palette.background.paper }}>
          <PageContainer>
            <InvestorsFuelYourGrowth />
          </PageContainer>
        </Box>
      </Box>
    </>
  );
}

export default InvestorsPage;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "investors"])), // Load correct language
    },
  };
}
