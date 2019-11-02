import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: "#b3b3b3"
    }
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
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
  tabPanel: {
    display: "flex",
    justifyContent: "space-around"
  },
  cardDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  }
}));

export default useStyles;
