import { Card, styled } from "@mui/material";

export const CountCard = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[1],
  border: "1px solid  #EAECF5",
  borderRadius: "8px",
  backgroundColor: theme.palette.background.aboutCard3,
  padding: theme.spacing(5),
  "&:hover": {
    boxShadow: theme.shadows[6],
  },
  [theme.breakpoints.down("xl")]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));
