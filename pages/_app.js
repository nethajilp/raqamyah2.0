import React, { useMemo, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { DirectionProvider, useDirection } from "@/context/DirectionContext";
import createDynamicTheme from "@/themes/theme";
import "../styles/global.css";
import "../public/i18n/i18n";
import Layout from "@/components/Layout";
import { appWithTranslation } from "next-i18next";
import { I18nextProvider } from "react-i18next";
import i18next from "../public/i18n/i18n";
import SkeletonLoader from "@/components/Skeleton";

const createEmotionCache = (direction) =>
  createCache({
    key: direction === "rtl" ? "mui-rtl" : "mui",
    stylisPlugins: direction === "rtl" ? [prefixer, rtlPlugin] : [],
  });

function AppContent({ Component, pageProps }) {
  const { direction, loading } = useDirection();

  //  FIX: Set the dir attribute immediately to prevent CLS
  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  const cache = useMemo(() => createEmotionCache(direction), [direction]);
  const theme = useMemo(() => createDynamicTheme(direction), [direction]);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {loading ? (
          <SkeletonLoader />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeProvider>
    </CacheProvider>
  );
}

function MyApp(props) {
  return (
    <I18nextProvider i18n={i18next}>
      <DirectionProvider>
        <AppContent {...props} />
      </DirectionProvider>
    </I18nextProvider>
  );
}

export default appWithTranslation(MyApp);
