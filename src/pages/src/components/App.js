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
    const requestOptions = {
      method: "GET",
      header: { ContentType: "application/json" },
    };
    fetch("/api/user-in-room", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setRoomCode(data.host);
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

export default App;
