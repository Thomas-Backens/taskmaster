import React from "react";
import theme from "../styles/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Topbar />
      <Sidebar />
      <Content />
    </ThemeProvider>
  );
}
