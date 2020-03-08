import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { NavBar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Seja Bem-Vindo ao prototipo do que algum dia sera o estoque do São Chico.
        </p>
        <Button variant="contained" color="primary">
        Estoque
        </Button>
        <Button variant="contained" color="primary">
        Adicionar
        </Button>
        <Button variant="contained" color="primary">
        Retirar
        </Button>
      </header>
    </div>
  );
}

export default App;
