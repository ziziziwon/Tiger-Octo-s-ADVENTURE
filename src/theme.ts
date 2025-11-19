// src/theme.ts
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#2563eb" },
    background: { default: "#f6f7fb" },
  },
  typography: {
    fontFamily: ['"Noto Sans KR"','Inter','system-ui','Arial','sans-serif'].join(","),
  },
  shape: { borderRadius: 12 },
});

theme = responsiveFontSizes(theme);
export default theme; // ★ default export 꼭 있어야 함
