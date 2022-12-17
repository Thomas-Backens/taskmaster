// import React from "react";
// import theme from "../styles/theme";
// import { ThemeProvider } from "@material-ui/core/styles";
// import Topbar from "../components/Topbar";
// import Sidebar from "../components/Sidebar";

// export default function Home() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Topbar />
//       <Sidebar />
//     </ThemeProvider>
//   );
// }

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
