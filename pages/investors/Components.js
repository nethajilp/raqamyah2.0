import React from "react";
import { Typography, Container, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

function CrowdlendingPlatform() {
  const { t, i18n } = useTranslation();

  return (
    <Typography variant="h5" color="primary">
      <h6> {t("welcome")}</h6>
    </Typography>
  );
}

export default CrowdlendingPlatform;
