import { MainHeadingButtonWhite } from "@/styles/Button/customButton";
import { PolygonIcon } from "@/styles/Image/customImage";
import images from "@/utils/images";
import { Box, Button, CardContent, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FaChevronRight } from "react-icons/fa";
import englishContent from "../../public/i18n/locales/en/home.json";
import arabicContent from "../../public/i18n/locales/ar/home.json";
import { useTranslation } from "react-i18next";

const ShariaDescription = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
  },
  color: theme.palette.text.shariahText,
  fontWeight: theme.typography.fontWeights.semiBold,
  wordWrap: "break-word",
  whiteSpace: "normal",
}));

const ShariahCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  width: "680px",
  marginTop: "5%",
  marginBottom: "20%",
  borderRadius: "40px", // Border radius applied here (e.g., radius-4xl)
  padding: theme.spacing(0),
  paddingBottom: "0px !important" ,
  opacity: 1,
  [theme.breakpoints.down("sm")]: {
    width: "100%",

    margin: "20px auto",
    marginBottom: "10%",
    padding: theme.spacing(2),
    borderRadius: "20px", // Mobile border-radius
  },
}));

const BottomButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const MoreButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(0),
  marginBottom: theme.spacing(8),
  borderColor: theme.palette.text.paper,
  backgroundColor: "white",
  color: theme.palette.text.darkBlack,
  textTransform: "capitalize",
  fontSize: theme.typography.fontSize[16],
  padding: "10px 24px",
  "&:hover": {
    color: theme.palette.text.darkBlack,
    borderColor: theme.palette.text.paper,
    backgroundColor: "white",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    padding: "6px 12px",
    marginBottom: theme.spacing(8),
    marginTop: 0,
  },
}));

export default function HomeShariahCompliant() {
  const { t, i18n } = useTranslation("home");
  const textContent = i18n.language == "en" ? englishContent : arabicContent;
  const { title, discription, button } = t("shariah", { returnObjects: true });

  return (
    <Box
      sx={{
        padding: { xs: "0%" },
        marginY: { xs: "50px", sm: "50px", lg: "0px" },
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#1F396A",
        transition: "background-color 2s ease-in-out",
        borderRadius: "40px",
      }}
    >
      <Grid
        container
        alignItems="center"
        sx={{
          padding:"0px",
          justifyContent: "center",
          position: "relative",
          width: "100%",
          height: "auto",
          borderRadius: "40px",
          overflow: "hidden",
        }}
      >
        {/* WebM animation as background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            animation: "fadeIn 2s ease-in-out 2s forwards",
            borderRadius: "40px",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -1,
              borderRadius: "40px",
            }}
          >
            <source src={images.shariahWeb} type="video/webm" />
            <source src={images.shariahMobile} type="video/webm" />
          </video>
        </Box>

        <ShariahCardContent>
          <MainHeadingButtonWhite
            sx={{ border: "1px solid white !important", color: "white" }}
          >
            <PolygonIcon src={images.polygonWhite} alt="White Polygon Icon" />
            {title}
          </MainHeadingButtonWhite>
          <ShariaDescription
            sx={{
              fontSize: { xs: "16px", sm: "20px", lg: "44px" },
              color: "white",
              textAlign: "center",
              padding: "0 10px",
              zIndex: 2,
            }}
          >
            {discription}
          </ShariaDescription>

          <BottomButtonContainer>
            <MoreButton variant="contained">
              {button} <FaChevronRight fontSize="small" />
            </MoreButton>
          </BottomButtonContainer>
        </ShariahCardContent>
      </Grid>
    </Box>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
