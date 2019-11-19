import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NbaTeamCard from "../components/nbaTeamCard";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useStyles from "../utils/useStyles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import { Link as ReactLink } from "react-router-dom";
import Footer from "../components/footer";
import { setIsLoadingNbaTeams, loadNbaTeams } from '../redux/core/action/nbaTeamActions';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

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

const NbaTeams = (props) => {
  
  const [nbaTeams, setNbaTeams] = useState([]);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setNbaTeams(props.loadNbaTeams());
    props.setIsLoadingNbaTeams();
  }, [props]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          className={classes.tabPanel}
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
          <LinkTab
            label="East Conference Teams"
            href="/..."
            {...a11yProps(1)}
          />
          <LinkTab
            label="West Conference Teams"
            href="/...."
            {...a11yProps(2)}
          />
          <ReactLink to="/home">
            <div className={classes.exitIcon}>
              <HomeIcon />
            </div>
          </ReactLink>
          <ReactLink to="/">
            <div className={classes.exitIcon}>
              <ExitToAppIcon />
            </div>
          </ReactLink>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className={classes.cardDiv}>
          {console.log(nbaTeams) &&
          nbaTeams.map(nbaTeam => (
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
        <div className={classes.cardDiv}>
          {console.log(nbaTeams) &&
          nbaTeams.map(
            nbaTeam =>
              nbaTeam.conference === "East" && (
                <NbaTeamCard
                  key={nbaTeam.id}
                  abbreviation={nbaTeam.abbreviation}
                  city={nbaTeam.city}
                  conference={nbaTeam.conference}
                  division={nbaTeam.division}
                  full_name={nbaTeam.full_name}
                  name={nbaTeam.name}
                />
              )
          )}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={classes.cardDiv}>
          {console.log(nbaTeams) &&
          nbaTeams.map(
            nbaTeam =>
              nbaTeam.conference === "West" && (
                <NbaTeamCard
                  key={nbaTeam.id}
                  abbreviation={nbaTeam.abbreviation}
                  city={nbaTeam.city}
                  conference={nbaTeam.conference}
                  division={nbaTeam.division}
                  full_name={nbaTeam.full_name}
                  name={nbaTeam.name}
                />
              )
          )}
        </div>
      </TabPanel>
      <Footer />
    </div>
  );
}
const mapStateToProps = state => ({
  nbaTeams: state.nbaTeams,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadNbaTeams,
  setIsLoadingNbaTeams,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(NbaTeams)