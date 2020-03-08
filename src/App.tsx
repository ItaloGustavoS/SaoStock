import React from "react";
import logo from "./logo.svg";
import "./App.css";

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
        <a
          className="App-link"
          href="https://www.radioterapiasaofrancisco.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site do São Francisco
        </a>
      </header>
    </div>
  );
}

export default App;
