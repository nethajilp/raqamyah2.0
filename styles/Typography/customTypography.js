import { styled, Typography } from "@mui/material";

export const MainHeading = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeights.semiBold,
  color: theme.palette.text.darkBlue,
  textAlign: "center",
  wordWrap: "break-word",
  whiteSpace: "normal",
  maxWidth: "100%",
  margin: "0 auto",
  letterSpacing: "-2%",
  lineHeight: "110%",
  [theme.breakpoints.up("xs")]: {
    maxWidth: "100%",
    fontSize: theme.typography.fontSize[32],
    lineHeight: theme.typography.lineHeights[38],
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.fontSize[32],
  },
  [theme.breakpoints.up("md")]: {

    fontSize: theme.typography.fontSize[52],
    lineHeight: theme.typography.lineHeights[60],
  },
  [theme.breakpoints.up("lg")]: {

    fontSize: theme.typography.fontSize[56],
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: theme.typography.fontSize[64],
  },
}));

export const MainHeadingDescription = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeights.regular,
  color: theme.palette.text.subHeading,
  textAlign: "center",
  wordWrap: "break-word",
  whiteSpace: "normal",
  maxWidth: "100%",
  margin: "0 auto",
  marginBottom: "3%",
  // Add responsive styles
  [theme.breakpoints.up("xs")]: {
    maxWidth: "100%",
    fontSize: theme.typography.fontSize[16],
  },
  [theme.breakpoints.up("sm")]: {
    maxWidth: "50%",
    fontSize: theme.typography.fontSize[18],
    lineHeight: theme.typography.lineHeights[24],
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "60%",
    fontSize: theme.typography.fontSize[30],
    lineHeight: theme.typography.lineHeights[32],
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "50%",
    fontSize: theme.typography.fontSize[18],
    lineHeight: theme.typography.lineHeights[27],
  },
  [theme.breakpoints.up("xl")]: {
    maxWidth: "50%",
    fontSize: theme.typography.fontSize[21],
  },
}));

export const CountValue = styled(Typography)(({ theme }) => ({
  width: "100%",
  height: "auto",
  color: theme.palette.primary.main,
  textAlign: "center",
  fontSize: theme.typography.fontSize[48],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[28],
    lineHeight: theme.typography.lineHeights[32],
  },
  fontWeight: theme.typography.fontWeights.bold,
  lineHeight: theme.typography.lineHeights[64],
}));

export const CountLabel = styled(Typography)(({ theme }) => ({
  width: "100%",
  height: "auto",
  color: theme.palette.text.subHeading,
  textAlign: "center",
  fontSize: theme.typography.fontSize[18],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[15],
    lineHeight: theme.typography.lineHeights[20],
    marginTop: "10%",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
  },
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[27],
}));
