import { Box, useMediaQuery, useTheme } from "@mui/material";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const StatisticsReturnsChart = () => {
  const chartRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t, i18n } = useTranslation("statistics");

  const { heading, subheading, grossLegend, investorLegend } = t(
    "returnsChart",
    { returnObjects: true }
  );

  const data = [
    { category: "2022", grossInvestorReturn: 5, investorReturn: 8 },
    { category: "2023", grossInvestorReturn: 9, investorReturn: 11 },
    { category: "2024", grossInvestorReturn: 14, investorReturn: 17 },
  ];

  const isArabic = i18n.language === "ar";

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    const categories = data.map((item) => item.category);
    const gross = data.map((item) => item.grossInvestorReturn);
    const investor = data.map((item) => item.investorReturn);

    chart.setOption({
      tooltip: {
        trigger: "axis",
        formatter: (params) => {
          const year = params[0].name;
          const grossVal = params[0].value;
          const investorVal = params[1].value;
          return `${year}<br/>${grossLegend}: <b>${grossVal}%</b><br/>${investorLegend}: <b>${investorVal}%</b>`;
        },
      },
      legend: {
        data: [grossLegend, investorLegend],
        top: "90%",
        left: "center",
        textStyle: {
          color: "#2F3C57",
          fontSize: 14,
        },
      },
      grid: {
        left: "5%",
        right: "5%",
        top: "25%",
        bottom: "20%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: categories,
        axisLabel: {
          color: "#6c6c6c",
          fontSize: 14,
        },
        axisLine: {
          lineStyle: { color: "#EAECF0" },
        },
      },
      yAxis: {
        type: "value",
        min: 0,
        max: 18,
        interval: 3,
        axisLabel: {
          formatter: (value) => {
            const allowed = [0, 3, 6, 9, 12, 15, 18];
            return allowed.includes(value) ? `${value}%` : "";
          },
          color: "#6c6c6c",
          fontSize: 14,
        },
        splitLine: {
          lineStyle: { color: "#EAECF0" },
        },
      },
      series: [
        {
          name: grossLegend,
          type: "bar",
          data: gross,
          barWidth: "30%",
          itemStyle: { color: "#4CAF50" },
          label: {
            show: true,
            position: "top",
            fontSize: 12,
            color: "#4CAF50",
          },
        },
        {
          name: investorLegend,
          type: "bar",
          data: investor,
          barWidth: "30%",
          itemStyle: { color: "#28A4DB" },
          label: {
            show: true,
            position: "top",
            fontSize: 12,
            color: "#28A4DB",
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
            font: isMobile ? "600 18px AmpleSoft" : "600 24px AmpleSoft",
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
            font: isMobile ? "400 14px Ample" : "400 16px AmpleSoft",
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
  }, [isMobile, heading, subheading, grossLegend, investorLegend, isArabic]);

  return (
    <Box
      sx={{
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        gap: "32px",
      }}
    >
      <Box
        ref={chartRef}
        sx={{
          width: isMobile ? "343px" : "798px",
          height: isMobile ? "490px" : "719px",
          backgroundColor: "#fff",
          border: "1px solid #E1E5EA",
          borderRadius: "16px",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.05)",
        }}
      />
    </Box>
  );
};

export default StatisticsReturnsChart;
