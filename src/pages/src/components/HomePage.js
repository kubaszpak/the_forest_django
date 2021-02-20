import React, { Component } from "react";
import { Grid, Button, Typography } from "@material-ui/core";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="space-between"
        spacing="5"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Typography variant="h4" component="h4">
            Homepage
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" component="h4">
            Homepage
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
