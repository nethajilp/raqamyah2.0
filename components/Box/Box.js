import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

// Styled FlexBox Component
const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex", // Default to flex display
  justifyContent: "flex-start", // Default justify content
  alignItems: "center", // Center alignment
  gap: theme.spacing(2), // Optional gap between children
}));

export default FlexBox;
