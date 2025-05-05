import React from "react";
import { MainHeadingButton } from "@/styles/Button/customButton";
import { PolygonIcon } from "@/styles/Image/customImage";
import images from "@/utils/images";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid2,
  styled,
  Typography,
} from "@mui/material";
import { FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import englishContent from "../../public/i18n/locales/en/home.json";
import arabicContent from "../../public/i18n/locales/ar/home.json";
import SectionHeading from "@/components/SectionHeading";
import SetionMainHeading from "@/components/SetionMainHeading";
import { padding } from "@mui/system";

const SectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2.5),
  marginBottom: theme.spacing(4),
  background: (theme) => theme.palette.background.paper,
}));


const FinanceCard = styled(Card)(({ theme }) => ({
  height: "622px", // Default height (for mobile)
  borderRadius: "2rem",
  padding: "2rem",
  boxShadow: theme.shadows[3],
  "&:hover": {
    boxShadow: theme.shadows[6],
  },
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    width: "100%",
    height: "622px",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    width: "343px",
    height: "auto",
  },
  [theme.breakpoints.down("xs")]: {
    width: "200px",
    height: "auto",
  },
}));

const FinanceCardContent = styled(CardContent)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
}));

const ForText = styled("span")(({ theme }) => ({
  textTransform: "uppercase",
  letterSpacing: "1px",
  fontSize: "14px", // default (desktop & tablet)
  color: theme.palette.text.forText,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(0, 1.5),
  borderRadius: theme.spacing(1.25),
  display: "inline-block",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px", // Mobile override
  },
}));

const FinancialCardHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.paper,
  fontSize: theme.typography.fontSize[40],
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize[28],
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[20],
  },
  fontWeight: theme.typography.fontWeights.semiBold,
  textAlign: "center",
  marginBottom: theme.spacing(1),
}));

const FinancialCardDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.paper,
  fontSize: theme.typography.fontSize[16],
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[24],
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[14], 
    width: "311px", 
  },
}));

const MoreButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.text.paper,
  color: theme.palette.text.paper,
  textTransform: "capitalize",
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.fontWeights.semiBold,
  padding: "10px 24px",
  gap: theme.spacing(0.5),
  "&:hover": {
    backgroundColor: "transparent",
    borderColor: theme.palette.text.paper,
  },
}));

const MediaVideo = styled("video")(({ theme }) => ({
  width: "268.06px", 
  height: "171.78px",
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.up("md")]: {
    width: "100%", 
    height: "auto",
    padding:'20px',
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "80%", 
    height: "auto", 
  },
}));


export default function HomeFinancial() {
  const { t, i18n } = useTranslation("home");
  const textContent = i18n.language === "en" ? englishContent : arabicContent;
  const { heading, subheading, investor, borrower } = t("financial", {
    returnObjects: true,
  });

  return (
    <SectionContainer>
      <Grid2 container display={"flex"}>
        <Grid2
          size={{ xs: 12, sm: 12, md: 12 }}
          display={"flex"}
          flexDirection={"column"}
        >
          <SectionHeading title={heading} />
        </Grid2>
      </Grid2>
      <Grid2 container display={"flex"}>
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
          <SetionMainHeading>{subheading}</SetionMainHeading>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={2} alignItems="stretch">
        <Grid2
          size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
          display={"flex"}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <FinanceCard
            sx={{ background: (theme) => theme.palette.background.borrower }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ForText>{borrower.type}</ForText>
            </Box>
            <FinanceCardContent>
              <CardActionArea
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FinancialCardHeading variant="h1">
                  {borrower.title}
                </FinancialCardHeading>
                <FinancialCardDescription>
                  {borrower.description}
                </FinancialCardDescription>
              </CardActionArea>
              <MoreButton variant="outlined" sx={{ mt: 2 }}>
                {borrower.button} <FaChevronRight fontSize="small" />
              </MoreButton>
              <MediaVideo
                src={images.borrower}
                autoPlay
                loop
                muted
                playsInline
              />
            </FinanceCardContent>
          </FinanceCard>
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
          display={"flex"}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <FinanceCard
            sx={{ background: (theme) => theme.palette.background.investor }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ForText>{investor.type}</ForText>
            </Box>
            <FinanceCardContent>
              <CardActionArea
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FinancialCardHeading variant="h1">
                  {investor.title}
                </FinancialCardHeading>
                <FinancialCardDescription>
                  {investor.description}
                </FinancialCardDescription>
              </CardActionArea>
              <MoreButton variant="outlined" sx={{ mt: 2 }}>
                {investor.button} <FaChevronRight fontSize="small" />
              </MoreButton>
              <MediaVideo
                src={images.investor}
                autoPlay
                loop
                muted
                playsInline
              />
            </FinanceCardContent>
          </FinanceCard>
        </Grid2>
      </Grid2>
    </SectionContainer>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}
