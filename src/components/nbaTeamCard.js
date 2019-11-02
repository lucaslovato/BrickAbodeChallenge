import React from "react";
import useStyles from "../utils/useStyles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
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
    <div className={classes.test}>
      <Card className={classes.card}>
        <img
          className={classes.media}
          src={require(`../assets/nbaLogo/${abbreviation}.png`)}
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
    </div>
  );
};
export default NbaTeamCard;
