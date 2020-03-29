import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StartButtons from "../components/startButtons";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 800,
    margin: "auto",
  },

  image: {
    width: 288,
    height: "auto",
    margin: "auto",
    paddingTop: 16,
    paddingBottom: 16,
  },
}));

const Index = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item container xs={12}>
        <img
          src="http://www.radioterapiasaofrancisco.com.br/images/logo.png"
          className={classes.image}
          alt="logo"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2" align="center">
          Seja Bem-Vindo ao Estoque do São Chico.
        </Typography>
      </Grid>

      <StartButtons onClick={history.push} />
    </Grid>
  );
};

export default Index;
