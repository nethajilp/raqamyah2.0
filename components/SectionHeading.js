"use client";

import { Button, styled } from "@mui/material";
import images from "@/utils/images";


const StyledButton = styled((props) => <Button {...props} disableRipple />)(
  ({ theme }) => ({
    position: "relative",
    fontSize: theme.typography.fontSize[14],
    fontWeight: theme.typography.fontWeights.regular,
    lineHeight: theme.typography.lineHeights[16],
    height: "40px",
    padding: "8px 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
    borderRadius: "30px",
    border: "none",
    background: "transparent",
    zIndex: 1,
    cursor: "text",
    userSelect: "text",

    // Gradient text
    backgroundImage: theme.palette.text.buttonGradient,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "30px",
      padding: "2px",
      background: theme.palette.background.borderGradient,
      WebkitMask:
        "linear-gradient(white, white) content-box, linear-gradient(white, white)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
      zIndex: -1,
    },
  })
);

const PolygonIcon = styled("img")({
  width: "14px",
  height: "14px",
  marginRight: "7px",
});

export default function SectionHeading({
  title,
  iconSrc,
  alt = "icon",
}) {
  return (
    <StyledButton >
      <PolygonIcon src={images.polygon} alt={alt} />
      {title}
    </StyledButton>
  );
}

