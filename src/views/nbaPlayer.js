import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "../components/toolbar";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import PlayerTable from "../components/playerTable";

const useStyles = makeStyles(theme => ({
  nbaPlayerText: {
    margin: theme.spacing(10)
  },
  margin: {
    margin: theme.spacing(1)
  },
  nbaPlayerDiv: {
    display: "flex",
    margin: theme.spacing(10),
    justifyContent: "center"
  },
  nbaPlayerButton: {
    maxWidth: 250
  }
}));

export default function NbaPlayer() {
  const classes = useStyles();

  const [nbaPlayers, setNbaPlayers] = useState([]);
  const [query, setQuery] = useState("");

  const handleChange = event => {
    setQuery(event.target.value);
  };

  useEffect(() => {}, []);

  const getNbaPlayer = async nbaPlayerName => {
    const response = await fetch(
      `https://free-nba.p.rapidapi.com/players?search=${nbaPlayerName}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "free-nba.p.rapidapi.com",
          "x-rapidapi-key": "ac7cac8b25mshe61589dcf228915p1da28djsn29c26fd3e313"
        }
      }
    );
    const apiCallback = await response.json();
    setNbaPlayers(apiCallback.data);
    console.log(apiCallback.data);
  };

  return (
    <React.Fragment>
      <CssBaseline>
        <Toolbar />
        <main>
          <Typography
            className={classes.nbaPlayerText}
            variant="h5"
            align="center"
            paragraph
          >
            Search a NBA player by his first/last name
          </Typography>
          <div className={classes.nbaPlayerDiv}>
            <form>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Player Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SportsBasketballIcon />
                    </InputAdornment>
                  )
                }}
                value={query}
                onChange={handleChange}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.nbaPlayerButton}
                onClick={() => {
                  getNbaPlayer(query);
                }}
              >
                Search
              </Button>
            </form>
          </div>
          <div className={classes.myTableTest}>
            <PlayerTable nbaPlayers={nbaPlayers} />
          </div>
        </main>
      </CssBaseline>
    </React.Fragment>
  );
}
