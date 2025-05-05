import { Box, Container } from "@mui/material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { useTranslation } from "react-i18next";

const AboutBanner = React.lazy(() => import("./aboutus/AboutBanner"));
const AboutClientLogo = React.lazy(() => import("./aboutus/AboutClientLogo"));
const AboutOurTeam = React.lazy(() => import("./aboutus/AboutOurTeam"));
const AboutOurVision = React.lazy(() => import("./aboutus/AboutOurVision"));
const AboutWhoWeAre = React.lazy(() => import("./aboutus/AboutWhoWeAre"));
const SEO = React.lazy(() => import("./seo"));


function AboutUsPage() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <SEO
        title="About Us | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in
       Saudi Arabia"
        description="Raqamyah is a crowdlending financing platform licensed by Saudi Central Bank. As a Fintech company, Raqamyah uses innovative technology to directly connect small businesses seeking fast,affordable finance with financers who can help fund their growth."
        ogTitle="About | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia of your content"
        ogDescription="Raqamyah is a crowdlending financing platform licensed by Saudi Central Bank. As a Fintech company, Raqamyah uses innovative technology to directly connect small businesses seeking fast,affordable finance with financers who can help fund their growth."
        ogImage="https://your-cdn.com/assets/images/about-us-banner.webp"
        keywords="Digital finance, Peer-to-peer lending, Investment opportunities, Financial technology"
      />

      <Box>
        <Box sx={{ background: (theme) => theme.palette.background.paper }}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              textAlign: "center",
              marginTop: 0,
              maxWidth: "1280px",
              width: "100%", 
              paddingX: {
                xs: "16px",
                sm: "16px", 
                md: "32px", 
              },
            }}
          >
            <AboutBanner />
          </Container>
        </Box>

        <Box sx={{ background: (theme) => theme.palette.background.vision }}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              maxWidth: "1280px",
              paddingTop: "5%",
              paddingX: "32px",
            }}
          >
            <AboutWhoWeAre />
          </Container>
        </Box>

        <Box sx={{ background: (theme) => theme.palette.background.white }}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              maxWidth: "1280px",
              paddingTop: "5%",
            }}
          >
            <AboutOurTeam />
          </Container>
        </Box>

        <Box sx={{ background: (theme) => theme.palette.background.vision }}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              maxWidth: "1280px",
              paddingTop: "5%",
              paddingX: "32px",
            }}
          >
            <AboutOurVision />
          </Container>
        </Box>

        <Box sx={{ background: (theme) => theme.palette.background.white }}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              maxWidth: "1280px",
              paddingTop: "5%",
              paddingX: "32px",
            }}
          >
            <AboutClientLogo />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default AboutUsPage;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "aboutUs"])),
    },
  };
}
