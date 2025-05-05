import { PolygonIcon } from "@/styles/Image/customImage";
import images from "@/utils/images";
import { Box, Button, styled, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const MainHeadingButton = styled(Button)(({ theme }) => ({
  position: "relative",
  fontSize: theme.typography.fontSize[14],
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[16],
  height: "40px",
  padding: "5px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "uppercase",
  borderRadius: "30px",
  border: "none",
  background: "transparent",
  zIndex: 1,
  maxWidth: "100%",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",

  "& .text-content": {
    display: "block",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    backgroundImage: theme.palette.text.buttonGradient,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "30px",
    padding: "2px",
    background: theme.palette.background.borderGradient,
    WebkitMask:
      "linear-gradient(white, white) content-box, linear-gradient(white, white)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    zIndex: -1,
  },
}));

const BannerContainer = styled(Box)(({ theme }) => ({
  padding: "3%",
  background: theme.palette.background.gradient,
}));

const BannerHeading = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  width: "100%",
  fontWeight: theme.typography.fontWeights.semiBold,
  color: theme.palette.primary.main,
  fontSize: theme.typography.fontSize[72],
  lineHeight: theme.typography.lineHeights[72],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[36],
    lineHeight: theme.typography.lineHeights[38],
    textAlign: "center",
  },
}));

const BannerBody = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.subHeading,
  width: "100%",
  margin: "auto",
  textAlign: "left",
  fontSize: theme.typography.fontSize[18],
  fontWeight: theme.typography.fontWeights.medium,
  lineHeight: theme.typography.lineHeights[27],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[16],
    lineHeight: theme.typography.lineHeights[22.4],
    textAlign: "center",
  },
}));

const BannerImage = styled("img")({
  width: "100%",
  height: "100%",
});

const SectionButton = styled(Button)(({ theme }) => ({
  background: theme.palette.background.buttonGradient,
  color: theme.palette.primary.contrastText,
  borderRadius: "30px",
  width: "auto",
  height: "48px",
  padding: "0 20px",
  gap: "10px",
  textTransform: "uppercase",
  fontWeight: theme.typography.fontWeights.regular,
  fontSize: theme.typography.fontSize[16],
  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.fontSize[18],
    textAlign: "center",
  },
  maxWidth: "100%",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  display: "block",

  "&:hover": {
    background: theme.palette.background.buttonGradient,
  },
}));

export default function BorrowerBanner() {
  const theme = useTheme();
  const { t, i18n } = useTranslation("common");

  return (
    <BannerContainer>
      <Grid container>
        <Grid size={{ xs: 12, sm: 12, md: 7.5, lg: 6.5, xl: 4.8 }}>
          <MainHeadingButton>
            <PolygonIcon
              src={images.polygon}
              alt="Polygon Icon"
              style={{ marginRight: "8px" }}
            />
            <span className="text-content">{t("borrowers.headingButton")}</span>
          </MainHeadingButton>
          <BannerHeading variant="h1" sx={{ py: "2%" }}>
            {t("borrowers.headingTitle")}{" "}
            <Typography
              component="span"
              sx={{
                background: "linear-gradient( #2AA3D0, #2FA6A2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: (theme) => theme.typography.fontWeights.semiBold,
              }}
            >
              {t("borrowers.headingTitle1")}
            </Typography>{" "}
            {t("borrowers.headingTitle2")}
          </BannerHeading>
          <BannerBody variant="body1">
            {t("borrowers.headingDescription")}
          </BannerBody>
          <SectionButton variant="contained" sx={{ marginTop: "5%" }}>
            {t("borrowers.sectionButton")}
          </SectionButton>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4.5, lg: 5.5, xl: 7.2 }}>
          <BannerImage
            src={images.borrowersBanner}
            alt="Raqamyah crowdfunding platform borrowers banner"
          />
        </Grid>
      </Grid>
    </BannerContainer>
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
