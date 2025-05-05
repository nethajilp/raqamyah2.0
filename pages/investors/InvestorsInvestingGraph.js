import { MainHeadingButton } from "@/styles/Button/customButton";
import { PolygonIcon } from "@/styles/Image/customImage";
import { MainHeading } from "@/styles/Typography/customTypography";
import images from "@/utils/images";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import Chart from "./Chart";

export default function InvestorsInvestingGraph() {
  const { t, i18n } = useTranslation("common");

  const { data, currency } = t("investingGraph", { returnObjects: true });

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
            {t("investingGraph.headingButton")}
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
            {t("investingGraph.headingTitle")}
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
          <Chart data={data} currency={currency} sx={{ width: "250px" }} />
        </Grid>
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
