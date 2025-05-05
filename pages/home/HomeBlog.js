import { MainHeadingButton } from "@/styles/Button/customButton";
import { PolygonIcon } from "@/styles/Image/customImage";
import images from "@/utils/images";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { IoEllipseSharp } from "react-icons/io5";
import englishContent from "../../public/i18n/locales/en/home.json";
import arabicContent from "../../public/i18n/locales/ar/home.json";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const MyThemeBox = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
}));
const MotionHeroContainer = motion(MyThemeBox);
const BlogDesc = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: theme.typography.fontSize[56],
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize[32],
  },
  lineHeight: theme.typography.lineHeights[64],
  [theme.breakpoints.down("sm")]: {
    lineHeight: theme.typography.lineHeights[38],
  },
  color: theme.palette.text.darkBlue,
  fontWeight: theme.typography.fontWeights.semiBold,
  wordWrap: "break-word",
  whiteSpace: "normal",
  maxWidth: "100%",
  margin: "0 auto",
}));

const BlogCard = styled(Card)(({ theme, borderColor }) => ({
  borderRadius: "16px",
  overflow: "hidden",
  marginTop: theme.spacing(5),
  border: "2px solid",
  borderColor: theme.palette.background[borderColor],
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(3),
  },
}));

const BlogCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "100%",
  height: 250,
  objectFit: "cover",
  [theme.breakpoints.down("sm")]: {
    height: 200,
  },
}));

const BlogHeading = styled(Typography)(({ theme, colorKey }) => ({
  color: theme.palette.text[colorKey],
  fontSize: theme.typography.fontSize[14],
  lineHeight: theme.typography.lineHeights[20],
  fontWeight: theme.typography.fontWeights.regular,
  textAlign: "left",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
  marginRight: "auto",
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const BlogDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.darkBlue,
  fontSize: theme.typography.fontSize[28],
  fontWeight: theme.typography.fontWeights.semiBold,
  lineHeight: theme.typography.lineHeights[32],
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[20],
    lineHeight: theme.typography.lineHeights[28],
  },
  textAlign: "left",
  width: "100%",
  height: "auto",
}));

export default function HomeBlog() {
  const { t, i18n } = useTranslation("home");

  const textContent = i18n.language == "en" ? englishContent : arabicContent;
  const {
    title,
    discription,
    blog1Heading,
    blog1Time,
    blog1Description,
    blog2Heading,
    blog2Time,
    blog2Description,
    blog3Heading,
    blog3Time,
    blog3Description,
  } = t("blog", { returnObjects: true });

  return (
    <MotionHeroContainer     whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 2 }}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: { xs: "70px", sm: "70px", lg: "0px" },
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
            {title}
          </MainHeadingButton>
          <BlogDesc>{discription}</BlogDesc>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}>
          <BlogCard borderColor="borrowerTestimonials">
            <BlogCardMedia
              component="img"
              image={images.blogWeb1}
              alt="Blog Web1 Image"
            />
            <CardContent style={{ height: "200px", overflow: "hidden" }}>
              <BlogHeading variant="h2" component="div" colorKey="blogCard1">
                {blog1Heading}
                <IoEllipseSharp
                  style={{
                    fontSize: "10px",
                  }}
                />
                <span
                  style={{
                    color: "#32302F",
                  }}
                >
                  {blog1Time}
                </span>
              </BlogHeading>
              <BlogDescription variant="body2">
                {blog1Description}
              </BlogDescription>
            </CardContent>
          </BlogCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}>
          <BlogCard borderColor="investorTestimonials">
            <BlogCardMedia
              component="img"
              image={images.blogWeb2}
              alt="Blog Web2 Image"
            />
            <CardContent style={{ height: "200px", overflow: "hidden" }}>
              <BlogHeading variant="h2" component="div" colorKey="blogCard2">
                {blog2Heading}
                <IoEllipseSharp
                  style={{
                    fontSize: "10px",
                  }}
                />
                <span
                  style={{
                    color: "#32302F",
                  }}
                >
                  {blog2Time}
                </span>
              </BlogHeading>
              <BlogDescription variant="body2">
                {blog2Description}
              </BlogDescription>
            </CardContent>
          </BlogCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}>
          <BlogCard borderColor="investorTestimonials">
            <BlogCardMedia
              component="img"
              image={images.blogWeb3}
              alt="Blog Web3 Image"
            />
            <CardContent style={{ height: "200px", overflow: "hidden" }}>
              <BlogHeading variant="h2" component="div" colorKey="blogCard2">
                {blog3Heading}
                <IoEllipseSharp
                  style={{
                    fontSize: "10px",
                  }}
                />
                <span
                  style={{
                    color: "#32302F",
                  }}
                >
                  {blog3Time}
                </span>
              </BlogHeading>
              <BlogDescription variant="body2">
                {blog3Description}
              </BlogDescription>
            </CardContent>
          </BlogCard>
        </Grid>
      </Grid>
    </MotionHeroContainer>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
