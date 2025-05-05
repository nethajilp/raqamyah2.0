import { createTheme } from "@mui/material/styles";

const createDynamicTheme = (direction = "ltr") => {
  const fontFamily = direction === "rtl" ? "Tajawal" : "AmpleSoft";

  return createTheme({
    direction,
    palette: {
      primary: {
        main: "#1E396C", // Dark Blue
        light: "#2284D4", // Light Blue
        contrastText: "#FFFFFF", // White text
        darkBlue: "#101323",
        dark: "#000",
        socialIconbackground: "#F1F5F9", // Dark Blue
      },
      secondary: {
        main: "#5ECA7C", // Green
        contrastText: "#FFFFFF", // White text
      },
      background: {
        vision: "linear-gradient(113.19deg, #F2FBF4 3.39%, #F0F7FE 96.51%)",
        default: "#F5F5F5", // Light Gray
        paper: "#FFFFFF",
        footerline: "#E6E5E533", // White
        gradient: "linear-gradient(113.19deg, #F0F7FE 3.39%, #F2FBF4 96.51%))",
        footerGradient:
          "linear-gradient(90deg, #2AA3D0 -0.71%, #2FA6A2 98.82%)", // Custom gradient
        buttonGradient: "linear-gradient(90deg, #2AA3D0 0%, #2DA69F 100%)",
        borderGradient: "linear-gradient(180deg, #64C988 0%, #73BBDB 100%)",
        aboutCard1: "#F0F7FE",
        aboutCard2: "#F2FBF4",
        aboutCard3: "#F8F9FC",
        investor: "linear-gradient(93.62deg, #2AA3D0 -3.05%, #2DA69F 106.46%)",
        borrower: " rgba(30, 57, 108, 1)",
        financeCard1: "#1E396C",
        financeCard2: "linear-gradient(to right, #2AA3D0 100%, #2DA69F 100%)",
        investorTestimonials: "#C1E4F6",
        borrowerTestimonials: "#C3EFCE",
        investorEllipse: "#37AA57",
        logoBackground: "#1F396A0D",
        fuelGrowthButton: "linear-gradient(to right, #28A4DB , #37AA57)",
        starRatting: "#FFC803",
        white: "white",
      },
      text: {
        mainHeading: "#2FA6A2",
        subHeading: "#32302F",
        paper: "#FFFFFF",
        buttonGradient: "linear-gradient(90deg, #28A4DB 30%, #37AA57 100%)",
        darkBlue: "#1F396A",
        darkBlack: "#1A1A1A",
        forText: "#0B042C",
        shariahText: "#F7F7F7",
        blogCard1: "#37AA57",
        blogCard2: "#28A4DB",
        gray: "#666666",
        legalSub: "#475569",
      },

      // Other palettes...
    },
    // typography: {
    //   fontFamily, // Dynamic font family
    //   h1: {
    //     fontFamily,
    //     fontSize: "92px",
    //     lineHeight: "100%",
    //     fontWeight: 700, // Bold
    //   },
    //   h2: {
    //     fontFamily,
    //     fontSize: "72px",
    //     lineHeight: "110%",
    //     fontWeight: 700, // Bold
    //   },
    //   h3: {
    //     fontFamily,
    //     fontSize: "56px",
    //     lineHeight: "120%",
    //     fontWeight: 600, // Semi-bold
    //   },
    //   h4: {
    //     fontFamily,
    //     fontSize: "40px",
    //     lineHeight: "120%",
    //     fontWeight: 600, // Semi-bold
    //   },
    //   h5: {
    //     fontFamily,
    //     fontSize: "32px",
    //     lineHeight: "140%",
    //     fontWeight: 600, // Semi-bold
    //   },
    //   h6: {
    //     fontFamily,
    //     fontSize: "28px",
    //     lineHeight: "32px",
    //     fontWeight: 400, // Medium
    //   },

    //   body1: {
    //     fontFamily,
    //     fontSize: "16px",
    //     lineHeight: "150%",
    //     fontWeight: 400,
    //   },
    //   body2: {
    //     fontFamily,
    //     fontSize: "14px",
    //     lineHeight: "150%",
    //     fontWeight: 400,
    //   },
    //   body3: {
    //     fontFamily,
    //     fontSize: "18px",
    //     lineHeight: "28px",
    //     fontWeight: 600,
    //   },
    //   button: {
    //     fontFamily,
    //     fontWeight: 700,
    //     defaultTextTransform: "uppercase",
    //     textTransform: "uppercase",
    //   },
    // },
    typography: {
      fontSize: {
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        9: "9px",
        10: "10px",
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        19: "19px",
        20: "20px",
        21: "21px",
        22: "22px",
        23: "23px",
        24: "24px",
        25: "25px",
        26: "26px",
        27: "27px",
        28: "28px",
        29: "29px",
        30: "30px",
        31: "31px",
        32: "32px",
        33: "33px",
        34: "34px",
        35: "35px",
        36: "36px",
        37: "37px",
        38: "38px",
        39: "39px",
        40: "40px",
        41: "41px",
        42: "42px",
        43: "43px",
        44: "44px",
        45: "45px",
        46: "46px",
        47: "47px",
        48: "48px",
        49: "49px",
        50: "50px",
        51: "51px",
        52: "52px",
        53: "53px",
        54: "54px",
        55: "55px",
        56: "56px",
        57: "57px",
        58: "58px",
        59: "59px",
        60: "60px",
        61: "61px",
        62: "62px",
        63: "63px",
        64: "64px",
        65: "65px",
        66: "66px",
        67: "67px",
        68: "68px",
        69: "69px",
        70: "70px",
        71: "71px",
        72: "72px",
        73: "73px",
        74: "74px",
        75: "75px",
        76: "76px",
        77: "77px",
        78: "78px",
        79: "79px",
        80: "80px",
      },
      fontWeights: {
        thin: 100, // Thin
        extraLight: 200, // Extra Light
        light: 300, // Light
        regular: 400, // Regular
        medium: 500, // Medium
        semiBold: 600, // Semi Bold
        bold: 700, // Bold
        extraBold: 800, // Extra Bold
        black: 900, // Black
      },
      lineHeights: {
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        9: "9px",
        10: "10px",
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        19: "19px",
        20: "20px",
        21: "21px",
        22: "22px",
        23: "23px",
        24: "24px",
        25: "25px",
        26: "26px",
        27: "27px",
        28: "28px",
        29: "29px",
        30: "30px",
        31: "31px",
        32: "32px",
        33: "33px",
        34: "34px",
        35: "35px",
        36: "36px",
        37: "37px",
        38: "38px",
        39: "39px",
        40: "40px",
        41: "41px",
        42: "42px",
        43: "43px",
        44: "44px",
        45: "45px",
        46: "46px",
        47: "47px",
        48: "48px",
        49: "49px",
        50: "50px",
        51: "51px",
        52: "52px",
        53: "53px",
        54: "54px",
        55: "55px",
        56: "56px",
        57: "57px",
        58: "58px",
        59: "59px",
        60: "60px",
        61: "61px",
        62: "62px",
        63: "63px",
        64: "64px",
        65: "65px",
        66: "66px",
        67: "67px",
        68: "68px",
        69: "69px",
        70: "70px",
        71: "71px",
        72: "72px",
        73: "73px",
        74: "74px",
        75: "75px",
        76: "76px",
        77: "77px",
        78: "78px",
        79: "79px",
        80: "80px",
        81: "81px",
        82: "82px",
        83: "83px",
        84: "84px",
        85: "85px",
        86: "86px",
        87: "87px",
        88: "88px",
        89: "89px",
        90: "90px",
        91: "91px",
        92: "92px",
        93: "93px",
        94: "94px",
        95: "95px",
        96: "96px",
        97: "97px",
        98: "98px",
        99: "99px",
        100: "100px",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily, // Set global fallback font
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            minHeight: "64px", // Remove the default height
            "@media (min-width: 350px)": {
              padding: "10px 10px",
              minHeight: "64px", // Ensure no height is applied for larger screens
            },
            padding: "10px 5px",
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: "none", // Remove underline
            color: "inherit", // Inherit text color or set a custom color
            "&:hover": {
              color: "#1976D2", // Optional hover effect (blue color on hover)
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily, // Apply dynamic font to all buttons
            borderRadius: 24,
            fontWeight: 500,
            padding: "6px 30px",
            transition: "all 0.3s ease-in-out",
            display: "flex",
            alignItems: "center", // Ensure vertical alignment
            justifyContent: "center", // Center text horizontally
            "&:hover": {
              backgroundColor: "#2284D4", // Light Blue on hover
            },
            textTransform: "none",
            fontSize: "0.9rem",
          },
          contained: {
            backgroundColor: "primary.main",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#005BB5", // Darker blue for hover
            },
          },
          outlined: {
            borderColor: "primary.main",
            color: "#1976D2",
            "&:hover": {
              borderColor: "#005BB5", // Darker blue for hover
              backgroundColor: "#E3F2FD", // Light blue for hover
            },
          },
          text: {
            color: "primary.darkBlue",
            "&:hover": {
              backgroundColor: "#E3F2FD", // Light blue for hover
              color: "primary", // Darker blue
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            fontFamily, // Apply font family to input fields
            borderRadius: 8,
            padding: "12px 16px",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily, // Default font for all typography
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          select: {
            fontFamily, // Apply font family to input fields
            borderRadius: 8,
            padding: "0px",
          },
        },
      },
      // -select-MuiInputBase-input-MuiOutlinedInput-input
    },
  });
};

export default createDynamicTheme;
