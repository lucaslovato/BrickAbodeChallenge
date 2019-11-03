import React from "react";
import useStyles from "../utils/useStyles";
import AppBar from "@material-ui/core/AppBar";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";

export default function ToolBar() {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar className={classes.homeToolbar}>
        <Link to="/home">
          <HomeIcon className={classes.homeIcon} />
        </Link>
        <Link to="/">
          <ExitToAppIcon className={classes.homeExitIcon} />
        </Link>
      </Toolbar>
    </AppBar>
  );
}
