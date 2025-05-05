import { MainHeadingButtonWhite } from "@/styles/Button/customButton";
import { PolygonIcon } from "@/styles/Image/customImage";
import images from "@/utils/images";
import { Box, Card, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import MainHeading from "@/components/MainHeading";

const BoxContainer = styled(Box)(({ theme }) => ({
  background:theme.palette.background.gradient,

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[38],
   
  },
}));
const ReasonCard = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[1],
  border: "1px solid  #EAECF5",
  borderRadius: "16px",
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(5),
  "&:hover": {
    boxShadow: theme.shadows[6],
  },
  [theme.breakpoints.down("xl")]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.down("md")]: {
    padding: "32px 20px 32px 20px",
  },
}));

const CardLogo = styled("img")(() => ({
  width: "44px",
  height: "44px",
  objectFit: "contain",
  marginBottom: "15%",
}));

const Heading = styled(Typography)(({ theme }) => ({
  width: "100%",
  height: "auto",
  color: theme.palette.primary.main,
  textAlign: "left",
  marginBottom: "10px",
  fontSize: theme.typography.fontSize[32],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[28],
    lineHeight: theme.typography.lineHeights[32],
  },
  fontWeight: theme.typography.fontWeights.bold,
  lineHeight: theme.typography.lineHeights[36],
}));

export const Description = styled(Typography)(({ theme }) => ({
  width: "100%",
  height: "auto",
  color: theme.palette.text.gray,
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

export default function InvestorsReason() {
  const { t, i18n } = useTranslation("common");

  const data = t("reason.card", { returnObjects: true });

  return (
    <BoxContainer>
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
          <MainHeadingButtonWhite
            style={{ border: "1px solid white", color: "white" }}
          >
            <PolygonIcon src={images.polygonWhite} alt="White Polygon Icon" />
            {t("reason.headingButton")}
          </MainHeadingButtonWhite>
          <MainHeading sx={{color:'white'}}>
            {t("reason.headingTitle")}
          </MainHeading>
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
    </BoxContainer>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    redirect: {
      destination: "/investors",
      permanent: false,
    },
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
