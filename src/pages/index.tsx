import React from "react";
import { useHistory } from "react-router-dom";

import BarButtons from "../components/barButtons";
import "../App.css";

const Index = () => {
  const history = useHistory();

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="http://www.radioterapiasaofrancisco.com.br/images/logo.png"
          className="App-logo"
          alt="logo"
        />
        <p>Seja Bem-Vindo ao Estoque do São Chico.</p>
        <BarButtons onClick={history.push} />
      </header>
    </div>
  );
};

export default Index;
