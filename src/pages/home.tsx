import React from "react";

import logo from "../logo.svg";
import "../App.css";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Seja Bem-Vindo ao prototipo do que algum dia sera o estoque do São
          Chico.
        </p>
        <Link to="estoque">
          <Button variant="contained" color="primary">
            Estoque
          </Button>
        </Link>

        <Link to="adicionar">
          <Button variant="contained" color="primary">
            Adicionar
          </Button>
        </Link>

        <Link to="remover">
          <Button variant="contained" color="primary">
            Retirar
          </Button>
        </Link>
      </header>
    </div>
  );
};

export default Home;
