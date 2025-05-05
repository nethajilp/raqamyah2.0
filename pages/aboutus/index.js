import { Box, Container } from "@mui/material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import Banner from "./AboutBanner";
import WhoWeAre from "./AboutWhoWeAre";
import ClientLogo from "./AboutClientLogo";
import OurVision from "./AboutOurVision";
import OurTeam from "./AboutOurTeam";
import SEO from ".././seo";

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
              maxWidth: "1280px", // Fixed width for large screens
              width: "100%", // Ensure full width on smaller screens
              paddingX: {
                xs: "16px", // Adjust padding for xs screens (mobile)
                sm: "16px", // Adjust padding for sm screens (tablet)
                md: "32px", // Padding for md and up (larger screens)
              },
            }}
          >
            <Banner />
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
            <WhoWeAre />
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
            <OurTeam />
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
            <OurVision />
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
            <ClientLogo />
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
