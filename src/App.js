import "./styles/index.css";
// import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Topbar />
      <Sidebar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    </>
  );
}

// const Home = () => {
//   return (
//     <div>
//       <p>Test</p>
//     </div>
//   );
// };

export default App;

// import React from "react";
// import PropTypes from "prop-types";
// import "../styles/index.css";
// import Head from "next/head";
// import { ThemeProvider } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import theme from "../styles/theme";

// export default function MyApp(props) {
//   const { Component, pageProps } = props;

// React.useEffect(() => {
//   const jssStyles = document.querySelector("#jss-server-side");
//   if (jssStyles) {
//     jssStyles.parentElement.removeChild(jssStyles);
//   }
// }, []);

//   return (
//     <>
//       <Head>
//         <title>TaskMaster</title>
//         <meta
//           name="viewport"
//           content="minimum-scale=1, initial-scale=1, width=device-width"
//         />
//       </Head>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <Component {...pageProps} />
//       </ThemeProvider>
//     </>
//   );
// }

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };
