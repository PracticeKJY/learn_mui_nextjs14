"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    // fontFamily: "Pretendard, sans-serif",
  },
  palette: {
    neutral: {
      main: "#F7F8FA",
      25: "#F7F8FA",
      50: "#EFF1F4",
      100: "#E6E7EB",
      200: "#CED0D4",
      300: "#BABDC2",
      400: "#A4A6AB",
      500: "#919499",
      600: "#797B80",
      700: "#626469",
      800: "#4D4F54",
      900: "#373A40",
      1000: "#1F2229",
    },
    primary: {
      main: "#FFF3EB",
      25: "#FFF3EB",
      50: "#FEE7D8",
      100: "#E0E3E7",
      200: "#C7CCD1",
      300: "#AEB5BD",
      400: "#9BA4B2",
      500: "#8693A7",
      600: "#75839D",
      700: "#5E6E8A",
      800: "#4E5B77",
      900: "#3F4864",
      1000: "#333C4F",
    },
    secondary: {
      main: "#E8F9FF",
      25: "#E8F9FF",
      50: "#CDECF7",
      100: "#E0E3E7",
      200: "#C7CCD1",
      300: "#AEB5BD",
      400: "#9BA4B2",
      500: "#8693A7",
      600: "#75839D",
      700: "#5E6E8A",
      800: "#4E5B77",
      900: "#3F4864",
      1000: "#333C4F",
    },
    white: {
      main: "#FFFFFF",
    },
  },
});

export default theme;
