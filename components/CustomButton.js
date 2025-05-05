"use client";

import { Button, styled } from "@mui/material";



const StyledHeroButton = styled(Button)(({ theme }) => ({
  background: theme.palette.background.buttonGradient,
  color: theme.palette.primary.contrastText,
  fontSize: theme.typography.fontSize[18],
  borderRadius: "30px",
  width: "179px",
  height: "54px",
  gap:2,
  padding: "20px 28px",
  gap: "10px",
  textTransform: "capitalize",
  lineHeight: "120%",
  letterSpacing: "0", // Corrected from "-2%"
  fontWeight: theme.typography.fontWeights.regular,
  "&:hover": {
    background: theme.palette.background.buttonGradient,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize[16],
  },
}));

export default function CustomButton({ title }) {
  return (
    <StyledHeroButton
      variant="contained"
      
      sx={{ width: { xs: "100%", sm: "auto" } }}
    >
      {title}
    </StyledHeroButton>
  );
}
