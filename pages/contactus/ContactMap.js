import React from "react";
import { Box, Container, styled } from "@mui/material";
import images from "@/utils/images";

// Map container styling
const MapWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%", // Ensure full width
  height: "600px", // Default height for larger screens
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.08)",
  [theme.breakpoints.down("sm")]: {
    height: "50vh", // Adjust the height for mobile
  },
}));

export default function ContactMap() {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%", // Ensure full width of the container
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingX: { xs: 0, sm: "32px" }, // Remove padding for mobile and keep it for larger screens
          width: "100%", // Ensure container takes full width
        }}
      >
        <MapWrapper>
          <Box
            sx={{
              position: "relative",
              width: "100%", // Ensure iframe takes full width
              height: "100%", // Ensure iframe takes full height of the container
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* The Google Maps iFrame */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7249.60607466854!2d46.67917577510995!3d24.699296636520746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0307a017baa1%3A0x26f68668a4723350!2zUmFxYW15YWggQ3Jvd2RmdW5kaW5nICjYtNix2YPYqSDYsdmC2YXZitipINmE2YTYqtmF2YjZitmEINin2YTYrNmF2KfYudmKKQ!5e0!3m2!1sen!2ssa!4v1655709285844!5m2!1sen!2ssa"
              style={{
                width: "100%", // Ensure iframe takes up full width
                height: "100%", // Ensure iframe takes full height of the container
                border: "none",
                filter: "grayscale(5%) contrast(1.1) brightness(1.05)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Custom Marker Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                src={images.mapPoint}
                alt="Map Marker"
                width="100%"
                style={{ display: "block" }}
              />
            </Box>
          </Box>
        </MapWrapper>
      </Container>
    </Box>
  );
}
