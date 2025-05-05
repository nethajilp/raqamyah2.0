import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import GrowthChart from "./StatisticsGrowthChart";

export default function StatisticsGrowth() {
  const { t, i18n } = useTranslation("statistics");
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.background.gradient,
      }}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              color: theme.palette.text.darkBlue,
              fontSize: { xs: 24, sm: 32 },
              mb: 1,
            }}
          >
            {t("growth.heading")}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 14, sm: 16, md: 18 },
              color: theme.palette.text.subHeading,
              mb: 4,
              lineHeight: { xs: "20px", sm: "22px", md: "24px" },
              textAlign: "left",
              width: "623px%",
              maxWidth: "700px", // Will apply only when screen allows
              height: "auto",
              mx: "auto", // Optional: center horizontally
            }}
          >
            {t("growth.description")}
          </Typography>

          <GrowthChart />
        </Grid>
      </Grid>
    </Box>
  );
}
