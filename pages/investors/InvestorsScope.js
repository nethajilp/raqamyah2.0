import { MainHeadingButton, SectionButton } from "@/styles/Button/customButton";
import { PolygonIcon } from "@/styles/Image/customImage";
import {
  MainHeading,
  MainHeadingDescription,
} from "@/styles/Typography/customTypography";
import images from "@/utils/images";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronRight } from "react-icons/fa";

const TestimonialCardContent = styled(Card)(({ theme, cardType }) => ({
  width: "100%",
  height: "100%",
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[1],
  border: "1px solid  #EAECF5",
  borderRadius: "8px",
  "&:hover": {
    boxShadow: theme.shadows[6],
  },
}));

const TestimonialCardStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(2.5),
}));

const TestimonialCard = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2.5),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const UserContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  marginTop: theme.spacing(1),
}));

const LogoImageWrapper = styled("div")(() => ({
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  backgroundColor: "#F3F4F6",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const LogoImage = styled("img")(() => ({
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  objectFit: "cover",
}));

const TechName = styled(Typography)(({ theme }) => ({
  width: "100%",
  height: "auto",
  color: theme.palette.primary.main,
  textAlign: "left",
  fontSize: theme.typography.fontSize[24],
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize[18],
  },
  fontWeight: theme.typography.fontWeights.bold,
  lineHeight: theme.typography.lineHeights[24],
  [theme.breakpoints.down("md")]: {
    lineHeight: theme.typography.lineHeights[27],
  },
}));

const UserRole = styled(Typography)(({ theme }) => ({
  width: "100%",
  height: "auto",
  color: theme.palette.text.subHeading,
  textAlign: "left",
  fontSize: theme.typography.fontSize[14],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[18],
    lineHeight: theme.typography.lineHeights[27],
  },
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[28],
}));

const InvestmentTitle = styled(Typography)(({ theme }) => ({
  width: "100%",
  height: "auto",
  color: theme.palette.text.darkBlack,
  textAlign: "left",
  fontSize: theme.typography.fontSize[14],
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize[18],
  },
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[28],
  [theme.breakpoints.down("md")]: {
    lineHeight: theme.typography.lineHeights[27],
  },
}));

const InvestmentAmount = styled(Typography)(({ theme }) => ({
  width: "100%",
  height: "auto",
  color: theme.palette.text.subHeading,
  textAlign: "left",
  fontSize: theme.typography.fontSize[18],
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize[18],
  },
  fontWeight: theme.typography.fontWeights.bold,
  lineHeight: theme.typography.lineHeights[28],
  [theme.breakpoints.down("md")]: {
    lineHeight: theme.typography.lineHeights[27],
  },
}));

const Timing = styled(Typography)(({ theme }) => ({
  marginLeft: "auto",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "8px",
  padding: theme.spacing(1),
  display: "inline-block",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: theme.typography.fontSize[14],
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize[12],
      lineHeight: theme.typography.lineHeights[18],
    },
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function InvestorsScope() {
  const scrollRef = useRef(null);

  const { t, i18n } = useTranslation("common");

  const data = t("scope.card.header", { returnObjects: true });

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = 400; // Scroll per step (width of one card)
    let scrollInterval;

    const autoScroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        // If the container is scrolled to the end, reset to the start
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollStep; // Scroll by one card width
      }
    };

    // Set interval to scroll every 2 seconds
    scrollInterval = setInterval(autoScroll, 2000);

    // Clear interval on unmount
    return () => clearInterval(scrollInterval);
  }, []);



  return (
    <Box
      sx={{
        background: (theme) => theme.palette.background.gradient,

      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <MainHeadingButton>
            <PolygonIcon src={images.polygon} alt="icon" />
            {t("scope.headingButton")}
          </MainHeadingButton>
          <MainHeading>{t("scope.headingTitle")}</MainHeading>
          <MainHeadingDescription>
            {t("scope.headingDescription")}
          </MainHeadingDescription>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        ref={scrollRef}
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto",
          position: "relative",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
      >
        {data.map((card, index) => (
          <Grid
            key={index}
            item
            sx={{
              maxWidth: { xs: "100%", sm: "400px" },
              flexShrink: 0,
              marginBottom: 2,
              minWidth: { xs: "100%", sm: "400px" },
            }}
          >
            <TestimonialCardContent>
              <TestimonialCardStyle>
                <UserContainer>
                  <LogoImageWrapper>
                    <LogoImage
                      src={images[card.logo]}
                      alt={`${card.name} logo`}
                    />
                  </LogoImageWrapper>
                  <div style={{ marginLeft: "12px" }}>
                    <TechName>{card.name}</TechName>
                    <UserRole>{card.issue_members}</UserRole>
                  </div>
                </UserContainer>
              </TestimonialCardStyle>

              <Divider />

              <TestimonialCard>
                <UserContainer>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                    }}
                  >
                    <InvestmentTitle>{card.title}</InvestmentTitle>
                    <InvestmentAmount>
                      {card.total_investment.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </InvestmentAmount>
                  </div>
                  <Timing>{card.time_until_available}</Timing>
                </UserContainer>

                <UserContainer>
                  <TableContainer component={Paper}>
                    <Table
                      sx={{ minWidth: "100%" }}
                      aria-label="customized table"
                    >
                      <TableBody>
                        <StyledTableRow>
                          <StyledTableCell component="th" scope="row">
                            {card.roi}
                          </StyledTableCell>
                          <StyledTableCell
                            align="right"
                            sx={{
                              fontWeight: "bold",
                              fontSize: "16px !important",
                            }}
                          >
                            {card.return_of_investment}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell component="th" scope="row">
                            {card.ar}
                          </StyledTableCell>
                          <StyledTableCell
                            align="right"
                            sx={{
                              fontWeight: "bold",
                              fontSize: "16px !important",
                            }}
                          >
                            {card.annual_return}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell component="th" scope="row">
                            {card.durationLabel}
                          </StyledTableCell>
                          <StyledTableCell
                            align="right"
                            sx={{
                              fontWeight: "bold",
                              fontSize: "16px !important",
                            }}
                          >
                            {card.duration}
                          </StyledTableCell>
                        </StyledTableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </UserContainer>

                <UserContainer>
                  <InvestmentAmount
                    sx={{
                      cursor: "pointer",
                      fontSize: (theme) => theme.typography.fontSize[16],
                      width: "auto",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      marginTop: "15px",
                    }}
                    onClick={() =>
                      console.log(`${card.name} Footer Button clicked!`)
                    }
                  >
                    {card.footer}
                    <FaChevronRight />
                  </InvestmentAmount>
                </UserContainer>
              </TestimonialCard>
            </TestimonialCardContent>
          </Grid>
        ))}
      </Grid>
      <Grid
        display="flex"
        alignItems="center"
        justifyContent="center"
        size={{ sm: 4, md: 5, lg: 4, xl: 4 }}
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            paddingY: "10%",
          },
          [theme.breakpoints.up("md")]: {
            paddingTop: "2%",
          },
        })}
      >
        <SectionButton variant="contained">
          {t("scope.sectionButton")}
        </SectionButton>
      </Grid>
    </Box>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    redirect: {
      destination: "/investors",
      permanent: false,
    },
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
