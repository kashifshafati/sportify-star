import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import "./Footer.css";
import { Grid, Slider } from "@material-ui/core";
import { DataLayerValue } from "./DataLayer";

function Footer() {
  const [{ discover_weekly }, dispatch] = DataLayerValue();
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumLogo" src={discover_weekly?.images[0].url} alt="" />

        <div className="footer__songInfo">
          <h4>{discover_weekly?.description}</h4>
          <p></p>
        </div>

        <div className="footer__songInfo">
          <h4></h4>
          <p></p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PauseCircleOutlineIcon fontSize="large" className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />

        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
