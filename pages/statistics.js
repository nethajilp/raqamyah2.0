import { Box, Container } from "@mui/material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import React, { useRef, useState, useEffect } from "react";
const SEO = React.lazy(() => import("./seo"));
const StatisticsMenu = React.lazy(() => import("./statistics/StatisticsMenu"));
const StatisticsBanner = React.lazy(() => import("./statistics/StatisticsBanner"));
const StatisticsFeatures = React.lazy(() => import("./statistics/StatisticsFeatures"));
const StatisticsGrowth = React.lazy(() => import("./statistics/StatisticsGrowth"));
const StatisticsReturns = React.lazy(() => import("./statistics/StatisticsReturns"));
const StatisticsBusinessProfile = React.lazy(() => import("./statistics/StatisticsBusinessProfile"));
const StatisticsRiskProfile = React.lazy(() => import("./statistics/StatisticsRiskProfile"));

function LegalCompliancePage() {
  const { t, i18n } = useTranslation();
  const growthRef = useRef(null);
  const returnsRef = useRef(null);
  const businessRef = useRef(null);
  const riskRef = useRef(null);
  const [activeSection, setActiveSection] = useState("growth");

  const scrollToSection = (ref, sectionName) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      setActiveSection(sectionName);
    }, 400); // 400ms to 500ms is enough for smooth experience
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 110; // +110px because of sticky navbar height

      const sections = [
        { id: "growth", ref: growthRef },
        { id: "returns", ref: returnsRef },
        { id: "business", ref: businessRef },
        { id: "risk", ref: riskRef },
      ];

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const element = section.ref.current;
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <SEO
        title="Statistics | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia"
        description="We combine the best of technology and financial analysis to select the right SMEs. Only creditworthy applications are selected and proposed to financers."
        ogTitle="We select quality SMEs for you."
        ogDescription="We combine the best of technology and financial analysis to select the right SMEs. Only creditworthy applications are selected and proposed to financers."
        ogImage="https://your-cdn.com/assets/images/statistics-banner.webp"
        keywords="Alternative financing, SME financing, Financial services technology, Loan management system, Crowd-sourced funding"
      />

      <Box>
        <Box sx={{ background: (theme) => theme.palette.background.gradient }}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              textAlign: "center",
              marginTop: 0,
              maxWidth: "1280px",
              width: "100%",
              paddingX: { xs: "16px", sm: "16px", md: "32px" },
            }}
          >
            <StatisticsBanner />
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
              paddingX: { xs: "16px", sm: "16px", md: "32px" },
            }}
          >
            <StatisticsFeatures />
          </Container>
        </Box>

        {/* Combined Sticky Menu + Content Layout */}
        <Box sx={{ background: (theme) => theme.palette.background.paper }}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              maxWidth: "1280px",
              width: "100%",
              paddingTop: "5%",
              paddingX: { xs: "16px", sm: "16px", md: "32px" },
              display: "flex",
              alignItems: "flex-start",
              gap: "2rem",
            }}
          >
            {/* Main Content Column */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "5rem",
              }}
            >
              <Box ref={growthRef} sx={{ scrollMarginTop: "100px" }}>
                <StatisticsGrowth />
              </Box>

              <Box ref={returnsRef} sx={{ scrollMarginTop: "100px" }}>
                <StatisticsReturns />
              </Box>

              <Box ref={businessRef} sx={{ scrollMarginTop: "100px" }}>
                <StatisticsBusinessProfile />
              </Box>

              <Box ref={riskRef} sx={{ scrollMarginTop: "100px" }}>
                <StatisticsRiskProfile />
              </Box>
            </Box>

            {/* Sticky Menu Column */}
            <Box
              sx={{
                flex: "0 0 384px",
                position: "sticky",
                top: "100px",
                alignSelf: "flex-start",
                display: { xs: "none", sm: "block" },
              }}
            >
              <StatisticsMenu
                activeSection={activeSection}
                onScrollTo={{
                  growth: () => scrollToSection(growthRef, "growth"),
                  returns: () => scrollToSection(returnsRef, "returns"),
                  business: () => scrollToSection(businessRef, "business"),
                  risk: () => scrollToSection(riskRef, "risk"),
                }}
              />
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default LegalCompliancePage;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
