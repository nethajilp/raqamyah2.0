import { useTranslation } from "react-i18next";
import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { MainHeadingButton } from "@/styles/Button/customButton";
import { PolygonIcon } from "@/styles/Image/customImage";
import images from "@/utils/images";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  MainHeading,
  MainHeadingDescription,
} from "@/styles/Typography/customTypography";
// Styled components
const BannerHeading = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontWeight: theme.typography.fontWeights.semiBold,
  color: theme.palette.primary.main,
  fontSize: "48px !important",
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[21],
  },

  marginBottom: "1.5rem",
}));

const BannerBody = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.subHeading,
  width: "100%",
  marginTop: "2rem",
  textAlign: "left",
  fontSize: theme.typography.fontSize[18],
  fontWeight: theme.typography.fontWeights.medium,
  lineHeight: theme.typography.lineHeights[24],
}));

const BannerImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  maxWidth: "650px", // ✅ Make the image visibly bigger
  objectFit: "contain",
  borderRadius: "10px",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

export default function AboutWhoWeAre() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const { t } = useTranslation("aboutUs");
  const textContent = t("whoWeAre", { returnObjects: true });

  return (
    <Box
      sx={{
        padding: "5%",
        background: (theme) => theme.palette.background.gradient,
        paddingY: (theme) => (theme.breakpoints.down("sm") ? "15%" : "3%"),
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid container direction="column" alignItems="center">
          <MainHeadingButton>
            <PolygonIcon src={images.polygon} alt="Polygon Icon" />
            {textContent.heading}
          </MainHeadingButton>
          <MainHeading>{t("ourTeam.subHeading2")}</MainHeading>
          <MainHeadingDescription>
            {t("ourTeam.description2")}
          </MainHeadingDescription>
        </Grid>
      </Grid>

      {textContent.list.map((item, index) => (
        <Grid
          container
          spacing={5}
          key={index}
          alignItems="center"
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            width: "100%",
            marginTop: "5rem",
            "@media (max-width: 768px)": {
              gridTemplateColumns: "1fr",
              gap: "2rem",
            },
          }}
        >
          <Box
            sx={{
              order: isLargeScreen && index % 2 !== 0 ? 1 : 0,
              maxWidth: "550px",
            }}
          >
            <BannerHeading variant="h2">{item.heading}</BannerHeading>
            <BannerBody component="div">
              {item.description}
              {item.subpoints.map((points, i) => (
                <ul key={i} style={{ listStyle: "none", paddingLeft: 0 }}>
                  <li
                    style={{
                      position: "relative",
                      paddingLeft: "30px",
                      marginBottom: "10px",
                    }}
                  >
                    <img
                      src={images.tick}
                      alt="custom icon"
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "30%",
                        transform: "translateY(-50%)",
                        width: "16px",
                        height: "27.5px",
                      }}
                    />
                    {points.points}
                  </li>
                </ul>
              ))}
            </BannerBody>
          </Box>

          <Box>
            <BannerImage
              src={images[item.image]}
              alt={`${item.heading} Banner Image`}
            />
          </Box>
        </Grid>
      ))}
    </Box>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "aboutUs"])),
    },
  };
}
