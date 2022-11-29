import React from "react";
import theme from "../styles/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Topbar />
      <Sidebar />
    </ThemeProvider>
  );
}
