import { MainHeadingButtonWhite } from "@/styles/Button/customButton";
import { PolygonIcon } from "@/styles/Image/customImage";
import images from "@/utils/images";
import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import englishContent from "../../public/i18n/locales/en/investors.json";
import arabicContent from "../../public/i18n/locales/ar/investors.json";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Styled components
const CrowdFundingContainer = styled(Box)(({ theme }) => ({
  background:theme.palette.primary.main,
  padding:"0px 0px 120px 0px",
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[38],
    paddingTop: theme.spacing(0),
          paddingRight: theme.spacing(0), 
          paddingBottom: theme.spacing(5),
          paddingLeft: theme.spacing(0),
  },
}));

const CrowdFundingHeading = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  width: "100%",
  fontWeight: theme.typography.fontWeights.regular,
  color: theme.palette.primary.contrastText,
  fontSize: theme.typography.fontSize[56],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[38],
    textAlign: "center",
  },
}));

const CrowdFundingBody = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.paper,
  width: "95%",
  textAlign: "left",
  fontSize: theme.typography.fontSize[20],
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[28],
  [theme.breakpoints.up("xl")]: {
    width: "100%",
    fontSize: theme.typography.fontSize[18],
    lineHeight: theme.typography.lineHeights[28],
  },
  [theme.breakpoints.down("md")]: {
    width: "90%",
    fontSize: theme.typography.fontSize[18],
    lineHeight: theme.typography.lineHeights[28],
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: theme.typography.fontSize[16],
    lineHeight: theme.typography.lineHeights[24],
    textAlign: "center",
  },
}));

const CrowdFundingImage = styled("img")({
  width: "100%",
  height: "auto",
});

export default function InvestorsCrowdFunding() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { t, i18n } = useTranslation();

  const textContent =
    i18n.language == "en"
      ? englishContent.crowdFunding
      : arabicContent.crowdFunding;

  return (
    <CrowdFundingContainer>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}>
        <Grid
          size={{ xs: 12, sm: 12, md: 5, lg: 6, xl: 7 }}
          sx={{
            order: { xs: 2, md: 1 },
            display: "flex",
            justifyContent: { xs: "center", sm: "center", md: "flex-start" }, // Center align for mobile/tablet
            alignItems: "center",
          }}
        >
          <CrowdFundingImage
            src={
              isMobile
                ? images.investorCrowdFundingMobile
                : images.investorCrowdFunding
            }
            alt="Raqamyah crowdfunding platform investor banner"
            sx={{
              maxWidth: { xs: "100%", sm: "100%", md: "70%" }, // Adjust width as needed
              width: "100%", // Ensures responsiveness
              height: "auto", // Maintain aspect ratio
            }}
          />
        </Grid>

        <Grid
          size={{ xs: 12, sm: 12, md: 7, lg: 6, xl: 5 }}
          sx={{
            order: { xs: 1, md: 2 },
          }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "center", md: "flex-start" }, // Center grid content on sm
              textAlign: { xs: "left", sm: "center" },
              width: "100%",
            }}
          >
            <MainHeadingButtonWhite
              style={{ color: "white", border: "1px solid white" }}
            >
              <PolygonIcon src={images.polygonWhite} alt="White Polygon Icon" />
              {textContent.button}
            </MainHeadingButtonWhite>
          </Grid>
          <Grid>
            <CrowdFundingHeading variant="h2">
              {textContent.heading}
            </CrowdFundingHeading>
          </Grid>
          <Grid>
            <CrowdFundingBody variant="body1" sx={{ paddingY: "5%" }}>
              {textContent.body}
            </CrowdFundingBody>
          </Grid>
        </Grid>
      </Grid>
    </CrowdFundingContainer>
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
