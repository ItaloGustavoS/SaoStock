import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from "./pages/index";
import Estoque from "./pages/estoque";
import Adicionar from "./pages/adicionar";
import Remover from "./pages/remover";
import Compras from "./pages/compras";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";

const Pages = () => {
  // Falta implementar redirect para login
  // if (true) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/estoque" component={Estoque} />
      <Route exact path="/adicionar" component={Adicionar} />
      <Route exact path="/remover" component={Remover} />
      <Route exact path="/compras" component={Compras} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signUp" component={SignUp} />
    </Switch>
  );
};

export default Pages;
