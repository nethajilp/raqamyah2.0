import {
  MainHeadingButton,
  MainHeadingButtonWhite,
} from "@/styles/Button/customButton";
import { PolygonIcon } from "@/styles/Image/customImage";
import { MainHeading } from "@/styles/Typography/customTypography";
import images from "@/utils/images";
import { Box, Card, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

const ReasonCard = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: theme.spacing(2),
  border: "1px solid  #EAECF5",
  borderRadius: "16px",
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const CardLogo = styled("img")(() => ({
  // width: "44px",
  // height: "44px",
  objectFit: "contain",
  marginBottom: "15%",
}));

const Heading = styled(Typography)(({ theme }) => ({
  width: "100%",
  height: "auto",
  color: theme.palette.primary.main,
  textAlign: "left",
  marginBottom: "10px",
  fontSize: theme.typography.fontSize[28],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[21],
    lineHeight: theme.typography.lineHeights[32],
  },
  fontWeight: theme.typography.fontWeights.bold,
  lineHeight: theme.typography.lineHeights[36],
}));

export const Description = styled(Typography)(({ theme }) => ({
  width: "100%",
  height: "auto",
  color: theme.palette.text.darkBlack,
  textAlign: "left",
  fontSize: theme.typography.fontSize[16],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[14],
    lineHeight: theme.typography.lineHeights[22],
    marginTop: "10%",
  },
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[24],
}));

export default function AboutOurVision() {
  const { t, i18n } = useTranslation("aboutUs");

  const data = t("ourVision.card", { returnObjects: true });
  console.log("data", data);

  return (
    <Box
      sx={{
        padding: "3%",
        // background: (theme) => theme.palette.background.gradient,
        background: "linear-gradient(113.19deg, #F2FBF4 3.39%, #F0F7FE 96.51%)",

        paddingY: {
          xs: "10%",
          sm: "5%",
        },
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
        >
          {/* <MainHeadingButtonWhite>
            <PolygonIcon src={images.polygonWhite} alt="icon" />
            {t("reason.headingButton")}
          </MainHeadingButtonWhite> */}
          <MainHeadingButton>
            <PolygonIcon src={images.polygon} alt="Polygon Icon" />
            {t("ourVision.heading")}
          </MainHeadingButton>
          <Box
            component={MainHeading}
            sx={{
              marginTop: "2%",
              marginBottom: "5%",
              maxWidth: {
                xs: "100%",
                sm: "60%",
                lg: "100%",
              },
              // color: (theme) => theme.palette.text.paper,
            }}
          >
            {t("ourVision.description")}
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
            <ReasonCard>
              <CardLogo src={images[card.logo]} alt={`${card.heading} logo`} />
              <Heading>{card.heading}</Heading>
              <Description>{card.description}</Description>
            </ReasonCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "aboutUs"])),
    },
  };
}
