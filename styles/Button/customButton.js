import { Button, styled } from "@mui/material";

export const MainHeadingButton = styled((props) => (
  <Button {...props} disableRipple />
))(({ theme }) => ({
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

  // Pseudo-element for gradient border
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
}));

export const MainHeadingButton2 = styled(Button)(({ theme }) => ({
  position: "relative",
  fontSize: theme.typography.fontSize[18],
  fontWeight: theme.typography.fontWeights.regular,
  height: "54px",
  padding: "5px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid transparent",
  borderRadius: "30px",
  zIndex: 1,
  textTransform: "capitalize",
  lineHeight: "120%",
  letterSpacing: "-2% !important",
  background: theme.palette.text.buttonGradient,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    padding: "2px",
    borderRadius: "30px",
    background: theme.palette.text.buttonGradient,
    WebkitMask:"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize[16],
  },
}));

export const MainHeadingButtonWhite = styled("div")(({ theme }) => ({
  position: "relative",
  fontSize: "14px",
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[16],
  height: "40px",
  padding: "5px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "uppercase",
  borderRadius: "30px",
  border: "none",
  background: "transparent",
  zIndex: 1,
  pointerEvents: "none", // Disables interactions
  cursor: "default", // Removes cursor change on hover

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "30px",
    padding: "2px",
    WebkitMask:
      "linear-gradient(white, white) content-box, linear-gradient(white, white)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    zIndex: -1,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    padding: "3px 15px",
    height: "35px",
    marginBottom: "10px",
  },
}));

export const SectionButton = styled(Button)(({ theme }) => ({
  background: theme.palette.background.buttonGradient,
  color: theme.palette.primary.contrastText,
  borderRadius: "30px",
  width: "auto",
  height: "54px",
  padding: "20px 28px",
  gap: "10px",
  textTransform: "uppercase",
  fontWeight: theme.typography.fontWeights.regular,
  fontSize: theme.typography.fontSize[16],
  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.fontSize[18],
  },
  "&:hover": {
    background: theme.palette.background.buttonGradient,
  },
}));
