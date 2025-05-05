import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
const SEO = React.lazy(() => import("./seo"));
const BlogDetailsBanner = React.lazy(() => import("./blogDetails/BlogDetailsBanner"));
const BlogGrowth = React.lazy(() => import("./blogDetails/BlogGrowth"));
const BlogTrade = React.lazy(() => import("./blogDetails/BlogTrade"));
const BlogCostSection = React.lazy(() => import("./blogDetails/BlogCost"));
const BlogRelated = React.lazy(() => import("./blogDetails/BlogRelated"));


export default function BlogDetailsPage() {
  const { t } = useTranslation("blogDetail");

  return (
    <>
      <SEO
        title="Blog Details | رقمية"
        description="Read the full blog post and explore more insights about crowdfunding, finance, and investment."
        ogTitle="رقمية Blog - Full Post"
        ogDescription="Explore our detailed blog post on finance, investment strategies, and more."
        ogImage="https://your-cdn.com/assets/images/blog-details-banner.webp"
        keywords="Finance Blog, رقمية, Blog Detail, SME Investment"
      />

      {/* Banner Section */}
      <Box sx={{ background: (theme) => theme.palette.background.gradient }}>
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            maxWidth: "1280px",
            width: "100%",
            paddingX: {
              xs: "16px",
              sm: "16px",
              md: "32px",
            },
          }}
        >
          <BlogDetailsBanner />
        </Container>
      </Box>

      {/* Blog Growth Section */}
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
          <BlogGrowth />
        </Container>
      </Box>

      <Box sx={{ background: (theme) => theme.palette.background.paper }}>
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            maxWidth: "1280px",
            width: "100%",
            paddingTop: "5%",
            paddingX: {
              xs: "16px",
              sm: "16px",
              md: "32px",
            },
          }}
        >
          <BlogTrade />
        </Container>
      </Box>

      <Box sx={{ background: (theme) => theme.palette.background.paper }}>
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            maxWidth: "1280px",
            width: "100%",
            paddingTop: "5%",
            paddingX: {
              xs: "16px",
              sm: "16px",
              md: "32px",
            },
          }}
        >
          <BlogCostSection />
        </Container>
      </Box>

      <Box sx={{ background: (theme) => theme.palette.background.paper }}>
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            maxWidth: "1280px",
            width: "100%",
            paddingTop: "5%",
            paddingX: {
              xs: "16px",
              sm: "16px",
              md: "32px",
            },
            paddingBottom: "5%", // Little bottom padding for last section
          }}
        >
          <BlogRelated />
        </Container>
      </Box>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "blogDetail"])),
    },
  };
}
