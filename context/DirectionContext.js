import React, { createContext, useContext, useEffect, useState } from "react";
import i18n from "i18next";

const DirectionContext = createContext();

export const DirectionProvider = ({ children }) => {
  const [direction, setDirection] = useState("ltr");
  const [isReady, setIsReady] = useState(false); // Prevents layout shift

  useEffect(() => {
    const initializeDirection = async () => {
      try {
        const savedDirection = localStorage.getItem("direction") || "ltr";
        setDirection(savedDirection);

        document.documentElement.setAttribute("dir", savedDirection);
        document.body.style.fontFamily =
          savedDirection === "rtl"
            ? "Tajawal, sans-serif"
            : "AmpleSoft, sans-serif";

        const newLanguage = savedDirection === "rtl" ? "ar" : "en";
        await i18n.changeLanguage(newLanguage);
      } catch (error) {
        console.error("Error initializing direction:", error.message);
      } finally {
        requestAnimationFrame(() => setIsReady(true)); // Prevents CLS
      }
    };

    initializeDirection();
  }, []);

  const toggleDirection = async () => {
    setIsReady(false);
    const newDirection = direction === "ltr" ? "rtl" : "ltr";
    setDirection(newDirection);
    localStorage.setItem("direction", newDirection);

    document.documentElement.setAttribute("dir", newDirection);
    document.body.style.fontFamily =
      newDirection === "rtl" ? "Tajawal, sans-serif" : "AmpleSoft, sans-serif";

    const newLanguage = newDirection === "rtl" ? "ar" : "en";
    await i18n.changeLanguage(newLanguage);

    requestAnimationFrame(() => setIsReady(true)); // Re-enable after rendering
  };

  return (
    <DirectionContext.Provider value={{ direction, toggleDirection }}>
      <div
        style={{
          visibility: isReady ? "visible" : "hidden",
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        {children}
      </div>
    </DirectionContext.Provider>
  );
};

export const useDirection = () => {
  const context = useContext(DirectionContext);
  if (!context) {
    throw new Error("useDirection must be used within a DirectionProvider");
  }
  return context;
};
