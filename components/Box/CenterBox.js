import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

// Styled FlexBox Component
const FlexCenterBox = styled(Box)(({ theme }) => ({
  display: "flex", // Default to flex display
  justifyContent: "start", // Default justify content
  alignItems: "center", // Center alignment
  gap: theme.spacing(2),
  [theme.breakpoints.up("lg")]: {
    display: "flex", // Default to flex display
    justifyContent: "center", // Default justify content
    alignItems: "center", // Center alignment
    gap: theme.spacing(2)
}, // Optional gap between children
[theme.breakpoints.down("md")]: {
  padding:"10px 0px",
  gap: theme.spacing(2)
},

}));

export default FlexCenterBox;
