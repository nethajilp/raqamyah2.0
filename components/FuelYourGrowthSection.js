"use client";

import images from "@/utils/images";
import {
  Box,
  Button,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import Image from "next/image";
import { motion } from "framer-motion";
const FuelGrowthHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[56],
  lineHeight: 1,
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[32],
    textAlign: "center",
    maxWidth: "100%",
  },
  fontWeight: theme.typography.fontWeights.semiBold,
  color: theme.palette.text.darkBlue,
  textAlign: "left",
  wordWrap: "break-word",
  whiteSpace: "normal",

}));

const FuelGrowthDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.subFuelGrowthHeading,
  fontSize: theme.typography.fontSize[16],
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[24],
  textAlign: "left",
  paddingTop: "30px",
  paddingBottom: "30px",

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[20],
    textAlign: "center",
    maxWidth: "100%",
  },
}));

const FullWidthBanner = styled("img")({
  width: "100%",
  height: "auto",
  display: "block",
  margin: 0,
  padding: 0,
});

const FuelGrowthButton = styled(Button)(({ theme }) => ({
  background: theme.palette.background.fuelGrowthButton,
  color: theme.palette.primary.contrastText,
  borderRadius: "30px",
  width: "179px",
  height: "54px",
  padding: "20px 28px",
  fontWeight: theme.typography.fontWeights.regular,
  "&:hover": {
    background: theme.palette.background.buttonGradient,
  },
  margin: "0 auto 0 0",
  [theme.breakpoints.down("sm")]: {
    margin: "0 auto",
  },
}));
const MotionHeroContainer = motion(Grid2);
export default function FuelYourGrowthSection({ heading, description, button }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <MotionHeroContainer container spacing={2} alignItems="center"  
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 2 }}>
      <Grid2 size={{xs:12, sm:12, md:6}}>
        <FuelGrowthHeading>{heading}</FuelGrowthHeading>
        <FuelGrowthDescription>{description}</FuelGrowthDescription>
        <Box display={'flex'} justifyContent={isMobile?'center':'flex-start'} alignItems={isMobile?'center':'flex-start'}>
        <Image
            src={images.action}
            alt="Fuel Your Growth call-to-action illustration"
            width= {isMobile?224:394} 
            height={isMobile?36:64}
          />
        </Box>

      </Grid2>
      <Grid2 size={{xs:12, sm:12, md:6}}>
       
 
          {/* <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src={images.fuelYourGrowth} type="video/webm" />
            Your browser does not support the video tag.
          </video> */}
         <img src={images.fuelYourGrowth} alt="Flow diagram"  width={'100%'} height={"100% "} />
       
      </Grid2>
    </MotionHeroContainer>
  );
}
