import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import Index from "./pages/index";
import Estoque from "./pages/estoque";
import Adicionar from "./pages/adicionar";
import Remover from "./pages/remover";
import Compras from "./pages/compras";

const Pages = () => {
  if (true) {
    return <Redirect to="/login" />;
  }

  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/estoque" component={Estoque} />
      <Route exact path="/adicionar" component={Adicionar} />
      <Route exact path="/retirar" component={Remover} />
      <Route exact path="/compras" component={Compras} />
    </Switch>
  );
};

export default Pages;
