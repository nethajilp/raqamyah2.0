import { Box } from "@mui/material";
import images from "@/utils/images";

export default function HeaderDecorations() {
  return (
    <>
      <Box
        component="img"
        src={images.elementLeft}
        alt="Top Left Decoration"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: { sm: "70px", md: "80px" },
          height: "auto",
          zIndex: 0,
          display: { xs: "none", sm: "block" },
          pointerEvents: "none",
        }}
      />

      <Box
        component="img"
        src={images.elementRight}
        alt="Top Right Decoration"
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          width: { sm: "70px", md: "80px" },
          height: "auto",
          zIndex: 0,
          display: { xs: "none", sm: "block" },
          pointerEvents: "none",
        }}
      />
    </>
  );
}
