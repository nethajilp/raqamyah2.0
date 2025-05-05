import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import SectorDistributionChart from "./StatisticsSectorDistributionChart";
import { useTranslation } from "react-i18next";
import StatisticsSectorDistributionChart from "./StatisticsSectorDistributionChart";
export default function StatisticsBusinessProfile() {
  const theme = useTheme();
  const { t } = useTranslation("statistics");

  const { heading, description, button1, button2 } = t("businessProfile", {
    returnObjects: true,
  });

  return (
    <Box
      sx={{
        background: theme.palette.background.gradient,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              fontSize: { xs: 24, sm: 40 },
              color: "#2F3C57",
              mb: 1,
            }}
          >
            {heading}
          </Typography>

          <Typography
            sx={{
              fontSize: 16,
              color: "#6c6c6c",
              mb: 3,
              width: "623px",
              maxWidth: "623px", // Matches Figma spec
              lineHeight: { xs: "20px", sm: "20px", md: "24px" },
              textAlign: "left",
              maxWidth: "623px", // Restrict to 623px on large screens
              width: "100%", // Responsive width
              height: "auto", // Let height adjust to content
              [theme.breakpoints.down("sm")]: {
                fontSize: theme.typography.fontSize[14],
                lineHeight: theme.typography.lineHeights[20],
              },
            }}
          >
            {description}
          </Typography>

          <Box display="flex" gap="12px" mb={4}>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: "8px" }}
            >
              {button1}
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "8px",
                color: theme.palette.text.primary,
                borderColor: "#ccc",
                backgroundColor: "#fff",
              }}
            >
              {button2}
            </Button>
          </Box>

          <StatisticsSectorDistributionChart />
        </Grid>
      </Grid>
    </Box>
  );
}
