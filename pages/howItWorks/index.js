import React from "react";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

import Components from "./Components";

function Home() {
  const { t, i18n } = useTranslation();

  return <Components />;
}

export default Home;
