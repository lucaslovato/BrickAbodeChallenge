import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: "#c0c0c0"
    }
  },
  root: {
    flexGrow: 1
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.background.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  linkStyle: {
    color: "white"
  },
  exitIcon: {
    margin: theme.spacing(3, 2, 2),
    color: "white"
  },
  brickAbodeLogo: {
    padding: "20px"
  },
  //nba teams styles
  card: {
    display: "flex",
    justifyContent: "center",
    width: 300,
    height: 180,
    padding: 10,
    border: "solid 0.5px red"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    margin: 30,
    maxHeight: 100,
    maxWidth: 150
  },
  //nba teams card styles
  tabPanel: {
    display: "flex",
    justifyContent: "space-around"
  },
  cardDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  },
  //nba player card styles
  tableRoot: {
    width: "75%",
    overflowX: "auto"
  },
  tableSize: {
    maxWidth: 650
  },
  //home styles
  homeIcon: {
    marginRight: theme.spacing(2),
    color: "white"
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  footer: {
    padding: theme.spacing(6)
  },
  homeToolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  homeExitIcon: {
    color: "white"
  },
  tableDiv: {
    display: "flex",
    justifyContent: "center"
  },
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

export default useStyles;
