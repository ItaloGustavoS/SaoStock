import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";

import "typeface-roboto";

import { NavBar } from "./components/navbar";

import theme from "./theme";
import Pages from "./pages";

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Pages />
    </ThemeProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
