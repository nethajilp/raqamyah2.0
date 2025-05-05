import { Box, useMediaQuery, useTheme } from "@mui/material";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const StatisticsSectorDistributionChart = () => {
  const chartRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t, i18n } = useTranslation("statistics");

  const { heading, subheading, note, sectors } = t("sectorDistributionChart", {
    returnObjects: true,
  });
  const isArabic = i18n.language === "ar";

  useEffect(() => {
    if (!chartRef.current) return;
    const chart = echarts.init(chartRef.current);

    const chartData = [
      { key: "technology", value: 7.5, color: "#1E396C" },
      { key: "telecommunication", value: 7.5, color: "#89CFF0" },
      { key: "automobiles", value: 5, color: "#C1E4F6" },
      { key: "construction", value: 20, color: "#C3EFCE" },
      { key: "healthcare", value: 30, color: "#28A4DB" },
      { key: "industrial", value: 10, color: "#B3B8DB" },
      { key: "foodRetail", value: 20, color: "#37AA57" },
    ];

    const option = {
      tooltip: {
        trigger: "item",
        formatter: "{b}: {d}%",
      },
      legend: {
        type: "scroll",
        bottom: 0,
        left: "center",
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          fontSize: 12,
          color: "#2F3C57",
        },
        data: chartData.map((item) => sectors[item.key]),
      },
      series: [
        {
          name: heading,
          type: "pie",
          radius: ["40%", "65%"],
          startAngle: 90,
          sort: null,
          avoidLabelOverlap: true,
          itemStyle: {
            borderRadius: 4,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: true,
            position: "outside",
            formatter: "{b}: {d}%",
            fontSize: 12,
            color: "#2F3C57",
          },
          labelLine: {
            show: true,
            length: 20,
            length2: 10,
            lineStyle: {
              color: "#ccc",
            },
          },
          data: chartData.map((item) => ({
            value: item.value,
            name: sectors[item.key],
            itemStyle: { color: item.color },
          })),
        },
      ],
    };

    chart.setOption(option);

    const resize = () => chart.resize();
    window.addEventListener("resize", resize);

    return () => {
      chart.dispose();
      window.removeEventListener("resize", resize);
    };
  }, [isMobile, heading, sectors, subheading, note]);

  return (
    <Box
      sx={{
        width: isMobile ? "343px" : "798px",
        height: isMobile ? "490px" : "719px",
        borderRadius: "16px",
        mx: "auto",
        border: "1px solid #E1E5EA",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.05)",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Box
          sx={{
            fontSize: isMobile ? "16px" : "24px",
            fontWeight: "600",
            color: "#1E396C",
            textAlign: "left",
          }}
        >
          {heading}
        </Box>
        <Box
          sx={{
            fontSize: isMobile ? "12px" : "18px",
            color: "#32302F",
            textAlign: "left",
          }}
        >
          {subheading}
        </Box>
      </Box>

      <div ref={chartRef} style={{ width: "100%", height: "100%" }} />

      <Box
        sx={{
          fontSize: isMobile ? "12px" : "14px",
          margin: "10px",
          color: "#6c6c6c",
          textAlign: "left",
          backgroundColor: "#E3F1FB",
          padding: "12px 16px",
          borderRadius: "8px",
        }}
      >
        {note}
      </Box>
    </Box>
  );
};

export default StatisticsSectorDistributionChart;
