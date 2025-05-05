import { MainHeadingButton, SectionButton } from "@/styles/Button/customButton";
import { PolygonIcon } from "@/styles/Image/customImage";
import {
  MainHeading,
  MainHeadingDescription,
} from "@/styles/Typography/customTypography";
import images from "@/utils/images";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronRight } from "react-icons/fa";

const TestimonialCardContent = styled(Card)(({ theme, cardType }) => ({
  width: "100%",
  height: "100%",
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[1],
  border: "1px solid  #EAECF5",
  borderRadius: "8px",
  "&:hover": {
    boxShadow: theme.shadows[6],
  },
}));

const TestimonialCardStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(2.5),
}));

const TestimonialCard = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2.5),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const UserContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  marginTop: theme.spacing(1),
}));

const LogoImageWrapper = styled("div")(() => ({
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  backgroundColor: "#F3F4F6",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const LogoImage = styled("img")(() => ({
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  objectFit: "cover",
}));

const TechName = styled(Typography)(({ theme }) => ({
  width: "100%",
  height: "auto",
  color: theme.palette.primary.main,
  textAlign: "left",
  fontSize: theme.typography.fontSize[24],
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize[18],
  },
  fontWeight: theme.typography.fontWeights.bold,
  lineHeight: theme.typography.lineHeights[24],
  [theme.breakpoints.down("md")]: {
    lineHeight: theme.typography.lineHeights[27],
  },
}));

const UserRole = styled(Typography)(({ theme }) => ({
  width: "100%",
  height: "auto",
  color: theme.palette.text.subHeading,
  textAlign: "left",
  fontSize: theme.typography.fontSize[14],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[18],
    lineHeight: theme.typography.lineHeights[27],
  },
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[28],
}));

const InvestmentTitle = styled(Typography)(({ theme }) => ({
  width: "100%",
  height: "auto",
  color: theme.palette.text.darkBlack,
  textAlign: "left",
  fontSize: theme.typography.fontSize[14],
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize[18],
  },
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[28],
  [theme.breakpoints.down("md")]: {
    lineHeight: theme.typography.lineHeights[27],
  },
}));

const InvestmentAmount = styled(Typography)(({ theme }) => ({
  width: "100%",
  height: "auto",
  color: theme.palette.text.subHeading,
  textAlign: "left",
  fontSize: theme.typography.fontSize[18],
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize[18],
  },
  fontWeight: theme.typography.fontWeights.bold,
  lineHeight: theme.typography.lineHeights[28],
  [theme.breakpoints.down("md")]: {
    lineHeight: theme.typography.lineHeights[27],
  },
}));

const Timing = styled(Typography)(({ theme }) => ({
  marginLeft: "auto",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "8px",
  padding: theme.spacing(1),
  display: "inline-block",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: theme.typography.fontSize[14],
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize[12],
      lineHeight: theme.typography.lineHeights[18],
    },
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function AboutOurTeam() {
  const scrollRef = useRef(null);

  const { t, i18n } = useTranslation("aboutUs");

  const data = t("ourTeam.memebers", { returnObjects: true });

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollStep = 1;
    let scrollInterval;

    const autoScroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
      scrollContainer.scrollLeft += scrollStep;
    };

    scrollInterval = setInterval(autoScroll, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <>
      <Grid style={{ paddingTop: "4%", paddingBottom: "4%" }}>
        <Box
          sx={{
            padding: "2%",
            background: (theme) => theme.palette.background.gradient,
            paddingY: (theme) => (theme.breakpoints.down("sm") ? "5%" : "3%"),
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <MainHeadingButton>
                <PolygonIcon src={images.polygon} alt="Polygon Icon" />
                {t("ourTeam.heading")}
              </MainHeadingButton>
              <MainHeading>{t("ourTeam.subHeading")}</MainHeading>
              <MainHeadingDescription>
                {t("ourTeam.description")}
              </MainHeadingDescription>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            spacing={5}
            sx={{
              // gap: "4rem",
              justifyContent: "center",
              "@media (max-width: 800px)": {
                display: "flex",
                flexWrap: "nowrap",
                overflowX: "auto", // Allow horizontal scrolling on small screens
                paddingBottom: "1rem",
                justifyContent: "left",
              },
            }}
          >
            {data.map((item, i) => (
              <Grid
                item
                xs={12}
                sm={4}
                lg={3}
                key={i}
                sx={{ minWidth: "250px" }}
              >
                {" "}
                {/* Ensure the minimum width for scrolling */}
                <Box
                  sx={{
                    height: "auto",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    textAlign: "left",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={images[item.image]}
                    alt={item.name}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      marginBottom: "1rem",
                    }}
                  />
                  <Typography
                    variant="h3"
                    sx={{
                      marginBottom: "0.25rem",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ marginTop: "0.25rem", textAlign: "left" }}
                  >
                    {item.role}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "aboutUs"])),
    },
  };
}
