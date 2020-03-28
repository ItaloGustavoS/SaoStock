import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../logo.svg";
import "../App.css";

const useStyles = makeStyles({
  buttonContainer: {
    width: "688px",
    display: "flex",
    justifyContent: "space-around",
  },

  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    width: "160px",
    height: 48,
    padding: "0 30px",
  },
});

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Seja Bem-Vindo ao protótipo do que algum dia sera o estoque do São
          Chico.
        </p>

        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="primary"
            onClick={() => history.push("estoque")}
          >
            Estoque
          </Button>

          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="primary"
            onClick={() => history.push("adicionar")}
          >
            Adicionar
          </Button>

          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="primary"
            onClick={() => history.push("remover")}
          >
            Retirar
          </Button>

          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="primary"
            onClick={() => history.push("compras")}
          >
            Compras
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Home;
