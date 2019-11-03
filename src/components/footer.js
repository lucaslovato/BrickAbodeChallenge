import React from "react";
import useStyles from "../utils/useStyles";
import Typography from "@material-ui/core/Typography";
import Copyright from "../components/copyright";

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Free NBA API
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Dev by <strong>Lucas</strong>
      </Typography>
      <Copyright />
    </footer>
  );
}
