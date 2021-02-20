import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: null,
    };
  }

  handleCreateNewRoom() {
    const requestOptions = {
      method: "POST",
      header: { ContentType: "application/json" },
    };
    fetch("/api/create-room", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (response.ok) {
          this.props.history.push(`/room/${data.code}`);
        }
      });
  }

  renderHomePage() {
    console.log("HI");
    return (
      <Grid
        container
        direction="row"
        justify="space-between"
        spacing={5}
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

  clearRoomCodeFromState() {
    this.setState = {
      roomCode: null,
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              this.state.roomCode ? (
                <Redirect to={`/room/${this.state.roomCode}`} />
              ) : (
                this.renderHomePage()
              );
            }}
          />
          <Route
            path="/room/:roomCode"
            render={(props) => {
              <Map
                {...props}
                leaveRoomCallback={this.clearRoomCodeFromState}
              />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

// async componentDidMount() {
//   fetch("/api/user-in-room")
//     .then((response) => response.json())
//     .then((data) => {
//       if (response.ok) {
//         this.setState({
//           roomCode: data.code,
//         });
//       }
//     });
// }
