import React from "react";
import dynamic from "next/dynamic";
import { Box, Container } from "@mui/material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const SEO = React.lazy(() => import("./seo"));
const BannerContact = React.lazy(() => import("./contactus/BannerContact"));
const ContactMap = React.lazy(() => import("./contactus/ContactMap"));

function ContactPageIndex() {
  return (
    <>
      <SEO
        title="Contact Us | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in
       Saudi Arabia"
        description="Get in touch with us, we would like to hear from you and help you in any way possible to achieve your business goals"
        ogTitle="How can we help"
        ogDescription="Get in touch with us, we would like to hear from you and help you in any way possible to achieve your business goals"
        ogImage="https://your-cdn.com/assets/images/contactus-banner.webp"
        keywords="Loan processing software, Alternative financing, SME financing, Financial services technology, Loan management system, Crowd-sourced funding"
      />
      <Box sx={{ background: (theme) => theme.palette.background.gradient }}>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ maxWidth: "1280px", paddingX: "32px" }}
        >
          <BannerContact /> {/* Banner Section */}
        </Container>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ maxWidth: "1280px", paddingTop: "5%", paddingX: "32px" }}
        >
          <ContactMap /> {/* Map Section */}
        </Container>
      </Box>
    </>
  );
}

export default ContactPageIndex;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "contactUs"])), // Load translations
    },
  };
}
