"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  IconButton,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Box,
    styled,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { FiGlobe, FiMenu } from "react-icons/fi";
import Logo from "./Logo";
import { useDirection } from "@/context/DirectionContext";
import NextLink from "next/link";
import { useRouter } from "next/router";
import englishContent from "../public/i18n/locales/en/header.json";
import arabicContent from "../public/i18n/locales/ar/header.json";


const A = styled('a', {
  shouldForwardProp: prop => prop !== 'isActive'
})(({ theme, isActive }) => ({
  textDecoration: 'none',
  color: '#101323',
  position: 'relative',
  borderBottom: isActive ? '2px solid #1E396C' : 'none',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 0,
    height: 2,
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.3s ease',
    textDecoration: 'none',
  },
  '&:hover::after': {
    width: isActive ? 0 : '100%',
    textDecoration: 'none',
  },
  '&:hover': {
    color: '#101323',
    textDecoration: 'none',
  }
}));


export default function Header({ isScrolled }) {
  const { i18n } = useTranslation();
  const { toggleDirection } = useDirection();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const textContent = i18n.language === "en" ? englishContent : arabicContent;
  const {
    investors,
    borrowers,
    aboutUs,
    contactUs,
    blogs,
    signUp,
    english,
    arabic,
  } = textContent;
  const currentLocale = i18n.language;
  const toggleLanguage = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";
    i18n.changeLanguage(newLocale);
    const { pathname, query, asPath } = router;
    router.push(
      {
        pathname,
        query,
      },
      `/${newLocale}${asPath}`,
      { locale: false }
    );
    toggleDirection();
  };

  const menuItems = [
    { label: investors, link: `/${currentLocale}/investors` },
    { label: borrowers, link: `/${currentLocale}/borrowers` },
    { label: blogs, link: `/${currentLocale}/blogs` },
    { label: aboutUs, link: `/${currentLocale}/aboutus` },
    { label: contactUs, link: `/${currentLocale}/contactus` },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        color="transparent"
        sx={{
          top: 0,
          py: isScrolled ? 0 : 2,
          px: 0,
          mx: 0,
          width: "100%",
          zIndex: (theme) => theme.zIndex.appBar,
          bgcolor: isScrolled ? "#ffffff" : "transparent",
          boxShadow: isScrolled ? "0px 4px 12px rgba(0, 0, 0, 0.04)" : "none",
          borderBottom: isScrolled ? "1px solid #f0f0f0" : "none",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Toolbar
          sx={{
            bgcolor: "primary.contrastText",
            borderRadius: 30,
            minHeight: 40,
            maxWidth: "1280px",
            width: "calc(100% - 46px)", //  subtract 23px left + right
            px: "32px",
            mx: "auto",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ flex: 1, justifyContent: "space-between" }}
          >
            <Logo />

            <Stack
              direction="row"
              alignItems="center"
              spacing={5}
              sx={{ display: { xs: "none", lg: "flex" } }}
            >
              {menuItems.map((item) => {
                const linkLastSegment = item.link.split("/").pop();
                const pathnameLastSegment = router.pathname.split("/").pop();
                const isActive = pathnameLastSegment === linkLastSegment;

                console.log(
                  pathnameLastSegment,
                  linkLastSegment,
                  isActive,
                  (theme) => theme.palette.primary.main
                );

                return (
                  <a key={item.label} href={item.link} passHref >
                  <Box
                    sx={{
                      textDecoration: "none",
                      color: "#101323",
                      position: "relative",
                      borderBottom: isActive ? "2px solid #1E396C" : "none",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "0%",
                        height: "2px",
                        backgroundColor: "primary.main",
                        transition: "width 0.3s ease",
                      },
                    
                    }}
                  >
                    {item.label}
                  </Box>
                </a>
                );
              })}
            </Stack>

            <Stack direction="row" sx={{ marginRight:"25px !important", display: { xs: "none", lg: "flex" } }}>
              <Button
                onClick={toggleLanguage}
                variant="text"
                sx={{  mx:1, gap: 1 }}
              >
                <FiGlobe size={20} />
                {currentLocale === "ar" ? english : arabic}
              </Button>
              <Button
                color="primary"
                variant="contained"
                href="https://app.raqamyah.com/signup"
              >
                {signUp}
              </Button>
            </Stack>

            <IconButton
              onClick={handleDrawerToggle}
              size="large"
              color="inherit"
              sx={{ display: { xs: "flex", lg: "none" } }}
            >
              <FiMenu size={24} />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={NextLink}
                href={item.link}
                onClick={handleDrawerToggle}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={toggleLanguage}>
              <FiGlobe size={20} style={{ marginRight: 10 }} />
              <ListItemText
                primary={currentLocale === "ar" ? english : arabic}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
