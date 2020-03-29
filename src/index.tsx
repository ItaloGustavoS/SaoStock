import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Index from "./pages/index";
import Estoque from "./pages/estoque";
import Adicionar from "./pages/adicionar";
import Remover from "./pages/remover";
import Compras from "./pages/compras";

import { NavBar } from "./components/navbar";

import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/estoque" component={Estoque} />
        <Route exact path="/adicionar" component={Adicionar} />
        <Route exact path="/retirar" component={Remover} />
        <Route exact path="/compras" component={Compras} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
