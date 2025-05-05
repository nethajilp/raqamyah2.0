import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import Script from "next/script";
import images from "@/utils/images";

export default function CustomMap() {
  const mapRef = useRef(null);

  const initMap = () => {
    if (!window.google || !mapRef.current) return;
    const location = { lat: 24.699296636520746, lng: 46.67917577510995 };

    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 14,
      center: location,
      disableDefaultUI: true,
    });

    new window.google.maps.Marker({
      position: location,
      map,
      icon: images.mapPoint, // Your custom marker image
    });
  };

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`}
        strategy="afterInteractive"
        onLoad={initMap}
      />
      <Box
        ref={mapRef}
        sx={{
          width: "100%",
          height: "600px",
          borderRadius: "12px",
          boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.08)",
        }}
      />
    </>
  );
}
