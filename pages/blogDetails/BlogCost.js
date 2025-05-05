import React from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Divider,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import images from "@/utils/images";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Container = styled(Box)(({ theme }) => ({
  maxWidth: "1280px",
  margin: "0 auto",
  padding: theme.spacing(6, 2),
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeights.semiBold,
  fontSize: theme.typography.fontSize[32],
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[18],
  fontWeight: theme.typography.fontWeights.semiBold,
  color: "#32302F",
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  borderRadius: "12px",
  margin: theme.spacing(4, 0),
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[18],
  color: theme.palette.text.subHeading,
  lineHeight: theme.typography.lineHeights[24],
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[16],
  },
}));

const QuoteBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  paddingLeft: "48px", // More padding to fit quote nicely
  margin: theme.spacing(4, 0),
}));

const VerticalLine = styled(Box)(() => ({
  position: "absolute",
  left: 0,
  top: "-20px", // small outside top
  bottom: "-20px", // small outside bottom
  width: "2px",
  backgroundColor: "#2AA3D0",
}));

const QuoteIcon = styled("img")(() => ({
  position: "absolute",
  left: "-20px",
  top: "50%",
  transform: "translateY(-50%)",
  width: "42px",
  height: "42px",
  background: "#fff", // optional if white bg needed
}));

const QuoteText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[24],
  fontWeight: theme.typography.fontWeights.medium,
  color: "#32302F",
  lineHeight: theme.typography.lineHeights[28],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[20],
  },
}));

const SharePost = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: theme.typography.fontWeights.semiBold,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[18],
  },
}));

const SocialIconsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

const SocialIcon = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  width: 48,
  height: 48,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "& svg": {
    color: "#000000",
    fontSize: "16px",
  },
  "&:hover": {
    backgroundColor: "#293E6C",
    "& svg": {
      color: "#FFFFFF",
    },
  },
}));

export default function BlogCost() {
  const { t } = useTranslation("blogDetail");

  return (
    <Container>
      <Grid container spacing={4}>
        {/* LEFT MAIN CONTENT */}
        <Grid item xs={12} md={8}>
          <SectionHeading>{t("cost.heading")}</SectionHeading>
          <SubHeading>{t("cost.subheading")}</SubHeading>

          <List disablePadding>
            {t("cost.checklist", { returnObjects: true }).map((item, index) => (
              <StyledListItem key={index}>
                <ListItemIcon
                  sx={{
                    minWidth: 32,
                    alignSelf: "flex-start",
                    marginTop: "8px",
                  }}
                >
                  <Box
                    component="img"
                    src={images.TickGreen}
                    alt="Tick"
                    sx={{
                      width: "20px",
                      height: "20px",
                      objectFit: "contain",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    sx: {
                      fontSize: { xs: 16, sm: 18 },
                    },
                  }}
                  primary={item}
                />
              </StyledListItem>
            ))}
          </List>

          <StyledImage src={images.DetailsCost} alt={t("cost.imageAlt")} />

          <Paragraph>{t("cost.para1")}</Paragraph>
          <Paragraph>{t("cost.para2")}</Paragraph>

          <QuoteBox>
            <VerticalLine />
            <QuoteIcon src={images.DoubleQuoteBlue} alt="Quote" />
            <QuoteText>{t("cost.quote")}</QuoteText>
          </QuoteBox>

          <Paragraph>{t("cost.para3")}</Paragraph>
          <Divider sx={{ my: 4, borderColor: "#E0E0E0" }} />
          <Box
            mt={4}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <SharePost>{t("cost.sharePost")}</SharePost>

            <SocialIconsWrapper>
              <a
                href="https://www.facebook.com/raqamyahksa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon>
                  <FaFacebookF size={24} />
                </SocialIcon>
              </a>
              <a
                href="https://www.linkedin.com/company/raqamyah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon>
                  <FaLinkedinIn size={24} />
                </SocialIcon>
              </a>
              <a
                href="https://www.instagram.com/raqamyahksa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon>
                  <FaInstagram size={24} />
                </SocialIcon>
              </a>
            </SocialIconsWrapper>
          </Box>
        </Grid>

        {/* RIGHT SIDE EMPTY */}
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </Container>
  );
}
