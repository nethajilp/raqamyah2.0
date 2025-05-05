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
import { SectionButton } from "@/styles/Button/customButton";
import Link from "next/link";

const MyThemeBox = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: "3%",
}));

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
  borderRadius: "12px",
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

export default function BlogGrid() {
  const { t, i18n } = useTranslation("blog");

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
    blog4Heading,
    blog4Time,
    blog4Description,
    blog5Heading,
    blog5Time,
    blog5Description,
    blog6Heading,
    blog6Time,
    blog6Description,
    button,
  } = t("blog", { returnObjects: true });

  return (
    <MyThemeBox>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: { xs: "70px", sm: "70px", lg: "40px" },
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
              image={images.blogOne}
              alt="Blog One Image"
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
              image={images.blogTwo}
              alt="Blog Two Image"
            />
            <CardContent style={{ height: "200px", overflow: "hidden" }}>
              <BlogHeading variant="h2" component="div" colorKey="blogCard1">
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
          <BlogCard borderColor="borrowerTestimonials">
            <BlogCardMedia
              component="img"
              image={images.blogThree}
              alt="Blog Three Image"
            />
            <CardContent style={{ height: "200px", overflow: "hidden" }}>
              <BlogHeading variant="h2" component="div" colorKey="blogCard1">
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

        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}>
          <BlogCard borderColor="investorTestimonials">
            <BlogCardMedia
              component="img"
              image={images.blogFour}
              alt="Blog Four Image"
            />
            <CardContent style={{ height: "200px", overflow: "hidden" }}>
              <BlogHeading variant="h2" component="div" colorKey="blogCard1">
                {blog4Heading}
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
                  {blog4Time}
                </span>
              </BlogHeading>
              <BlogDescription variant="body2">
                {blog4Description}
              </BlogDescription>
            </CardContent>
          </BlogCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}>
          <BlogCard borderColor="borrowerTestimonials">
            <BlogCardMedia
              component="img"
              image={images.blogFive}
              alt="Blog Five Image"
            />
            <CardContent style={{ height: "200px", overflow: "hidden" }}>
              <BlogHeading variant="h2" component="div" colorKey="blogCard1">
                {blog5Heading}
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
                  {blog5Time}
                </span>
              </BlogHeading>
              <BlogDescription variant="body2">
                {blog5Description}
              </BlogDescription>
            </CardContent>
          </BlogCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}>
          <BlogCard borderColor="investorTestimonials">
            <BlogCardMedia
              component="img"
              image={images.blogSix}
              alt="Blog Six Image"
            />
            <CardContent style={{ height: "200px", overflow: "hidden" }}>
              <BlogHeading variant="h2" component="div" colorKey="blogCard1">
                {blog6Heading}
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
                  {blog6Time}
                </span>
              </BlogHeading>
              <BlogDescription variant="body2">
                {blog6Description}
              </BlogDescription>
            </CardContent>
          </BlogCard>
        </Grid>
      </Grid>
      <Grid sx={{ paddingY: { xs: "10%", sm: "10%", lg: "5%" } }}>
        <Grid
          container
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Link href="/blogDetails" passHref legacyBehavior>
            <a style={{ textDecoration: "none" }}>
              <SectionButton variant="contained">{button}</SectionButton>
            </a>
          </Link>
        </Grid>
      </Grid>
    </MyThemeBox>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
