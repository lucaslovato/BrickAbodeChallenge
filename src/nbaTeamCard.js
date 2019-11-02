import React from "react";
import useStyles from "./useStyles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const NbaTeamCard = ({
  abbreviation,
  city,
  conference,
  division,
  full_name,
  name
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <img
        className={classes.media}
        src={require(`./assets/nbaLogo/${abbreviation}.png`)}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {full_name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Division: {division} <br />
          Conference: {conference}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
export default NbaTeamCard;
