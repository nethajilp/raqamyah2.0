import {
  Box,
  Typography,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MainHeadingButton } from "@/styles/Button/customButton";
import englishContent from "../../public/i18n/locales/en/borrowers.json";
import arabicContent from "../../public/i18n/locales/ar/borrowers.json";

const SectionContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: "80px 20px",
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down("md")]: {
    padding: "60px 15px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "40px 10px",
  },
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[56],
  fontWeight: theme.typography.fontWeights.bold,
  color: theme.palette.text.darkBlue,
  textAlign: "center",
  marginBottom: "40px",
  [theme.breakpoints.down("md")]: {
    fontSize: "28px",
    marginBottom: "32px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
    marginBottom: "24px",
    width: "80%",
  },
  lineHeight: "1",
  width: "40%",
  margin: "20px auto 40px",
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginTop: "24px",
  borderRadius: "10px",
  overflow: "hidden",
  maxWidth: "1216px",
  margin: "auto",
  [theme.breakpoints.down("md")]: {
    maxWidth: "720px",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "343px%",
    margin: "0 auto",
    overflowX: "auto", // Ensures proper scrolling on small devices
  },
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: "#1D3B6C",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.text.paper,
  fontWeight: theme.typography.fontWeights.bold,
  padding: "16px",
  fontSize: "16px",
  [theme.breakpoints.down("md")]: {
    padding: "12px",
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "8px",
    fontSize: "10px",
  },
}));

const TableRowStyled = styled(TableRow)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  "&:nth-of-type(odd)": {
    backgroundColor: "#F8F9FC",
  },
}));

const NoteContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  padding: "16px",
  borderRadius: "10px",
  fontSize: "14px",
  // color: theme.palette.text.secondary,
  maxWidth: "1216px",
  margin: "32px auto 0",
  textAlign: "left",
  lineHeight: "1.5",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
    maxWidth: "720px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "16px",
    maxWidth: "343px",
    fontSize: "12px",
    marginTop: "16px",
  },
}));

export default function BorrowerFinancingRating() {
  const { t, i18n } = useTranslation("borrowers");

  const textContent = t("financingPrices", { returnObjects: true });

  return (
    <SectionContainer>
      <MainHeadingButton
        style={{
          display: "inline-block",
          marginBottom: "16px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        ● {textContent.financingRate}
      </MainHeadingButton>

      <SectionHeading>
        {textContent.detailsOfFinancingProductPrices}
      </SectionHeading>

      <StyledTableContainer component={Paper}>
        <Table>
          <StyledTableHead>
            <TableRow>
              <StyledTableCell>
                {textContent.table.headers.product}
              </StyledTableCell>
              <StyledTableCell>
                {textContent.table.headers.annualPercentageRate}
              </StyledTableCell>
              <StyledTableCell>
                {textContent.table.headers.administrativeFees}
              </StyledTableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {textContent.table.rows.map((card, index) => (
              <TableRowStyled key={index}>
                <TableCell>{card.product}</TableCell>
                <TableCell>{card.annualPercentageRate}</TableCell>
                <TableCell>{card.administrativeFees}</TableCell>
              </TableRowStyled>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>

      <NoteContainer>
        <strong>{textContent.note}</strong>: {textContent.noteContent}
      </NoteContainer>
    </SectionContainer>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    redirect: {
      destination: "/borrowers",
      permanent: false,
    },
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
