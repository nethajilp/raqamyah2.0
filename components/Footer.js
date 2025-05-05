import React from "react";
import { Box, Typography } from "@mui/material";
import getConfig from 'next/config';


export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { publicRuntimeConfig } = getConfig();
  return (


    <Typography variant="body2">
      Copyright Raqamyah @{currentYear} . All rights reserved.&nbsp;{"V-" + publicRuntimeConfig?.version}
    </Typography>

  );
}
