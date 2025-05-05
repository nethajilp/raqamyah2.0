import { Box, Container } from "@mui/material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { useTranslation } from "react-i18next";
const SEO = React.lazy(() => import("./seo"));
const PageContainer = React.lazy(() => import("@/components/PageContainer"));
const HomeHeroSection = React.lazy(() => import("./home/HomeHeroSection"));
const HomeAbout = React.lazy(() => import("./home/HomeAbout"));
const HomeFinancial = React.lazy(() => import("./home/HomeFInancial"));
const HomeHowItWorks = React.lazy(() => import("./home/HomeHowItWorks"));
const HomeShariahCompliant = React.lazy(() =>
  import("./home/HomeShariahCompliant")
);
const HomeTestimonials = React.lazy(() => import("./home/HomeTestimonials"));
const HomeClientLogo = React.lazy(() => import("./home/HomeClientLogo"));
const HomeBlog = React.lazy(() => import("./home/HomeBlog"));
const HomeFuelYourGrowth = React.lazy(() =>
  import("./home/HomeFuelYourGrowth")
);
function Home() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <SEO
        title="Home | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia"
        description="With a quick application and fast decision, you can stay focused on your business while we focus on your financed amount. Taking your business to the next level has never been easier."
        ogTitle="We’re here to help you thrive"
        ogDescription="With a quick application and fast decision, you can stay focused on your business while we focus on your financed amount. Taking your business to the next level has never been easier."
        ogImage={`${process.env.NEXT_PUBLIC_IMAGE_CDN}/home/homeHero.webm`}
        keywords="Crowdfunding, Investment, SME Funding, Saudi Arabia, رقمية, Raqamyah, Business Loans, Peer-to-Peer Lending, Alternative Investments"
      />

      <Box>
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            textAlign: "center",
            marginTop: 4,
            maxWidth: "1280px",
            paddingX: "32px",
            width: "100%",
            paddingX: {
              xs: "16px",
              sm: "16px",
              md: "32px",
            },
          }}
        >
          <HomeHeroSection />
        </Container>
        <Box sx={{ background: (theme) => theme.palette.background.paper }}>
          <PageContainer
            sx={{
              paddingBottom: { md: 0 },
            }}
          >
            <HomeAbout />
          </PageContainer>
        </Box>
        <Box sx={{ background: (theme) => theme.palette.background.paper }}>
          <PageContainer
            sx={{
              paddingBottom: { md: "0px" ,lg:"0px",xl:'0px'},
            }}
          >
            <HomeFinancial />
          </PageContainer>
        </Box>
        <Box sx={{ background: (theme) => theme.palette.background.paper }}>
          <PageContainer
             sx={{
              paddingBottom: { md: "0px" ,lg:"0px",xl:'0px'},
            }}
          >
            <HomeHowItWorks />
          </PageContainer>
        </Box>
        <Box sx={{ background: (theme) => theme.palette.background.paper }}>
          <PageContainer
            sx={{
              paddingBottom: { md: "0px" ,lg:"0px",xl:'0px'},
            }}
          >
            <HomeShariahCompliant />
          </PageContainer>
        </Box>
        <Box sx={{ background: (theme) => theme.palette.background.paper }}>
          <PageContainer
            sx={{
              paddingBottom: { md: "0px" ,lg:"0px",xl:'0px'},
            }}
          >
            <HomeTestimonials />
          </PageContainer>
        </Box>
        <Box sx={{ background: (theme) => theme.palette.background.paper }}>
          <PageContainer>
            <HomeClientLogo />
          </PageContainer>
        </Box>
        <Box sx={{ background: (theme) => theme.palette.background.paper }}>
          <PageContainer
            sx={{
              paddingBottom: { md: "0px" ,lg:"0px",xl:'0px'},
            }}
          >
            <HomeBlog />
          </PageContainer>
        </Box>
        <Box sx={{ background: (theme) => theme.palette.background.paper }}>
          <PageContainer
            sx={{
              paddingBottom: { md: "0px" },
            }}
          >
            <HomeFuelYourGrowth />
          </PageContainer>
        </Box>
      </Box>
    </>
  );
}

export default Home;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}
