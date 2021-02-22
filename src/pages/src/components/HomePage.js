import React from "react";
import { Grid, Button } from "@material-ui/core";

function HomePage() {
  return (
    <>
      <Background />
      <Logo />
      <div className="mid-container">
        <div className="item title">
          <Grid container spacing={3} direction="column">
            <Grid item>
              <h1>Welcome to The Forest</h1>
              <h3>Cyberpunk Edition</h3>
            </Grid>
            <Grid item>
              <p>
                The forest is a django react app made to help people stay
                focused on what they're doing.
                <br />
                In order to use it you need to install a forest site blocker
                chrome extension.
                <br />
              </p>
            </Grid>
            <Grid item>
              <Button variant="contained" color="deafult">
                Let's start
              </Button>
            </Grid>
          </Grid>
        </div>
        <div className="item">
          <img
            src="./static/images/logo.png"
            alt="City"
            className="logo center"
          />
        </div>
      </div>
    </>
  );
}

const Logo = () => {
  return (
    <div className="small-logo-container">
      <img
        src="./static/images/small-logo.png"
        alt="Small logo"
        className="small-logo"
      />
      <h4>The Forest</h4>
    </div>
  );
};

const Background = () => {
  return (
    <div className="background">
      <img className="background" src="./static/images/background.png" />
    </div>
  );
};

export default HomePage;
