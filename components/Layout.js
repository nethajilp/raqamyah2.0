import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import FooterTop from "./FooterTop";
import Header from "./Header";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust threshold if needed
        setIsScrolled(true); // If scrolled more than 50px, make it sticky
      } else {
        setIsScrolled(false); // Reset to normal when scrolled up
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isSpecialPage =
    router.pathname === "/aboutus" || router.pathname === "/borrowers";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: isSpecialPage
          ? "#ffffff"
          : "linear-gradient(113.19deg, #F0F7FE 3.39%, #F2FBF4 96.51%)",
      }}
    >
      <Header isScrolled={isScrolled} />
      <Box component="main" sx={{ flex: 1, marginTop: 4 }}>
        {children}
      </Box>
      <FooterTop />
    </Box>
  );
}
