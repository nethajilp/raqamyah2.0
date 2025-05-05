import React from "react";
import { Typography, Container, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

function CrowdlendingPlatform() {
  const { t, i18n } = useTranslation();

  return (
    <Typography variant="h5" color="primary">
      {t("welcome")}
    </Typography>
  );
}

export default CrowdlendingPlatform;
