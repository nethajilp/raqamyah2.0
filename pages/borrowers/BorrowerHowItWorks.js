import { MainHeadingButton, SectionButton } from "@/styles/Button/customButton";
import { PolygonIcon } from "@/styles/Image/customImage";
import images from "@/utils/images";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  styled,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import englishContent from "../../public/i18n/locales/en/borrowers.json";
import arabicContent from "../../public/i18n/locales/ar/borrowers.json";
import { useTranslation } from "react-i18next";

const WorkDescription = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[56],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[34],
    maxWidth: "100%",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.lineHeights[64],
    maxWidth: "60%",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "60%",
  },
  fontWeight: theme.typography.fontWeights.semiBold,
  color: theme.palette.text.paper,
  textAlign: "center",
  wordWrap: "break-word",
  whiteSpace: "normal",
  margin: "0 auto",
}));

const WorkCard = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: theme.spacing(5),
  boxShadow: theme.shadows[1],
  //   "&:hover": {
  //     boxShadow: theme.shadows[6],
  //   },
  //   marginTop: theme.spacing(3),
  // marginBottom: theme.spacing(3),
}));

const WorksCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(5),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "400px",
  [theme.breakpoints.down("md")]: {
    height: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const WorkCardHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.darkBlue,
  fontSize: theme.typography.fontSize[28],
  fontWeight: theme.typography.fontWeights.bold,
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[20],
    fontWeight: theme.typography.fontWeights.semiBold,
    lineHeight: theme.typography.lineHeights[28],
    marginTop: theme.spacing(2), // Add marginTop for mobile
  },
  textAlign: "center",
  marginBottom: theme.spacing(2),
  width: "100%",
  height: "auto",
}));

const WorkCardDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.subHeading,
  fontSize: theme.typography.fontSize[16],
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[27],
  textAlign: "center",
  width: "100%",
  height: "auto",
  [theme.breakpoints.up("xl")]: {
    fontSize: theme.typography.fontSize[19],
    lineHeight: theme.typography.lineHeights[28],
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: theme.typography.fontSize[15],
    lineHeight: theme.typography.lineHeights[27],
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[14],
    lineHeight: theme.typography.lineHeights[22],
  },
}));

const CardImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
}));

const HowItWorksButton = styled(Button)(({ theme }) => ({
  background: theme.palette.background.buttonGradient,
  color: theme.palette.primary.contrastText,
  borderRadius: "30px",
  width: "204px",
  height: "54px",
  padding: "20px 28px",
  gap: "10px",
  fontSize: theme.typography.fontSize[18],
  textTransform: "uppercase",
  fontWeight: theme.typography.fontWeights.regular,
  "&:hover": {
    background: theme.palette.background.buttonGradient,
  },
}));

export default function BorrowerHowItWorks() {
  const { t, i18n } = useTranslation("borrowers");

  // const textContent = i18n.language == "en" ? englishContent.howItWorks : arabicContent.howItWorks;
  const textContent = t("howItWorks", { returnObjects: true });

  return (
    <Box
      sx={{
        padding: "3%",
        background: (theme) => theme.palette.background.pri,
        border: (theme) =>
          theme.breakpoints.down("sm") ? "none" : "1px solid #C1E4F6",
        borderRadius: "8px",
        paddingY: (theme) => (theme.breakpoints.down("sm") ? "10%" : "3%"),
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
          marginBottom={"5%"}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              color: "#ffffff", // White text color for the heading
              border: "1px solid #ffffff", // Light blue border to match the design
              padding: "4px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "16px",
              marginTop: "10px",
            }}
          >
            • {textContent.heading}
          </Box>

          <WorkDescription>{textContent.subHeading}</WorkDescription>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={0}
        alignItems="center"
        sx={{
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "center",
            xl: "center",
          },
          marginBottom: {
            xs: 0,
            sm: 10,
          },
        }}
      >
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <WorkCard
            sx={{
              background: (theme) => theme.palette.background.paper,
            }}
          >
            <CardActionArea
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 90,
                  width: "50%",
                  height: "2px",
                  backgroundImage: `url(${images.howItWorksCard1TopBorder})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 60,
                  right: 0,
                  width: "2px",
                  height: "50%",
                  backgroundImage: `url(${images.howItWorksCard1RightBorder})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                },
              }}
            >
              <WorksCardContent>
                <WorkCardHeading gutterBottom variant="h2" component="div">
                  {textContent.singup.heading}
                </WorkCardHeading>
                <WorkCardDescription variant="body2">
                  {textContent.singup.description}
                </WorkCardDescription>
                <CardImage
                  src={images.investorHowItWorksCard1}
                  alt="Borrower Sign Up Illustration"
                />
              </WorksCardContent>
            </CardActionArea>
          </WorkCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <WorkCard
            sx={{
              background: (theme) => theme.palette.background.paper,
            }}
          >
            <CardActionArea
              sx={(theme) => ({
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 60,
                  width: "50%",
                  height: "2px",
                  backgroundImage: `url(${images.howItWorksCard1TopBorder})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  [theme.breakpoints.down("md")]: {
                    top: 0,
                    bottom: "unset",
                    left: 90,
                    width: "50%",
                  },
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 150,
                  right: 0,
                  width: "2px",
                  height: "50%",
                  backgroundImage: `url(${images.howItWorksCard2RightBorder})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                },
              })}
            >
              <WorksCardContent>
                <CardImage
                  src={images.borrowersHowItWorksCard2}
                  alt="Borrower Opportunity Illustration"
                  sx={(theme) => ({
                    order: 1,
                    [theme.breakpoints.down("sm")]: {
                      order: 3,
                    },
                  })}
                />
                <WorkCardHeading
                  gutterBottom
                  variant="h2"
                  component="div"
                  sx={(theme) => ({
                    order: 2,
                    [theme.breakpoints.down("sm")]: {
                      order: 1,
                    },
                  })}
                >
                  {textContent.rightOpportunity.heading}
                </WorkCardHeading>
                <WorkCardDescription
                  variant="body2"
                  sx={(theme) => ({
                    order: 3,
                    [theme.breakpoints.down("sm")]: {
                      order: 2,
                    },
                  })}
                >
                  {textContent.rightOpportunity.description}
                </WorkCardDescription>
              </WorksCardContent>
            </CardActionArea>
          </WorkCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <WorkCard
            sx={{
              background: (theme) => theme.palette.background.paper,
            }}
          >
            <CardActionArea
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 90,
                  width: "50%",
                  height: "2px",
                  backgroundImage: `url(${images.howItWorksCard3TopBorder})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                },
              }}
            >
              <WorksCardContent>
                <WorkCardHeading gutterBottom variant="h2" component="div">
                  {textContent.investment.heading}
                </WorkCardHeading>
                <WorkCardDescription variant="body2">
                  {textContent.investment.description}
                </WorkCardDescription>
                <CardImage
                  src={images.borrowersHowItWorksCard3}
                  alt="Borrower Investment Illustration"
                />
              </WorksCardContent>
            </CardActionArea>
          </WorkCard>
        </Grid>
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
        })}
      >
        <SectionButton
          variant="contained"
          style={{
            background: "white",
            fontWeight: "bold",
          }}
        >
          <p
            style={{
              background: "linear-gradient(90deg, #2AA3D0 0%, #2DA69F 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundColor: "white",
            }}
          >
            {textContent.button}
          </p>
        </SectionButton>
      </Grid>
    </Box>
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
