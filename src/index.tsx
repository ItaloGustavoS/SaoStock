import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Home from "./pages/home";
import Stock from "./pages/stock";
import AddItem from "./pages/add-item";
import RemoveItem from "./pages/remove-item";
import Compras from "./pages/compras";

import { NavBar } from "./components/navbar";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/estoque" component={Stock} />
      <Route exact path="/adicionar" component={AddItem} />
      <Route exact path="/retirar" component={RemoveItem} />
      <Route exact path="/compras" component={Compras} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
