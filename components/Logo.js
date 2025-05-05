import NextLink from "next/link";
import images from "@/utils/images";
import { Link, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

function Logo() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Link
      component={NextLink}
      href="/"
      prefetch={false}
      scroll={false}
      aria-label="Home"
    >
      <img
        src={images.logo}
        alt="Raqamyah Logo"
        style={{
          objectFit: "contain",
          cursor: "pointer",
          maxWidth: "100%",
          minWidth: "80px",
          height: isSmallScreen ? "6vh" : "7vh", // Adjusted height in viewport height units
          width: isSmallScreen ? "auto" : "9vw", // Adjusted width in viewport width units
        }}
      />
    </Link>
  );
}

export default Logo;
