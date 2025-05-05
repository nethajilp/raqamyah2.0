import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  InputBase,
  MenuItem,
  Select,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaCloudDownloadAlt,
  FaAngleDown,
  FaInstagram,
  FaTimes as FaX,
  FaFacebook,
} from "react-icons/fa";
import Footer from "./Footer";
import FlexBox from "./Box/Box";
import getConfig from "next/config";
import FlexCenterBox from "./Box/CenterBox";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/context/DirectionContext";
// import englishContent from "../../public/i18n/locales/en/footer.json"
// import arabicContent from "../../public/i18n/locales/ar/footer.json"
import englishContent from "../public/i18n/locales/en/footer.json";
import arabicContent from "../public/i18n/locales/ar/footer.json";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 30,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: theme.typography.fontSize[18],
    padding: "10px 20px",
    fontWeight: theme.typography.fontWeights.regular,
    height: "35px", // Correct property to set height
    width: "350px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 0.2rem ${theme.palette.primary.light}`,
    },
  },
  [theme.breakpoints.down("md")]: {
    "& .MuiInputBase-input": {
      width: "100%",
    }, // Adjusted padding for smaller screens
  },
}));

const MyThemeBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius, // Default border radius
  boxShadow: theme.shadows[4], // Default shadow
  background: theme.palette.background.footerGradient, // Default background color
  padding: "10px 20px 0px 20px",
  [theme.breakpoints.up("sm")]: {
    padding: "120px 112px 0px 112px", // Larger padding for small and larger screens
  },
  [theme.breakpoints.up("md")]: {
    boxShadow: theme.shadows[3],
    padding: "120px 112px 0px 112px", // Enhanced shadow for medium and larger screens
  },
  [theme.breakpoints.up("lg")]: {
    padding: "120px 112px 0px 112px", // Custom border radius for large screens
  },
}));

const ImagePic = styled("img")(({ theme }) => ({
  background: "white",
  borderRadius: "8px",
  width: "124px",
  height: "46px",
}));

const ContainerBox = styled(Container)(({ theme }) => ({
  paddingTop: "24px",
  paddingBottom: "24px",
  paddingRight: "0px !important",
  paddingLeft: "0px !important",
  [theme.breakpoints.down("sm")]: {
    padding: "10px", // Custom border radius for large screens
  },
}));

const TypographyDec = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[14],
  textAlign: "left",
  lineHeight: theme.typography.lineHeights[24],
  color: theme.palette.primary.contrastText,
  fontWeight: theme.typography.fontWeights.regular,
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize[14],
  },
}));
const LinkTag = styled("a")(({ theme }) => ({
  fontSize: theme.typography.fontSize[14],
  textAlign: "left",
  lineHeight: theme.typography.lineHeights[32],
  color: theme.palette.primary.contrastText,
  fontWeight: theme.typography.fontWeights.regular,
  textDecoration: "none",
}));
const LinkTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[16],
  textAlign: "left",
  lineHeight: theme.typography.lineHeights[32],
  color: theme.palette.primary.contrastText,
  fontWeight: theme.typography.fontWeights.medium,
  textDecoration: "none",
}));
const DividerLine = styled(Divider)(({ theme }) => ({
  padding: "0px",
  border: "1px solid #E6E5E533", // Custom border thickness and color
  transform: "rotate(0deg)",
}));
const StyledSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  border: "1px solid white",
  textTransform: "none",
  borderRadius: "20px",
  padding: "8px 16px",
  "& .MuiSelect-icon": {
    color: theme.palette.primary.contrastText,
  },

  [theme.breakpoints.down("md")]: {
    padding: "10px 12px",
    // Adjusted padding for smaller screens
  },
}));
const SubscribeButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: theme.typography.fontSize[18],
  fontWeight: theme.typography.fontWeights.semiBold,
  lineHeight: theme.typography.lineHeights[28],
  width: "143px", // Custom width
  height: "56px",
  borderRadius: 50, // Custom height
  boxShadow: "none",
  backgroundColor: theme.palette.primary.main, // Theme's primary color
  "&:hover": {
    boxShadow: "none",
    backgroundColor: theme.palette.primary.light,
  },
  [theme.breakpoints.down("md")]: {
    width: "100%", // Custom width // Custom border radius for large screens
  },
}));
const IconButton = styled(Button)(({ theme }) => ({
  padding: "10px",

  Width: "40px",
  borderRadius: "100px",
  border: "1px solid white",
  color: "white",
  "&:hover": {
    border: "1px solid white",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  [theme.breakpoints.down("md")]: {
    padding: "10px",
    minWidth: "0px",
    Width: "40px",
    borderRadius: "100px",
    border: "1px solid white",
    color: "white",
    "&:hover": {
      border: "1px solid white",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  },
}));
const SocialIconButton = styled(Button)(({ theme }) => ({
  padding: "10px",
  minWidth: "0px",
  borderRadius: "100pz",
  border: "1px solid white",
  color: theme.palette.primary.dark,
  backgroundColor: theme.palette.primary.socialIconbackground,
  gap: "5px !important",
  "&:hover": {
    border: "1px solid white",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
}));
export default function FooterTop() {
  const currentYear = new Date().getFullYear();
  const { i18n } = useTranslation();
  const { toggleDirection } = useDirection();
  const { publicRuntimeConfig } = getConfig();
  const footerLogo = "assets/images/footerLogo.webp";
  const appleLogo = "assets/images/apple.webp";
  const googleLogo = "assets/images/google.webp";
  const Q12024 =
    process.env.NEXT_PUBLIC_IMAGEURL + "assets/images/pdf/FS_Q1_2024.pdf";
  const Q22024 =
    process.env.NEXT_PUBLIC_IMAGEURL + "assets/images/pdf/FS_Q2_2024.pdf";
  const Q32024 =
    process.env.NEXT_PUBLIC_IMAGEURL + "assets/images/pdf/FS_Q3_2024.pdf";

  const [selectedStatement, setSelectedStatement] = useState(
    "Financial statement of 2024 Q1"
  );

  const handleChange = (event) => {
    setSelectedStatement(event.target.value);
  };

  const FileDownload = () => {
    let fileUrl = "";
    switch (selectedStatement) {
      case "Financial statement of 2024 Q1":
        fileUrl = Q12024;
        break;
      case "Financial statement of 2024 Q2":
        fileUrl = Q22024;
        break;
      case "Financial statement of 2024 Q3":
        fileUrl = Q32024;
        break;
      default:
        return;
    }
    window.open(fileUrl, "_blank");
  };

  const textContent = i18n.language == "en" ? englishContent : arabicContent;

  return (
    <MyThemeBox
      component="footer"
      sx={{
        gap: 6,
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "15px",
      }}
    >
      <ContainerBox maxWidth="xl" sx={{ paddingBottom: "0px" }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <FlexBox>
              <Image
                src={footerLogo}
                width={124}
                height={51}
                rel="footer logo"
              />
            </FlexBox>
            <FlexBox
              sx={{
                width: "299px",
                marginTop: "10px",
                Heigh: "48px",
              }}
            >
              <TypographyDec>{textContent.description}</TypographyDec>
            </FlexBox>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <FlexBox
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 12, md: 7 }}>
                  <FormControl variant="standard" fullWidth>
                    <BootstrapInput
                      placeholder={textContent.placeholder}
                      id="bootstrap-input"

                      // onClick={handleClick}
                    />
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 5 }}>
                  <SubscribeButton variant="contained" size="large">
                    {textContent.subscribe}
                  </SubscribeButton>
                </Grid>
              </Grid>
            </FlexBox>
          </Grid>
        </Grid>
        <ContainerBox maxWidth="xl">
          <DividerLine />
        </ContainerBox>
        <ContainerBox maxWidth="xl">
          <Grid container spacing={{ xs: 4, sm: 4, md: 6 }}>
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              order={{ xs: 4, md: 4, lg: 1 }}
            >
              <LinkTitle variant="h6" gutterBottom>
                {textContent.getAppNow}
              </LinkTitle>
              <FlexBox>
                <a
                  href="https://apps.apple.com/sa/app/raqamyah-%D8%B1%D9%82%D9%85%D9%8A%D8%A9/id6443498463"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImagePic src={appleLogo} alt="App Store" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.raqamyah"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImagePic src={googleLogo} alt="Play Store" />
                </a>
              </FlexBox>

              <FlexBox sx={{ marginTop: "15px" }}>
                <SocialIconButton sx={{ gap: 2 }}>
                  <FaInstagram
                    style={{ fontSize: "20px", cursor: "pointer" }}
                  />
                </SocialIconButton>
                <SocialIconButton sx={{ gap: 2 }}>
                  <FaX style={{ fontSize: "20px", cursor: "pointer" }} />
                </SocialIconButton>
                <SocialIconButton sx={{ gap: 2 }}>
                  <FaFacebook style={{ fontSize: "20px", cursor: "pointer" }} />
                </SocialIconButton>
              </FlexBox>
            </Grid>

            <Grid
              size={{ xs: 6, sm: 6, md: 4, lg: 3 }}
              order={{ xs: 1, md: 1, lg: 2 }}
            >
              <LinkTitle variant="h6" gutterBottom>
                {textContent.company}
              </LinkTitle>
              <Box gap={12}>
                {textContent.companyLinksList.map((link, index) => (
                  <>
                    <LinkTag
                      href={link.path}
                      key={index}
                      underline="none"
                      color="inherit"
                    >
                      {link.name}
                    </LinkTag>
                    <br />
                  </>
                ))}
              </Box>
            </Grid>

            <Grid
              size={{ xs: 6, sm: 6, md: 4, lg: 3 }}
              order={{ xs: 2, md: 2, lg: 3 }}
            >
              <LinkTitle variant="h6" gutterBottom>
                {textContent.links}
              </LinkTitle>
              <Box>
                {textContent.linksList.map((link, index) => (
                  <>
                    <LinkTag
                      href="#"
                      key={index}
                      underline="none"
                      color="inherit"
                    >
                      {link}
                    </LinkTag>
                    <br />
                  </>
                ))}
              </Box>
            </Grid>

            <Grid
              size={{ xs: 12, sm: 12, md: 4, lg: 3 }}
              order={{ xs: 3, md: 3, lg: 3 }}
            >
              <LinkTitle variant="h6" gutterBottom>
                {textContent.locations}
              </LinkTitle>
              <TypographyDec>{textContent.locationsDetail}</TypographyDec>
            </Grid>
          </Grid>
        </ContainerBox>
        <ContainerBox maxWidth="xl">
          <DividerLine />
        </ContainerBox>
        <ContainerBox maxWidth="xl">
          <Grid container pt={2} pb={4}>
            {/* Left Section */}
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 3 }}
              order={{ xs: 1, md: 1, lg: 1 }}
            >
              <FlexCenterBox>
                <StyledSelect
                  value={selectedStatement}
                  onChange={handleChange}
                  displayEmpty
                  variant="outlined"
                  IconComponent={FaAngleDown}
                  sx={{
                    padding: " 6px 30px",
                    color: "white",
                    border: "1px solid white",

                    borderRadius: "20px",
                  }}
                >
                  {Object.values(textContent.statements).map(
                    (statement, index) => (
                      <MenuItem value={statement} key={index}>
                        {statement}
                      </MenuItem>
                    )
                  )}
                </StyledSelect>
                <IconButton onClick={FileDownload} variant="outlined">
                  <FaCloudDownloadAlt size={18} />
                </IconButton>
              </FlexCenterBox>
            </Grid>

            {/* Center Section */}
            <Grid
              size={{ xs: 12, sm: 12, md: 12, lg: 6 }}
              order={{ xs: 3, md: 3, lg: 2 }}
            >
              <FlexCenterBox sx={{ justifyContent: { md: "center" } }}>
                <TypographyDec>
                  {textContent.Copyright.part1}
                  {currentYear}.&nbsp; {textContent.Copyright.part2}&nbsp;
                  {"V-" + publicRuntimeConfig?.version}
                </TypographyDec>
              </FlexCenterBox>
            </Grid>

            {/* Right Section */}
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 3 }}
              order={{ xs: 2, md: 2, lg: 3 }}
            >
              <ContainerBox maxWidth="xl" sx={{ display: { md: "none" } }}>
                <DividerLine />
              </ContainerBox>
              <FlexCenterBox sx={{ justifyContent: { md: "end" } }}>
                <Select
                  value={i18n.language}
                  onChange={toggleDirection}
                  IconComponent={FaAngleDown}
                  sx={{
                    padding: " 6px 30px",
                    color: "white",
                    border: "1px solid white",

                    borderRadius: "20px",
                    minWidth: "100px",
                  }}
                >
                  <MenuItem value="en">
                    {textContent.languageSelector.english}
                  </MenuItem>
                  <MenuItem value="ar">
                    {textContent.languageSelector.arabic}
                  </MenuItem>
                </Select>
              </FlexCenterBox>
            </Grid>
          </Grid>
        </ContainerBox>
      </ContainerBox>
    </MyThemeBox>
  );
}
