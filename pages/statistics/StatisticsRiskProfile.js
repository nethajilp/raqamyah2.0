import {
  Box,
  Button,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

// Styled Typography for consistency
const Heading = styled(Typography)(({ theme }) => ({
  color: "#1E396C", // Correct Figma color
  fontWeight: 700,
  fontSize: "40px", // Default font size for desktop
  marginBottom: "16px",
  textAlign: "left",

  // Mobile responsive font size adjustment
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px", // Font size for mobile
  },
}));

const Subheading = styled(Typography)(({ theme }) => ({
  color: "#6c6c6c",
  fontSize: "16px",
  marginBottom: "24px",
  textAlign: "left",
  width: "100%",
  maxWidth: "623px", // Keeps desktop spec
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    lineHeight: "20px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "15px",
    lineHeight: "22px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
    lineHeight: "24px",
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: "#1E396C", // Figma color for section titles
  fontWeight: 700,
  fontSize: "24px", // Default font size for desktop
  marginBottom: "8px",
  textAlign: "left",

  // Mobile responsive font size adjustment
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px", // Font size for mobile
  },
}));

const NoteBox = styled(Box)({
  backgroundColor: "#EAF6FF",
  borderRadius: "8px",
  padding: "16px",
  marginTop: "24px",
  color: "#2F3C57",
  fontSize: "14px",
});

export default function StatisticsRiskProfile() {
  const { t } = useTranslation("statistics");

  const { heading, subheading, button1, button2, table, note } = t(
    "riskProfile",
    { returnObjects: true }
  );

  return (
    <Box sx={{ py: 4 }}>
      {/* Outer container max-width 1280px */}
      <Box sx={{ maxWidth: "1280px", mx: "auto", px: 2 }}>
        {/* Section Heading */}
        <Heading>{heading}</Heading>

        {/* Subheading */}
        <Subheading>{subheading}</Subheading>

        {/* Tab Buttons Section */}
        <Box display="flex" gap="12px" mb={4}>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "8px" }}
          >
            {button1}
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "8px",
              color: "#1E396C",
              backgroundColor: "#fff",
              borderColor: "#ccc",
            }}
          >
            {button2}
          </Button>
        </Box>

        {/* Card with Table + Note */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "800px", // Fixed width for the card
            height: "auto", // Auto height for dynamic content
            backgroundColor: "#FFFFFF",
            border: "1px solid #E1E5EA",
            borderRadius: "16px",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.04)", // Subtle shadow
            padding: 3,

            mb: 4,
          }}
        >
          <SectionTitle>{table.heading}</SectionTitle>

          <Subheading>{table.subheading}</Subheading>

          {/* Table */}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{
                      backgroundColor: "#1E396C",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    {table.columns.risk}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      backgroundColor: "#1E396C",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    {table.columns.actual}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {table.data.map((row) => (
                  <TableRow
                    key={row.risk}
                    sx={{
                      backgroundColor:
                        row.risk === "Total" ? "#F9FBFC" : "inherit",
                    }}
                  >
                    <TableCell align="left">{row.risk}</TableCell>
                    <TableCell align="left">{row.actual}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Note */}
          <NoteBox>{note}</NoteBox>
        </Box>
      </Box>
    </Box>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "statistics"])),
    },
  };
}
