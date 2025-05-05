import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import React from "react";
const SEO = React.lazy(() => import("./seo"));
const BorrowerBanner = React.lazy(() => import("./borrowers/BorrowerBanner"));
const BorrowerClientLogo = React.lazy(() => import("./borrowers/BorrowerClientLogo"));
const BorrowerChoose = React.lazy(() => import("./borrowers/BorrowerChoose"));
const BorrowerFaq = React.lazy(() => import("./borrowers/BorrowerFaq"));
const BorrowerFinancingRating = React.lazy(() => import("./borrowers/BorrowerFinancingRating"));
const BorrowerFuelYourGrowth = React.lazy(() => import("./borrowers/BorrowerFuelYourGrowth"));
const BorrowerHowItWorks  = React.lazy(() => import("./borrowers/BorrowerHowItWorks"));
function BorrowersPage() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <SEO
        title="Borrowers | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia"
        description="We help established businesses of all sizes take their next step. So whatever your next goal is, just tell us how we can help when you apply."
        ogTitle="Finance for almost any purpose"
        ogDescription="We help established businesses of all sizes take their next step. So whatever your next goal is, just tell us how we can help when you apply."
        ogImage={`${process.env.NEXT_PUBLIC_IMAGE_CDN}/borrower/borrowersBanner.webp`}
        keywords="Debt crowdfunding ,Crowdlending risks, Crowdlending returns, Crowdlending platforms, P2P investment, Lending marketplace"
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
            <BorrowerBanner />
          </Container>
        </Box>

        <Box sx={{ background: (theme) => theme.palette.background.paper }}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              maxWidth: "1280px",
              paddingTop: "5%",
              paddingX: "32px",
            }}
          >
            <BorrowerClientLogo />
          </Container>
        </Box>

        <Box sx={{ background: (theme) => theme.palette.primary.main }}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              maxWidth: "1280px",
              paddingTop: "5%",
              paddingX: "32px",
            }}
          >
            <BorrowerHowItWorks />
          </Container>
        </Box>

        <Box sx={{ background: (theme) => theme.palette.background.default }}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              maxWidth: "1280px",
              paddingTop: "5%",
              paddingX: "32px",
            }}
          >
            <BorrowerFinancingRating />
          </Container>
        </Box>

        <Box sx={{ background: (theme) => theme.palette.primary.main }}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              maxWidth: "1280px",
              paddingTop: "5%",
              paddingX: "32px",
            }}
          >
            <BorrowerChoose />
          </Container>
        </Box>

        <Box sx={{ background: (theme) => theme.palette.background.paper }}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              maxWidth: "1280px",
              paddingTop: "5%",
              paddingX: "32px",
            }}
          >
            <BorrowerFaq />
          </Container>
        </Box>

        <Box sx={{ background: (theme) => theme.palette.background.paper }}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              maxWidth: "1280px",
              paddingTop: "5%",
              paddingX: "32px",
            }}
          >
            <BorrowerFuelYourGrowth />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default BorrowersPage;
