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
} from "@mui/material";
import { useTranslation } from "react-i18next";
import images from "@/utils/images";

const Container = styled(Box)(({ theme }) => ({
  maxWidth: "1280px",
  margin: "0 auto",
  padding: theme.spacing(6, 2),
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

const SubHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[18],
  fontWeight: theme.typography.fontWeights.semiBold,
  color: "#32302F",
  marginBottom: theme.spacing(2),
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

const SubTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "32px",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[18],
  color: theme.palette.text.subHeading,
  lineHeight: theme.typography.lineHeights[24],
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export default function BlogTrade() {
  const { t } = useTranslation("blogDetail");

  return (
    <Container>
      <Grid container spacing={4}>
        {/* LEFT MAIN CONTENT */}
        <Grid item xs={12} md={8}>
          <SectionHeading>{t("trade.heading")}</SectionHeading>
          <SubHeading>{t("trade.subheading")}</SubHeading>

          <List disablePadding>
            {t("trade.checklist", { returnObjects: true }).map(
              (item, index) => (
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
                      fontSize: { xs: 16, sm: 18 },
                    }}
                    primary={item}
                  />
                </StyledListItem>
              )
            )}
          </List>

          <StyledImage src={images.DetailsTrade} alt={t("trade.imageAlt")} />

          <SubTitle>{t("trade.subTitle")}</SubTitle>
          <Paragraph>{t("trade.description")}</Paragraph>
        </Grid>

        {/* RIGHT SIDE EMPTY for spacing consistency */}
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </Container>
  );
}
