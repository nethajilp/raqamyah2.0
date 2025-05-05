import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  styled,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import images from "@/utils/images";
import { IoEllipseSharp } from "react-icons/io5";
import Link from "next/link";

// Main Container
const MyThemeBox = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: "3%",
}));

const SectionHeadingWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "32px",
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[56],
  fontWeight: theme.typography.fontWeights.semiBold,
  color: theme.palette.primary.main,
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize[32],
    textAlign: "center",
  },
}));

const ViewMoreButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(90deg, #2AA3D0 0%, #2FA6A2 100%)",
  color: "#ffffff",
  fontWeight: theme.typography.fontWeights.medium,
  fontSize: theme.typography.fontSize[18],
  padding: "8px 24px",
  borderRadius: "50px",
  textTransform: "uppercase",
  "&:hover": {
    background: "linear-gradient(90deg, #2AA3D0 0%, #2FA6A2 100%)",
  },
}));

const BlogCard = styled(Card)(({ bordercolor }) => ({
  borderRadius: "12px",
  overflow: "hidden",
  border: `2px solid ${bordercolor}`,
}));

const BlogCardMedia = styled(CardMedia)({
  width: "100%",
  height: "250px",
  objectFit: "cover",
});

const BlogHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize[14],
  lineHeight: theme.typography.lineHeights[20],
  fontWeight: theme.typography.fontWeights.regular,
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
}));

const BlogDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.darkBlue,
  fontSize: theme.typography.fontSize[24],
  fontWeight: theme.typography.fontWeights.semiBold,
  lineHeight: theme.typography.lineHeights[32],
}));

export default function BlogRelated() {
  const { t } = useTranslation("blogDetail");

  return (
    <MyThemeBox>
      {/* Heading + View More - Only Desktop */}
      <SectionHeadingWrapper>
        <SectionHeading>{t("related.heading")}</SectionHeading>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Link href="/blog" passHref legacyBehavior>
            <a style={{ textDecoration: "none" }}>
              <ViewMoreButton>{t("related.button")}</ViewMoreButton>
            </a>
          </Link>
        </Box>
      </SectionHeadingWrapper>

      {/* Blog Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
          gap: 3,
        }}
      >
        {/* Card 1 */}
        <Link href="/blogDetails" passHref legacyBehavior>
          <a style={{ textDecoration: "none" }}>
            <BlogCard bordercolor="#C3EFCE">
              <BlogCardMedia
                component="img"
                image={images.BlogReOne}
                alt="Related Blog 1"
              />
              <CardContent sx={{ height: "180px", overflow: "hidden" }}>
                <BlogHeading>
                  <Typography
                    component="span"
                    sx={{ color: "#37AA57", fontSize: "14px", fontWeight: 500 }}
                  >
                    {t("related.card1Heading")}
                  </Typography>
                  <IoEllipseSharp
                    style={{ color: "#37AA57", fontSize: "8px" }}
                  />
                  <Typography
                    component="span"
                    sx={{ color: "#32302F", fontSize: "14px", fontWeight: 500 }}
                  >
                    {t("related.card1Time")}
                  </Typography>
                </BlogHeading>
                <BlogDescription>
                  {t("related.card1Description")}
                </BlogDescription>
              </CardContent>
            </BlogCard>
          </a>
        </Link>

        {/* Card 2 */}
        <Link href="/blogDetails" passHref legacyBehavior>
          <a style={{ textDecoration: "none" }}>
            <BlogCard bordercolor="#C3E0FA">
              <BlogCardMedia
                component="img"
                image={images.BlogReTwo}
                alt="Related Blog 2"
              />
              <CardContent sx={{ height: "180px", overflow: "hidden" }}>
                <BlogHeading>
                  <Typography
                    component="span"
                    sx={{ color: "#37AA57", fontSize: "14px", fontWeight: 500 }}
                  >
                    {t("related.card2Heading")}
                  </Typography>
                  <IoEllipseSharp
                    style={{ color: "#37AA57", fontSize: "8px" }}
                  />
                  <Typography
                    component="span"
                    sx={{ color: "#32302F", fontSize: "14px", fontWeight: 500 }}
                  >
                    {t("related.card2Time")}
                  </Typography>
                </BlogHeading>
                <BlogDescription>
                  {t("related.card2Description")}
                </BlogDescription>
              </CardContent>
            </BlogCard>
          </a>
        </Link>

        {/* Card 3 */}
        <Link href="/blogDetails" passHref legacyBehavior>
          <a style={{ textDecoration: "none" }}>
            <BlogCard bordercolor="#C3EFCE">
              <BlogCardMedia
                component="img"
                image={images.BlogReThree}
                alt="Related Blog 3"
              />
              <CardContent sx={{ height: "180px", overflow: "hidden" }}>
                <BlogHeading>
                  <Typography
                    component="span"
                    sx={{ color: "#37AA57", fontSize: "14px", fontWeight: 500 }}
                  >
                    {t("related.card3Heading")}
                  </Typography>
                  <IoEllipseSharp
                    style={{ color: "#37AA57", fontSize: "8px" }}
                  />
                  <Typography
                    component="span"
                    sx={{ color: "#32302F", fontSize: "14px", fontWeight: 500 }}
                  >
                    {t("related.card3Time")}
                  </Typography>
                </BlogHeading>
                <BlogDescription>
                  {t("related.card3Description")}
                </BlogDescription>
              </CardContent>
            </BlogCard>
          </a>
        </Link>
      </Box>

      {/* View More Button - Only Mobile */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          justifyContent: "center",
          marginTop: 4,
        }}
      >
        <Link href="/blog" passHref legacyBehavior>
          <a style={{ textDecoration: "none" }}>
            <ViewMoreButton>{t("related.button")}</ViewMoreButton>
          </a>
        </Link>
      </Box>
    </MyThemeBox>
  );
}
