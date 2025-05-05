import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import images from "@/utils/images";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MainHeadingButton2 } from "@/styles/Button/customButton";
import englishContent from "../../public/i18n/locales/en/home.json";
import arabicContent from "../../public/i18n/locales/ar/home.json";
import { useTranslation } from "react-i18next";
import MainHeading, { HighlightedText } from "@/components/MainHeading";
import SectionHeading from "@/components/SectionHeading";
import CustomButton from "@/components/CustomButton";
import ContainerVariants from "@/utils/FramerMotion";
import { motion } from "framer-motion";
// Styled components
const HeroContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  background: theme.palette.background.gradient,
}));
const MotionHeroContainer = motion(HeroContainer);
const HeroBody = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.subHeading,
  maxWidth: "640px",
  margin: "10px",
  fontSize: theme.typography.fontSize[18],
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: "150%",
  letterSpacing: "0%",
  [theme.breakpoints.up("md")]: {
    maxWidth: "640px",
    height: "81px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize[16],
  },
}));

const HeroButton = styled(Button)(({ theme }) => ({
  background: theme.palette.background.buttonGradient,
  color: theme.palette.primary.contrastText,
  fontSize: theme.typography.fontSize[18],
  borderRadius: "30px",
  width: "179px",
  height: "54px",
  padding: "20px 28px",
  gap: "10px",
  textTransform: "capitalize",
  lineHeight: "120%",
  letterSpacing: "-2%",
  fontWeight: theme.typography.fontWeights.regular,
  "&:hover": {
    background: theme.palette.background.buttonGradient,
  },
}));

const FullWidthBanner = styled("img")({
  width: "100%",
  height: "auto",
  display: "block",
  margin: 0,
  padding: 0,
});


export default function HomeHeroSection() {
  const { t, i18n } = useTranslation("home");

  const textContent = i18n.language == "en" ? englishContent : arabicContent;
  const { title, heading, subheading, body, button, button2 } = t(
    "herosection",
    {
      returnObjects: true,
    }
  );

  return (
    <MotionHeroContainer
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 2 }}>
      <Grid2
        container
        display={"flex"}
        
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Grid2
          size={{ xs: 12, sm: 12, md: 12 }}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <SectionHeading title="Turning Achievements Into Returns" />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 12, md: 12 }}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          mt={1}>
          <MainHeading>
          {heading + " "}
            <HighlightedText>
            {subheading}
            </HighlightedText>
          </MainHeading>
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 12, md: 12 }}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          mt={2}
        >
          <HeroBody variant="body1">{body}</HeroBody>
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 12, md: 12 }}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          sx={{ display: { xs: 'content', sm: 'flex' , md:'flex'} }}
        >
          <CustomButton title={button} />
          <MainHeadingButton2 sx={{width:{xs:"100%",sm:"auto",md:"auto"},margin:{ xs: '10px 0px', sm: '0px 10px' , md:'0px 10px'}}}>
            {button2}
          </MainHeadingButton2>
        </Grid2>
        {/* <Grid2
          size={{ xs: 12, sm: 12, md: 6 }}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          mt={2}
        >
              <MainHeadingButton2 >
            {button2}
          </MainHeadingButton2>
        </Grid2> */}
      </Grid2>

      {/* <Grid2
        container
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Grid2
          container
          sx={{
            display: "flex",
            gap: "32px",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" }, // Column for mobile, Row for larger screens
          }}
        >
          <HeroButton
            variant="contained"
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            {button}
          </HeroButton>
          <MainHeadingButton2 sx={{ width: { xs: "100%", sm: "auto" } }}>
            {button2}
          </MainHeadingButton2>
        </Grid2>
      </Grid2> */}

      <Grid2 container>
        <Box sx={{ width: "100vw", overflow: "hidden", padding: 0, margin: 0 }}>
          <FullWidthBanner alt="Flow diagram"   src={images.heroBannar}/>
        </Box>
      </Grid2>
    </MotionHeroContainer>
  );
}

export async function getServerSideProps({ locale, req }) {
  if (req.url === "/home") {
    return { props: {} }; // Prevent infinite redirects
  }

  return {
    redirect: {
      destination: "/home",
      permanent: false,
    },
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
