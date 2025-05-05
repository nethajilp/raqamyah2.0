import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import images from "@/utils/images";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import englishContent from "../../public/i18n/locales/en/borrowers.json";
import arabicContent from "../../public/i18n/locales/ar/borrowers.json";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid2";
import { redirect } from "next/dist/server/api-utils";

const SectionContainer = styled(Box)(({ theme }) => ({
  // display: "flex",
  // flexDirection: "row",
  // justifyContent: "space-between",
  alignItems: "center",
  // background: "#1D3B6C",

  borderRadius: "8px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    padding: "20px 5%",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "40px 5%",
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  maxWidth: "60%",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    textAlign: "left",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "46px",
  fontWeight: 700,
  color: "#FFFFFF",
  marginBottom: "16px",
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
  },
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: "#FFFFFF",
  padding: "6px 12px",
  border: "1px solid #FFFFFF",
  borderRadius: "16px",
  display: "inline-block",
  marginBottom: "16px",
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  background: "#294373",
  borderRadius: "12px",
  marginBottom: "16px",
  boxShadow: "none",
}));

const FeatureContent = styled(CardContent)({
  padding: "20px",
});

const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 700,
  color: "#FFFFFF",
  marginBottom: "8px",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 400,
  color: "#FFFFFF",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  maxWidth: "45%",
  display: "flex",
  justifyContent: "center",
  background: "#FFFFFF",
  padding: "24px",
  borderRadius: "16px",
  margin: "90px", // Added margin
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    marginTop: "32px",
    padding: "16px",
  },
}));

const VectorImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "40px",
    height: "40px",
  },

  objectFit: "contain",
  marginBottom: theme.spacing(2),
}));

const BankImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "40px",
    height: "40px",
  },
  objectFit: "contain",
  marginBottom: theme.spacing(2),
}));

const SparkleImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "40px",
    height: "40px",
  },
  objectFit: "contain",
  marginBottom: theme.spacing(2),
}));

const LogoCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "300px",
  width: "100%",
  textAlign: "left",
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    height: "250px",
  },
}));

const FlexContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

const LogoCardHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.darkBlue,
  fontSize: theme.typography.fontSize[20],
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize[28],
  },
  fontWeight: theme.typography.fontWeights.semiBold,
  textAlign: "left",
  marginBottom: theme.spacing(1),
}));

const LogoCardDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.subHeading,
  fontSize: theme.typography.fontSize[16],
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights[24],
  textAlign: "left",
}));

export default function StatisticsFeatures() {
  const { t, i18n } = useTranslation("statistics");
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const textContent = t("features", { returnObjects: true });

  return (
    <SectionContainer>
      <Grid
        container
        spacing={3}
        display={"flex"}
        alignItems={"stretch"}
        justifyContent={"center"}
        textAlign={"center"}
        sx={{
          marginTop: "30px",
        }}
      >
        {textContent.features.map((card, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 4 }}
            sx={{
              background: (theme) =>
                theme.palette.background[`aboutCard${index + 1}`],
              borderRadius: 2,
            }}
          >
            <CardActionArea>
              <LogoCardContent>
                <FlexContainer>
                  {index === 0 && (
                    <VectorImage
                      src={images.savingMoney}
                      alt={`${card.title} icon`}
                    />
                  )}
                  {index === 1 && (
                    <BankImage
                      src={images.saudiCentralBank}
                      alt={`${card.title} icon`}
                    />
                  )}
                  {index === 2 && (
                    <SparkleImage
                      src={images.shariaCompliant}
                      alt={`${card.title} icon`}
                    />
                  )}
                </FlexContainer>
                <Box>
                  <LogoCardHeading gutterBottom variant="h2" component="div">
                    {card.title}
                  </LogoCardHeading>
                  <LogoCardDescription variant="body2">
                    {card.description}
                  </LogoCardDescription>
                </Box>
              </LogoCardContent>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
      {/* <ImageContainer>
        <Image
          src={isMobile ? images.chooseImageMob : images.chooseImage}
          alt="App Screenshot"
          width={isMobile ? 300 : 400}
          height={isMobile ? 500 : 600}
        />
      </ImageContainer> */}
    </SectionContainer>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    redirect: {
      destination: "/statistics",
      permanent: false,
    },
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
