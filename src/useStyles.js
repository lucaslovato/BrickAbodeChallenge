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
    backgroundColor: theme.palette.secondary.main
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
    justifyContent: "space-around",
    flexWrap: "wrap",
    minWidth: 100,
    margin: 10,
    border: "solid 1px red"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 150,
    width: 200
  }
}));

export default useStyles;
