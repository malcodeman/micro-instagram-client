import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import lightTheme from "./styles/themes/light";
import darkTheme from "./styles/themes/dark";
import history from "./routing/history";
import Header from "../features/header/components/Header";
import Portfolios from "../features/portfolios/components/Portfolios";
import NavigationDrawer from "../features/ui/components/NavigationDrawer";

const App = () => {
  const darkMode = useSelector((state) => state.settings.darkMode);
  const styledTheme = darkMode ? darkTheme : lightTheme;
  const config = {
    initialColorMode: darkMode ? "dark" : "light",
    useSystemColorMode: false,
  };
  const theme = extendTheme({ config });

  return (
    <ThemeProvider theme={styledTheme}>
      <Router history={history}>
        <ChakraProvider theme={theme}>
          <Header />
          <NavigationDrawer />
          <Route exact path="/" component={Portfolios} />
        </ChakraProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
