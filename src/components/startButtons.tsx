import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";

import AllInboxSharpIcon from "@material-ui/icons/AllInboxSharp";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import RemoveCircleSharpIcon from "@material-ui/icons/RemoveCircleSharp";

const useStyles = makeStyles((theme: any) => ({
  root: {
    width: "100%",
    maxWidth: 800,
    margin: "auto",
  },

  card: {
    backgroundColor: theme.palette.secondary.main,
    position: "relative",
    width: "100%",
    borderRadius: 4,

    "&::before": {
      display: "block",
      content: `""`,
      width: "100%",
      paddingTop: "100%",
    },
  },

  icon: {
    position: "absolute",
    top: "calc(50% - 16px)",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 80,
    color: "#eee",
  },

  text: {
    color: "#fff",
    position: "absolute",
    bottom: 8,
    left: "50%",
    transform: "translateX(-50%)",
  },
}));

type PropsType = {
  onClick: (path: string) => void;
};

const StartButtons = (props: PropsType) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item container spacing={1}>
      <Grid item xs={6} md={3}>
        <ButtonBase
          className={classes.card}
          onClick={() => props.onClick("estoque")}
        >
          <AllInboxSharpIcon className={classes.icon} />
          <Typography className={classes.text}>Estoque</Typography>
        </ButtonBase>
      </Grid>
      <Grid item xs={6} md={3}>
        <ButtonBase
          className={classes.card}
          onClick={() => props.onClick("compras")}
        >
          <ShoppingCartSharpIcon className={classes.icon} />
          <Typography className={classes.text}>Compras</Typography>
        </ButtonBase>
      </Grid>
      <Grid item xs={6} md={3}>
        <ButtonBase
          className={classes.card}
          onClick={() => props.onClick("adicionar")}
        >
          <AddCircleSharpIcon className={classes.icon} />
          <Typography className={classes.text}>Adicionar</Typography>
        </ButtonBase>
      </Grid>
      <Grid item xs={6} md={3}>
        <ButtonBase
          className={classes.card}
          onClick={() => props.onClick("remover")}
        >
          <RemoveCircleSharpIcon className={classes.icon} />
          <Typography className={classes.text}>Remover</Typography>
        </ButtonBase>
      </Grid>
    </Grid>
  );
};

export default StartButtons;
