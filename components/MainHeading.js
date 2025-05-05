"use client";

import { Typography, styled } from "@mui/material";
import { motion } from "framer-motion";

// First create styled Typography
const BaseMainHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#1C2D5A",
  textAlign: "center",
  whiteSpace: "normal",
  maxWidth: "640px",
  minWidth: "348px",
  [theme.breakpoints.up("xs")]: {
    fontSize: "32px",
    lineHeight: "38px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "52px",
    lineHeight: "110%",
    letterSpacing: "-2%",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "56px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "64px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "18px",
    lineHeight: "38px",
    minWidth: "auto",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "36px",
    lineHeight: "38px",
    minWidth: "348px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px",
    lineHeight: "38px",
    minWidth: "348px",
  },
}));

// Then wrap styled component with motion
const MotionMainHeading = motion(BaseMainHeading);

// Use it in component
export default function MainHeading({ children, ...props }) {
  return (
    <MotionMainHeading
      variant="h1"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      {...props}
    >
      {children}
    </MotionMainHeading>
  );
}

// Highlighted text
export const HighlightedText = styled("span")(() => ({
  background: "linear-gradient(90deg, #2AA3D0 -0.71%, #2FA6A2 98.82%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));
