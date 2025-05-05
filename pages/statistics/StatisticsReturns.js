import { MainHeadingButton } from "@/styles/Button/customButton";
import { PolygonIcon } from "@/styles/Image/customImage";
import { MainHeading } from "@/styles/Typography/customTypography";
import images from "@/utils/images";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  styled,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import ReturnsChart from "./StatisticsReturnsChart";

const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.darkBlue,
  fontSize: theme.typography.fontSize[20],
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize[40],
  },
  fontWeight: theme.typography.fontWeights.semiBold,
  textAlign: "left",
  marginBottom: theme.spacing(1),
}));
const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.subHeading,
  fontSize: theme.typography.fontSize[18],
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[24],
  textAlign: "left",
  maxWidth: "623px", // Restrict to 623px on large screens
  width: "100%", // Responsive width
  height: "auto", // Let height adjust to content
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[14],
    lineHeight: theme.typography.lineHeights[20],
  },
}));

const GraphImage = styled("img")({
  width: "100%",
  height: "100%",
});

export default function StatisticsReturns() {
  const { t } = useTranslation("statistics");
  const data = t("faq.data", { returnObjects: true });
  const [expanded, setExpanded] = useState(null);

  const handleAccordionChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const accordionStyles = {
    base: {
      padding: { xs: "12px 16px", sm: "18px 24px 18px 36px" },
      margin: "10px 0",
      borderRadius: "2px",
      width: "100%",
      background: (theme) => theme.palette.background.aboutCard3,
      border: "1px solid transparent",
    },
    expanded: {
      "&.Mui-expanded": {
        borderWidth: "1px 1px 3px 1px",
        borderColor: (theme) => theme.palette.text.blogCard2,
        padding: { xs: "12px 16px 16px", sm: "20px 24px 28px 36px" },
      },
    },
  };

  return (
    <Box
      sx={{
        background: (theme) => theme.palette.background.gradient,
      }}
    >
      <Grid container>
        <Grid item container spacing={2} direction="column">
          {" "}
          {/* Add direction="column" here */}
          <Heading
            variant="h4"
            sx={{
              maxWidth: { xs: "100%", sm: "60%", lg: "55%" },
            }}
          >
            {t("returns.heading")}
          </Heading>
          <Description>{t("returns.description")}</Description>
          <Box
            display={"flex"}
            gap={"10px"}
            width={"100%"}
            sx={{ marginBottom: "32px" }}
          >
            <Button
              color="primary"
              variant="contained"
              sx={{ borderRadius: "6%" }}
            >
              {t("returns.button1")}
            </Button>
            <Button
              color="white"
              variant="contained"
              sx={{ color: "black", borderRadius: "6%" }}
            >
              {t("returns.button2")}
            </Button>
          </Box>
          <ReturnsChart data={data} currency="SAR" />
        </Grid>
      </Grid>
    </Box>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    redirect: {
      destination: "/statistics",
      permanent: false,
    },
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
