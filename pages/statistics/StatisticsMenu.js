import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { useTranslation } from "react-i18next";

// Styled Components
const SectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: "#F1F9FE",
  borderRadius: "8px",
  padding: "20px 10%",
  width: "384px",
  height: "300px",
  border: "1px solid #EAECF5",
}));

const ListContent = styled(Box)(({ theme }) => ({
  background: "#F1F9FE",
  borderRadius: "8px",
  padding: "10px 10%",
  margin: "5px 0",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  cursor: "pointer",
  color: "#1E396C",
  fontWeight: theme.typography.fontWeights.medium,
  fontSize: "20px",
  lineHeight: "150%",
  letterSpacing: "-1%",
  transition: "background 0.3s, color 0.3s",
  "&.active": {
    background: "linear-gradient(90deg, #28A4DB 0%, #37AA57 121.94%)",
    color: "white",
    fontWeight: 600,
  },
  "&:hover": {
    background: "linear-gradient(90deg, #28A4DB 0%, #37AA57 121.94%)",
    color: "white",
  },
}));

const StatisticsMenu = ({ onScrollTo, activeSection }) => {
  const { t } = useTranslation("statistics");

  return (
    <SectionContainer>
      <ListContent
        onClick={() => onScrollTo?.growth?.()}
        className={activeSection === "growth" ? "active" : ""}
      >
        {t("menu.growth")}
      </ListContent>

      <ListContent
        onClick={() => onScrollTo?.returns?.()}
        className={activeSection === "returns" ? "active" : ""}
      >
        {t("menu.returns")}
      </ListContent>
      <ListContent
        onClick={() => onScrollTo?.business?.()}
        className={activeSection === "business" ? "active" : ""}
      >
        {t("menu.business")}
      </ListContent>
      <ListContent
        onClick={() => onScrollTo?.risk?.()}
        className={activeSection === "risk" ? "active" : ""}
      >
        {t("menu.risk")}
      </ListContent>
    </SectionContainer>
  );
};

export default StatisticsMenu;
