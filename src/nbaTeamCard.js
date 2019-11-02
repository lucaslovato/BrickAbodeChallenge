import React from "react";
import useStyles from "./useStyles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import ATL from "./assets/nbaLogo/ATL.png";
import BKN from "./assets/nbaLogo/BKN.png";
import BOS from "./assets/nbaLogo/BOS.png";
import CHA from "./assets/nbaLogo/CHA.png";
import CHI from "./assets/nbaLogo/CHI.png";
import CLE from "./assets/nbaLogo/CLE.png";
import DAL from "./assets/nbaLogo/DAL.png";
import DEN from "./assets/nbaLogo/DEN.png";
import DET from "./assets/nbaLogo/DET.png";
import GSW from "./assets/nbaLogo/GSW.png";
import HOU from "./assets/nbaLogo/HOU.png";
import IND from "./assets/nbaLogo/IND.png";
import LAC from "./assets/nbaLogo/LAC.png";
import LAL from "./assets/nbaLogo/LAL.png";
import MEM from "./assets/nbaLogo/MEM.png";
import MIA from "./assets/nbaLogo/MIA.png";
import MIL from "./assets/nbaLogo/MIL.png";
import MIN from "./assets/nbaLogo/MIN.png";
import NOP from "./assets/nbaLogo/NOP.png";
import NYK from "./assets/nbaLogo/NYK.png";
import OKC from "./assets/nbaLogo/OKC.png";
import ORL from "./assets/nbaLogo/ORL.png";
import PHI from "./assets/nbaLogo/PHI.png";
import PHX from "./assets/nbaLogo/PHX.png";
import POR from "./assets/nbaLogo/POR.png";
import SAC from "./assets/nbaLogo/SAC.png";
import SAS from "./assets/nbaLogo/SAS.png";
import TOR from "./assets/nbaLogo/TOR.png";
import UTA from "./assets/nbaLogo/UTA.png";
import WAS from "./assets/nbaLogo/WAS.png";

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
      <CardMedia
        className={classes.media}
        image="./assets/nbaLogo/ATL.png"
        title={name}
      ></CardMedia>
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
