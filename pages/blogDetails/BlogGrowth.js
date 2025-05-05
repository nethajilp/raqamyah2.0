import React from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  styled,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import images from "@/utils/images";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Container = styled(Box)(({ theme }) => ({
  maxWidth: "1280px",
  margin: "0 auto",
  padding: theme.spacing(6, 2),
}));

const SidebarBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#F2F4F7",
  padding: theme.spacing(3),
  borderRadius: "12px",
}));

const GrowthImage = styled("img")(({ theme }) => ({
  width: "100%",
  borderRadius: "12px",
  margin: theme.spacing(4, 0),
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeights.semiBold,
  fontSize: theme.typography.fontSize[40],
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[24],
  },
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[18],
  color: theme.palette.text.subHeading,
  marginBottom: theme.spacing(2),
  lineHeight: theme.typography.lineHeights[24],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[16],
  },
}));

export default function BlogGrowth() {
  const { t } = useTranslation("blogDetail");

  return (
    <Container>
      <Grid container spacing={4}>
        {/* LEFT MAIN CONTENT */}
        <Grid item xs={12} md={8}>
          <SectionHeading>{t("growth.heading")}</SectionHeading>
          <Paragraph>{t("growth.paragraph1")}</Paragraph>
          <Paragraph>{t("growth.paragraph2")}</Paragraph>

          <GrowthImage src={images.DetailsGrowth} alt={t("growth.imageAlt")} />

          <Paragraph>{t("growth.paragraph3")}</Paragraph>
          <Paragraph>{t("growth.paragraph4")}</Paragraph>
        </Grid>

        {/* RIGHT SIDEBAR (hidden on mobile) */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <SidebarBox>
            {/* Table of Contents Title */}
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "18px",
                color: "#012A4A",
                marginBottom: "12px",
              }}
            >
              {t("growth.tableHeading")}
            </Typography>

            {/* List Items */}
            <List disablePadding>
              {t("growth.tableList", { returnObjects: true }).map(
                (item, index) => (
                  <ListItem
                    key={index}
                    disableGutters
                    sx={{
                      paddingY: "4px",
                      paddingLeft: "0px",
                    }}
                  >
                    <ListItemText
                      primaryTypographyProps={{ fontSize: 16 }}
                      primary={`${index + 1}. ${item}`}
                    />
                  </ListItem>
                )
              )}
            </List>

            {/* Divider */}
            <Box
              sx={{
                height: "1px",
                backgroundColor: "#DFE7EB",
                my: 3,
              }}
            />

            {/* Share Post */}
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "16px",
                color: "#012A4A",
                marginBottom: "8px",
              }}
            >
              {t("growth.share")}
            </Typography>

            <Box display="flex" gap={2}>
              {[
                {
                  icon: FaFacebookF,
                  href: "https://www.facebook.com/raqamyahksa/",
                },
                {
                  icon: FaLinkedinIn,
                  href: "https://www.linkedin.com/company/raqamyah/",
                },
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/raqamyahksa/",
                },
              ].map(({ icon: Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#FFFFFF",
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      color: "#000000",
                      "&:hover": {
                        backgroundColor: "#293E6C",
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    <Icon size={16} />
                  </Box>
                </a>
              ))}
            </Box>
          </SidebarBox>
        </Grid>
      </Grid>
    </Container>
  );
}
