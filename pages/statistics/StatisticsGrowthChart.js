import { Box, useMediaQuery, useTheme } from "@mui/material";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const StatisticsGrowthChart = () => {
  const chartRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { t, i18n } = useTranslation("statistics");

  const isArabic = i18n.language === "ar";

  const { heading, subheading, note } = t("growthChart", {
    returnObjects: true,
  });

  const chartData = {
    categories: ["2022", "2023", "2024"],
    values: [50, 81, 155],
  };

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    const { categories, values } = chartData;

    chart.setOption({
      tooltip: {
        trigger: "axis",
        formatter: (params) => {
          const year = params[0].name;
          const value = params[0].value;
          return `${year}<br/>Discussed loans: <b>${value}</b>`;
        },
      },
      grid: {
        left: "5%",
        right: "5%",
        top: "25%",
        bottom: "10%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: categories,
        axisLine: { lineStyle: { color: "#EAECF0" } },
        axisLabel: { fontSize: 14, color: "#6c6c6c" },
      },
      yAxis: {
        type: "value",
        min: 0,
        max: 300,
        axisLabel: { fontSize: 14, color: "#6c6c6c" },
        splitLine: { lineStyle: { color: "#EAECF0" } },
      },
      series: [
        {
          type: "line",
          data: values,
          smooth: true,
          symbol: "circle",
          symbolSize: 10,
          itemStyle: {
            color: "#28A4DB",
            borderColor: "#28A4DB",
            borderWidth: 2,
          },
          lineStyle: {
            color: "#28A4DB",
            width: 3,
          },
        },
      ],
      graphic: [
        {
          type: "text",

          [isArabic ? "right" : "left"]: "5%",
          top: "5%",
          style: {
            text: heading,
            font: `${isMobile ? "600 18px AmpleSoft" : "600 24px AmpleSoft"}`,
            lineHeight: isMobile ? 24 : 32,
            width: isMobile ? 280 : 500,
            overflow: "break",
            fill: "#2F3C57",
          },
        },
        {
          type: "text",

          [isArabic ? "right" : "left"]: "5%",
          top: "12%",
          style: {
            text: subheading,
            font: `${isMobile ? "400 14px Ample" : "400 16px AmpleSoft"}`,
            lineHeight: isMobile ? 20 : 24,
            width: isMobile ? 280 : 500,
            overflow: "break",
            fill: "#6c6c6c",
          },
        },
      ],
    });

    const resize = () => chart.resize();
    window.addEventListener("resize", resize);

    return () => {
      chart.dispose();
      window.removeEventListener("resize", resize);
    };
  }, [isMobile, heading, subheading, isArabic]);

  return (
    <Box
      sx={{
        width: isMobile ? "343px" : "798px",
        height: isMobile ? "490px" : "719px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "32px",
        mx: "auto",
      }}
    >
      <Box
        ref={chartRef}
        sx={{
          width: isMobile ? "343px" : "798px",
          height: "719px",
          backgroundColor: "#fff",
          border: "1px solid #E1E5EA",
          borderRadius: "16px",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.05)",
          mx: "auto",
        }}
      />
      <Box
        sx={{
          mt: 2,
          width: "100%",
          maxWidth: isMobile ? "343px" : "798px",
          backgroundColor: "#EAF6FF",
          borderRadius: "8px",
          padding: "12px 16px",
          fontSize: 14,
          color: "#2F3C57",
          mx: "auto",
        }}
      >
        {note}
      </Box>
    </Box>
  );
};

export default StatisticsGrowthChart;
