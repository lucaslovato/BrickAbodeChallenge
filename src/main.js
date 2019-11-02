import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NbaTeamCard from "./nbaTeamCard";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useStyles from "./useStyles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link as ReactLink } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function Main() {
  const [nbaTeams, setNbaTeams] = useState([]);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getAllNbaTeams();
  }, []);

  const getAllNbaTeams = async () => {
    const response = await fetch(
      "https://free-nba.p.rapidapi.com/teams?page=0",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "free-nba.p.rapidapi.com",
          "x-rapidapi-key": "ac7cac8b25mshe61589dcf228915p1da28djsn29c26fd3e313"
        }
      }
    );
    const apiPromise = await response.json();
    setNbaTeams(apiPromise.data);
    console.log(apiPromise.data);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab
            label="Get All NBA teams"
            href="/AllNBATeams"
            {...a11yProps(0)}
          />
          <LinkTab label="Page Two" href="/..." {...a11yProps(1)} />
          <LinkTab label="Page Three" href="/...." {...a11yProps(2)} />
          <ReactLink to="/">
            <div className={classes.exitIcon}>
              <ExitToAppIcon />
            </div>
          </ReactLink>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div>
          {nbaTeams.map(nbaTeam => (
            <NbaTeamCard
              key={nbaTeam.id}
              abbreviation={nbaTeam.abbreviation}
              city={nbaTeam.city}
              conference={nbaTeam.conference}
              division={nbaTeam.division}
              full_name={nbaTeam.full_name}
              name={nbaTeam.name}
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Page Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Page Three
      </TabPanel>
    </div>
  );
}

export default Main;
