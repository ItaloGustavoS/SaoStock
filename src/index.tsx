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

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <NavBar />
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/estoque" component={Estoque} />
      <Route exact path="/adicionar" component={Adicionar} />
      <Route exact path="/retirar" component={Remover} />
      <Route exact path="/compras" component={Compras} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
