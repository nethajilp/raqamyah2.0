import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { useMediaQuery, useTheme } from "@mui/material";

const Chart = ({ data, currency }) => {
  const chartRef = useRef(null);

  const theme = useTheme();
  const veryWideScreen = useMediaQuery(theme.breakpoints.up("sm"), {
    noSsr: true,
  });

  const [chartHeight, setChartHeight] = useState(400);
  const [chartWidth, setChartWidth] = useState("100%");

  useEffect(() => {
    setChartHeight(veryWideScreen ? 500 : 400);
  }, [veryWideScreen]);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const categories = data.map((item) => item.category);
    const values = data.map((item) => item.value);

    const minIndex = values.indexOf(Math.min(...values));
    const maxIndex = values.indexOf(Math.max(...values));

    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "5%",
        right: "5%",
        top: "20%",
        bottom: "10%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: categories,
      },
      yAxis: {
        type: "value",
        min: 5000,
        max: 30000,
        axisLabel: {
          formatter: `{value} ${currency}`,
        },
      },
      series: [
        {
          data: values,
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 10,
        },
      ],
      graphic: [
        {
          type: "text",
          left: "5%",
          top: "5%",
          style: {
            rich: {
              normal: {
                fontSize: veryWideScreen ? 14 : 8,
                fontWeight: "400",
                lineHeight: 28,
              },
              bold: {
                fontSize: veryWideScreen ? 24 : 12,
                fontWeight: "bold",
              },
            },
            text: `{normal|Invest in ${categories[minIndex]}}\n{bold|${values[minIndex].toLocaleString()} ${currency}}`,
            fill: "#000",
          },
        },
        {
          type: "text",
          right: "5%",
          top: "5%",
          style: {
            rich: {
              normal: {
                fontSize: veryWideScreen ? 14 : 8,
                fontWeight: "400",
                lineHeight: 28,
              },
              bold: {
                fontSize: veryWideScreen ? 24 : 12,
                fontWeight: "bold",
              },
            },
            text: `{normal|Invest In ${categories[maxIndex]}}\n{bold|${values[maxIndex].toLocaleString()} ${currency}}`,
            fill: "#000",
          },
        },
      ],
    };

    chartInstance.setOption(option);

    const resizeChart = () => {
      chartInstance.resize();
    };

    window.addEventListener("resize", resizeChart);

    return () => {
      chartInstance.dispose();
      window.removeEventListener("resize", resizeChart);
    };
  }, [data, currency, veryWideScreen]);

  return (
    <div
      ref={chartRef}
      style={{
        width: chartWidth,
        height: chartHeight,
        border: "1px solid #ddd",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        background: "#FFFFFF",
        borderRadius: "16px",
      }}
    />
  );
};

export default Chart;
