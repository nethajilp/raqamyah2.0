// import i18next from "i18next";
// import HttpBackend from "i18next-http-backend";
// import { initReactI18next } from "react-i18next";

// const path = require("path");

// i18next
//   .use(HttpBackend) // Load translations via HTTP
//   .use(initReactI18next) // Bind i18next to React
//   .init({
//     lng: "en", // Default language
//     fallbackLng: "en", // Fallback language if key is missing
//     ns: ["common"], // Namespaces to load
//     defaultNS: "common", // Default namespace
//     backend: {
//       // Replace the path below with the remote server URL
//        loadPath: "https://nimblefingers.in/locales/{{lng}}/common.json",
//     },
//     debug: false, // Set to true for debugging
//     interpolation: {
//       escapeValue: false, // React already escapes values
//     },
//   });

// export default i18next;

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/common.json";
import ar from "./locales/ar/common.json";
import homeEn from "./locales/en/home.json";
import homeAr from "./locales/ar/home.json";
import investorsEn from "./locales/en/investors.json";
import investorsAr from "./locales/ar/investors.json";
import borrowersEn from "./locales/en/borrowers.json";
import borrowersAr from "./locales/ar/borrowers.json";
import aboutUsEn from "./locales/en/aboutUs.json";
import aboutUsAr from "./locales/ar/aboutUs.json";
import LegalComplianceEn from "./locales/en/legal.json";
import LegalComplianceAr from "./locales/ar/legal.json";
import blogDetailEn from "./locales/en/blogDetail.json";
import blogDetailAr from "./locales/ar/blogDetail.json";

import headerEn from "./locales/en/header.json";
import headerAr from "./locales/ar/header.json";

import blogEn from "./locales/en/blog.json";
import blogAr from "./locales/ar/blog.json";
import contactUsEn from "./locales/en/contactUs.json";
import contactUsAr from "./locales/ar/contactUs.json";
import notFoundEn from "./locales/en/404.json"; // Add 404 for English
import notFoundAr from "./locales/ar/404.json";
import statisticsEn from "./locales/en/statistics.json";
import statisticsAr from "./locales/ar/statistics.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(LanguageDetector)
  .use(initReactI18next) // Bind i18next to React
  .init({
    lng: ["ar"], // Default language
    fallbackLng: ["en", "ar"], // Fallback language
    resources: {
      en: {
        common: en, // English translations under the 'common' namespace
        home: homeEn,
        investors: investorsEn,
        borrowers: borrowersEn,
        aboutUs: aboutUsEn,
        legal: LegalComplianceEn,
        header: headerEn,
        blog: blogEn,
        contactUs: contactUsEn,
        404: notFoundEn,
        statistics: statisticsEn,
        blogDetail: blogDetailEn,
      },
      ar: {
        common: ar, // Arabic translations under the 'common' namespace
        home: homeAr,
        investors: investorsAr,
        borrowers: borrowersAr,
        aboutUs: aboutUsAr,
        legal: LegalComplianceAr,
        header: headerAr,
        blog: blogAr,
        contactUs: contactUsAr,
        404: notFoundAr,
        statistics: statisticsAr,
        blogDetail: blogDetailAr,
      },
    },
    ns: [
      "common",
      "home",
      "investors",
      "borrowers",
      "aboutUs",
      "legal",
      "header",
      "blog",
      "contactUs",
      "404",
      "statistics",
      "blogDetail",
    ], // Namespaces to load
    defaultNS: "common", // Default namespace
    debug: false, // Enable debug mode for development
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18next;
