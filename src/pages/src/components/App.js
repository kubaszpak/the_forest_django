import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import Room from "./Room";

function App(props) {
  const [roomCode, setRoomCode] = useState(null);

  const clearRoomCode = () => {
    setRoomCode(null);
  };

  useEffect(() => {
    fetch("/api/user-in-room")
      .then((response) => response.json())
      .then((data) => {
        if (response.ok) {
          this.setState({
            roomCode: data.code,
          });
        }
      });
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return roomCode ? (
              <Redirect to={`/room/${roomCode}`} />
            ) : (
              <HomePage />
            );
          }}
        />
        <Route
          path="/room/:roomCode"
          render={(props) => {
            return <Room {...props} leaveRoomCallback={clearRoomCode} />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

const handleCreateNewRoom = () => {
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
};

export default App;
