import { MainHeadingButton } from "@/styles/Button/customButton";
import { PolygonIcon } from "@/styles/Image/customImage";
import { MainHeading } from "@/styles/Typography/customTypography";
import images from "@/utils/images";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

export default function BorrowerFaq() {
  const { t } = useTranslation("borrowers");
  const data = t("faq.data", { returnObjects: true });
  const [expanded, setExpanded] = useState(null);

  const handleAccordionChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const accordionStyles = {
    base: {
      padding: { xs: "12px 16px", sm: "18px 24px 18px 36px" },
      margin: "10px 0",
      borderRadius: "2px",
      width: "100%",
      background: (theme) => theme.palette.background.aboutCard3,
      border: "1px solid transparent",
    },
    expanded: {
      "&.Mui-expanded": {
        borderWidth: "1px 1px 3px 1px",
        borderColor: (theme) => theme.palette.text.blogCard2,
        padding: { xs: "12px 16px 16px", sm: "20px 24px 28px 36px" },
      },
    },
  };

  return (
    <Box
      sx={{
        padding: "3%",
        background: (theme) => theme.palette.background.gradient,
        marginTop: "5%",
        paddingTop: "10%",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item container direction="column" alignItems="center" spacing={2}>
          <MainHeadingButton>
            <PolygonIcon src={images.polygon} alt="FAQ Polygon Icon" />
            {t("faq.headingButton")}
          </MainHeadingButton>
          <MainHeading
            sx={{
              marginBottom: "3%",
              maxWidth: { xs: "100%", sm: "60%", lg: "55%" },
            }}
          >
            {t("faq.headingTitle")}
          </MainHeading>
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item sx={{ maxWidth: { xs: "100%", sm: "100%", md: "70%" } }}>
          {data.map((card, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleAccordionChange(index)}
              sx={{
                ...accordionStyles.base,
                ...accordionStyles.expanded,
              }}
            >
              <AccordionSummary
                expandIcon={
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#FFF",
                      color: "#182230",
                      fontSize: "18px",
                    }}
                  >
                    {expanded === index ? <IoMdRemove /> : <IoMdAdd />}
                  </Box>
                }
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  fontSize: { xs: "16px", sm: "20px" },
                  lineHeight: { xs: "22px", sm: "28px" },
                  color: (theme) => theme.palette.primary.main,
                }}
              >
                <Typography component="span" sx={{ fontWeight: "bold" }}>
                  {card.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  lineHeight: { xs: "24px", sm: "27px" },
                  color: (theme) => theme.palette.text.subHeading,
                }}
              >
                <Typography>{card.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["borrowers"])),
    },
  };
}
