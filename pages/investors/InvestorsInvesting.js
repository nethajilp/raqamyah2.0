import { MainHeadingButton } from "@/styles/Button/customButton";
import { CountCard } from "@/styles/Card/customCard";
import { PolygonIcon } from "@/styles/Image/customImage";
import {
  CountLabel,
  CountValue,
  MainHeading,
} from "@/styles/Typography/customTypography";
import images from "@/utils/images";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export default function InvestorsInvesting() {
  const { t, i18n } = useTranslation("common");

  const data = t("investing.card", { returnObjects: true });

  return (
    <Box
      sx={{
 
        background: (theme) => theme.palette.background.gradient,

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
            {t("investing.headingButton")}
          </MainHeadingButton>
          <Box
            component={MainHeading}
            sx={{
              marginBottom: "3%",
              maxWidth: {
                xs: "100%",
                sm: "60%",
                lg: "55%",
              },
            }}
          >
            {t("investing.headingTitle")}
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 6, sm: 6, md: 6, lg: 3, xl: 3 }}>
            <CountCard>
              <CountValue>{card.value}</CountValue>
              <CountLabel>{card.label}</CountLabel>
            </CountCard>
          </Grid>
        ))}
      </Grid>
    </Box>
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
