import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "688px",
    display: "flex",
    justifyContent: "space-between",
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
}));

type PropsType = {
  onClick: (path: string) => void;
};

const StartButtons = (props: PropsType) => {
  const classes = useStyles();

  return (
    <ButtonGroup
      className={classes.container}
      variant="contained"
      color="primary"
      aria-label="contained primary button group"
    >
      <Button
        className={classes.button}
        onClick={() => props.onClick("estoque")}
      >
        Estoque
      </Button>
      <Button
        className={classes.button}
        onClick={() => props.onClick("adicionar")}
      >
        Adicionar
      </Button>
      <Button
        className={classes.button}
        onClick={() => props.onClick("retirar")}
      >
        Retirar
      </Button>
      <Button
        className={classes.button}
        onClick={() => props.onClick("compras")}
      >
        Compras
      </Button>
    </ButtonGroup>
  );
};

export default StartButtons;
