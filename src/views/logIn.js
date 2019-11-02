import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Copyright from "../components/copyright";
import useStyles from "../utils/useStyles";
import { Link as ReactLink } from "react-router-dom";
import brickAbodeLogo from "../assets/brick-abode.png";

export default function LogInView() {
  const classes = useStyles();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = prop => event => {
    setUser({ ...user, [prop]: event.target.value });
  };

  const userLogin = () => {
    alert(`
      User Login
      email: ${user.email}
      password: ${user.password}
    `);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img
          className={classes.brickAbodeLogo}
          src={brickAbodeLogo}
          alt="brick Abode Logo"
        />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={user.email}
            onChange={handleChange("email")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={user.password}
            onChange={handleChange("password")}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <ReactLink to="/main">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={userLogin}
              color="primary"
            >
              Sign In
            </Button>
          </ReactLink>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
