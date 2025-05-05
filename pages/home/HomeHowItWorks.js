import { MainHeadingButton } from "@/styles/Button/customButton";
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
import englishContent from "../../public/i18n/locales/en/home.json";
import arabicContent from "../../public/i18n/locales/ar/home.json";
import { useTranslation } from "react-i18next";

const WorkDescription = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[56],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[24],
  },
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.lineHeights[56],
    lineHeight: "61.6px",
  },
  fontWeight: theme.typography.fontWeights.semiBold,
  color: theme.palette.text.darkBlue,
  textAlign: "center",
  wordWrap: "break-word",
  whiteSpace: "normal",
  maxWidth: "75%",
  margin: "0 auto",
}));

const WorkCard = styled(Card)(({ theme }) => ({
  width: '100%',
  height: '100%', 
  borderRadius: theme.spacing(5),
  boxShadow: theme.shadows[1],
  padding: theme.spacing(1.5),
  //   "&:hover": {
  //     boxShadow: theme.shadows[6],
  //   },
  //   marginTop: theme.spacing(3),
  //   marginBottom: theme.spacing(3),
}));

const WorksCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(5),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "408px", // Fix height for all cards
  boxSizing: "border-box", // Ensure padding is included in height
}));

const WorkCardHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.darkBlue,
  fontSize: theme.typography.fontSize[28],
  fontWeight: theme.typography.fontWeights.semiBold,
  textAlign: "center",
  marginBottom: theme.spacing(2),
  width: "100%",
  height: "auto",
}));

const WorkCardDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.subHeading,
  fontSize: theme.typography.fontSize[16],
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[24],
  textAlign: "center",
  width: "80%",
  height: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const CardImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
}));

export default function HomeHowItWorks() {
  const { t, i18n } = useTranslation("home");

  const textContent = i18n.language == "en" ? englishContent : arabicContent;
  const {
    heading,
    description,
    businessapplies,
    approvedbusiness,
    investorfund,
    investorreceive,
  } = t("howitworks", { returnObjects: true });

  return (
    <Box
      sx={{
        padding: "3%",
        background: (theme) => theme.palette.background.paper,
        border: "1px solid var(--Cerulean-200, #C1E4F6)",
        borderRadius: "10px",
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
            <PolygonIcon src={images.polygon} alt="Polygon Icon" />
            {heading}
          </MainHeadingButton>
          <WorkDescription>{description}</WorkDescription>
        </Grid>
      </Grid>

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
          marginTop="30px"
          marginBottom="20px"
          position="relative"
        >
          <video
            id="videoElement"
            src="https://d1rfd0ppcouvna.cloudfront.net/public/assetsNew/images/Video/website_gif_edited.mp4"
            poster={images.videoThumbnail}
            alt="How It Works Video"
            controls
            style={{ width: "100%", borderRadius: "10px" }}
            onPlay={() => {
              document.getElementById("playIcon").style.display = "none";
            }}
            onPause={() => {
              document.getElementById("playIcon").style.display = "flex";
            }}
          />
          <div
            id="playIcon"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              const videoElement = document.getElementById("videoElement");
              if (videoElement.paused) {
                videoElement.play();
              } else {
                videoElement.pause();
              }
            }}
          >
            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.2" cx="48" cy="48" r="48" fill="white" />
              <circle cx="48" cy="48" r="40" fill="white" />
              <path
                d="M60.0547 43.4254C63.5811 45.4558 63.5811 50.5442 60.0547 52.5746L42.9125 62.4443C39.3934 64.4705 35 61.9304 35 57.8697L35 38.1303C35 34.0696 39.3934 31.5295 42.9125 33.5557L60.0547 43.4254Z"
                fill="url(#paint0_linear_6966_63150)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_6966_63150"
                  x1="62.1944"
                  y1="32.6089"
                  x2="58.873"
                  y2="67.8362"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2AA3D0" />
                  <stop offset="1" stop-color="#2DA69F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={0}
        mt={2}
        alignItems="center"
        sx={{
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "center",
            xl: "center",
          },
        }}
      >
        <Grid
          size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }}
          sx={{
            display: "flex",
            height: "100%", // Ensure the grid item stretches to match content
          }}
        >
          <WorkCard
            sx={{
              background: (theme) => theme.palette.background.paper,
              width: "100%", // Keep the card full width
              position: "relative", // Important for the pseudo-element
              border:"1px solid #DCDCDC",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)", // center it horizontally
                width: "171px",
                height: "2px",
                borderTop: "2px solid",
                borderImageSource:
                  "linear-gradient(90deg, rgba(55, 170, 87, 0) 0.23%, #37AA57 104.46%)",
                borderImageSlice: 1,
              },
            }}
          >
            <CardActionArea>
              <WorksCardContent>
                <WorkCardHeading gutterBottom variant="h2" component="div">
                  {businessapplies.title}
                </WorkCardHeading>
                <WorkCardDescription
                  variant="body2"
                  sx={{
                    wordWrap: "break-word", // Allows long words to wrap
                    whiteSpace: "normal", // Text flows normally (multi-line)
                    overflow: "visible", // Removes hidden overflow
                    textOverflow: "unset", // No ellipsis (...), full content shown
                  }}
                >
                  {businessapplies.description}
                </WorkCardDescription>
                <CardImage
                  src={images.howItWorksCard1}
                  alt="Business Applies Illustration"
                />
              </WorksCardContent>
            </CardActionArea>
          </WorkCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }}>
          <WorkCard
            sx={{
              background: (theme) => theme.palette.background.paper,
              border:"1px solid #DCDCDC",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "15%",
                left: 0,
                width: "2px",
                height: "50%",
                background:
                  "linear-gradient(180deg, rgba(55, 170, 87, 0) 0.23%, #37AA57 104.46%)",
              },
            }}
          >
            <CardActionArea

            >
              <WorksCardContent>
                <CardImage
                  src={images.howItWorksCard2}
                  alt="Approved Business Illustration"
                />
                <WorkCardHeading gutterBottom variant="h2" component="div">
                  {approvedbusiness.title}
                </WorkCardHeading>
                <WorkCardDescription
                  variant="body2"
                  sx={{
                    wordWrap: "break-word", // Allows long words to wrap
                    whiteSpace: "normal", // Text flows normally (multi-line)
                    overflow: "visible", // Removes hidden overflow
                    textOverflow: "unset", // No ellipsis (...), full content shown
                  }}
                >
                  {approvedbusiness.description}
                </WorkCardDescription>
              </WorksCardContent>
            </CardActionArea>
          </WorkCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }}>
          <WorkCard
            sx={{
              background: (theme) => theme.palette.background.paper,
              position: "relative",
              border:"1px solid #DCDCDC",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 100,
                left: 0,
                width: "2px",
                height: "50%",
                background:
                  "linear-gradient(360deg, rgba(55, 170, 87, 0) 0.23%, #37AA57 104.46%)",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                left: "25%",
                top: 0,
                width: "171px",
                height: "2px",
                background:
                  "linear-gradient(90deg, rgba(55, 170, 87, 0) 0.23%, #37AA57 104.46%)", // horizontal
              },
            }}
          >
            <CardActionArea
             
            >
              <WorksCardContent>
                <WorkCardHeading gutterBottom variant="h2" component="div">
                  {investorfund?.title}
                </WorkCardHeading>
                <WorkCardDescription
                  variant="body2"
                  sx={{
                    wordWrap: "break-word", // Allows long words to wrap
                    whiteSpace: "normal", // Text flows normally (multi-line)
                    overflow: "visible", // Removes hidden overflow
                    textOverflow: "unset", // No ellipsis (...), full content shown
                  }}
                >
                  {investorfund?.description}
                </WorkCardDescription>
                <CardImage
                  src={images.howItWorksCard3}
                  alt="Investor Fund Illustration"
                />
              </WorksCardContent>
            </CardActionArea>
          </WorkCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }}>
          <WorkCard
            sx={{
              background: (theme) => theme.palette.background.paper,
              position: "relative",
                  border:"1px solid #DCDCDC",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "15%",
                left: 0,
                width: "2px",
                height: "50%",
                background:
                  "linear-gradient(180deg, rgba(55, 170, 87, 0) 0.23%, #37AA57 104.46%)",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                left: "25%",
                bottom: 0,
                width: "171px",
                height: "2px",
                background:
                  "linear-gradient(90deg, rgba(55, 170, 87, 0) 0.23%, #37AA57 104.46%)", // horizontal
              },
            }}
          >
            <CardActionArea
             
            >
              <WorksCardContent>
                <CardImage
                  src={images.howItWorksCard4}
                  alt="Investor Receive Illustration"
                />
                <WorkCardHeading gutterBottom variant="h2" component="div">
                  {investorreceive.title}
                </WorkCardHeading>
                <WorkCardDescription
                  variant="body2"
                  sx={{
                    wordWrap: "break-word", // Allows long words to wrap
                    whiteSpace: "normal", // Text flows normally (multi-line)
                    overflow: "visible", // Removes hidden overflow
                    textOverflow: "unset", // No ellipsis (...), full content shown
                  }}
                >
                  {investorreceive.description}
                </WorkCardDescription>
              </WorksCardContent>
            </CardActionArea>
          </WorkCard>
        </Grid>
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
