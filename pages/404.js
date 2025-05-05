import React from "react";
import { Button, Typography, Container, Box, Grid2 } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Custom404 = () => {
  const { t } = useTranslation("404");

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
        textAlign: "center",
        padding: 3,
        overflowY: "auto",
      }}
    >
      <Grid2
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            backgroundColor: "#ffffff",
            padding: "40px 60px",
            borderRadius: "8px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "500px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "5rem",
              fontWeight: "600",
              color: "#2e3a59",
              marginBottom: 2,
            }}
          >
            404
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: "1.25rem",
              fontWeight: "400",
              color: "#4f5b73",
              marginBottom: 3,
            }}
          >
            {t("404_message")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              color: "#6e7a89",
              marginBottom: 3,
            }}
          >
            {t("404_description")}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 3,
              width: "100%",
            }}
          >
            <Link href="/" passHref>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  padding: "12px 32px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  textTransform: "none",
                  borderRadius: "30px",
                  boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    backgroundColor: "#3c62a2",
                  },
                  width: "100%",
                  maxWidth: "300px",
                }}
              >
                {t("go_back_home")}
              </Button>
            </Link>
          </Box>
        </Box>
      </Grid2>
    </Container>
  );
};

export default Custom404;
