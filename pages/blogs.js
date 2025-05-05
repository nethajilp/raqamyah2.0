import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
const SEO = React.lazy(() => import("./seo"));
const BannerBlog = React.lazy(() => import("./blogs/bannerBlog"));
const BlogGrid = React.lazy(() => import("./blogs/BlogGrid"));
const HeaderDecorations = React.lazy(() => import("@/components/HeaderDecorations"));

function BlogPage() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <SEO
        title="Blog | رقمية - Insights on Crowdfunding & Investments"
        description="Stay updated with the latest trends in crowdfunding, investments, and business financing through the رقمية blog."
        ogTitle="رقمية Blog - Investment & Crowdfunding Insights"
        ogDescription="Explore expert insights on crowdfunding, investment strategies, and business financing in Saudi Arabia."
        ogImage="https://your-cdn.com/assets/images/blog-banner.webp"
        keywords="Crowdfunding Blog, Investment News, SME Financing, رقمية Blog"
      />

      <Box sx={{ position: "relative" }}>
        <HeaderDecorations />

        <Box sx={{ background: (theme) => theme.palette.background.gradient }}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              textAlign: {
                xs: "center", // Apply center alignment for mobile
                sm: "center", // Apply center alignment for tablet
                md: "left", // Align left for larger screens (desktop/laptop)
              },
              marginTop: 0,
              maxWidth: "1280px", // Fixed width for larger screens
              width: "100%", // Ensure full width on smaller screens
              paddingX: {
                xs: "16px", // Adjust padding for mobile
                sm: "16px", // Adjust padding for tablets
                md: "32px", // Padding for larger screens
              },
            }}
          >
            <BannerBlog />
          </Container>
        </Box>

        <Box sx={{ background: (theme) => theme.palette.background.paper }}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              maxWidth: "1280px", // Fixed width for larger screens
              width: "100%", // Ensure full width on smaller screens
              paddingTop: "5%", // Top padding to space content
              paddingX: {
                xs: "16px", // Adjust padding for mobile
                sm: "16px", // Adjust padding for tablets
                md: "32px", // Padding for larger screens
              },
            }}
          >
            <BlogGrid />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default BlogPage;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // Load translations
    },
  };
}
