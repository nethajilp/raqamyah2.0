import React from "react";
import { Skeleton, Box } from "@mui/material";

function FullScreenSkeleton() {
  return (
    <Box
      sx={{
        width: "100vw", // Full viewport width
        height: "100vh", // Full viewport height
        display: "flex",
        flexDirection: "column",
        gap: 2, // Space between skeleton elements
        padding: 4, // Padding around the skeleton card
        backgroundColor: "#f5f5f5", // Background color for the screen
      }}
    >
      {/* Image Skeleton */}
      <Skeleton variant="rectangular" width="100%" height="40%" />

      {/* Text Row */}
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
        <Skeleton variant="text" width="40%" height={30} />
        <Skeleton variant="text" width="30%" height={30} />
      </Box>

      {/* Multiple Text Rows */}
      <Skeleton variant="text" width="100%" height={30} />
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
        <Skeleton variant="text" width="40%" height={30} />
        <Skeleton variant="text" width="30%" height={30} />
      </Box>
      <Skeleton variant="rectangular" width="100%" height="40%" />
      <Skeleton variant="text" width="90%" height={30} />
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
        <Skeleton variant="text" width="40%" height={30} />
        <Skeleton variant="text" width="30%" height={30} />
      </Box>
      <Skeleton variant="text" width="80%" height={30} />
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
        <Skeleton variant="text" width="40%" height={30} />
        <Skeleton variant="text" width="30%" height={30} />
      </Box>

      {/* Button-Like Skeleton */}
      <Skeleton
        variant="rectangular"
        width="50%"
        height={50}
        sx={{ alignSelf: "center" }}
      />
    </Box>
  );
}

export default FullScreenSkeleton;
