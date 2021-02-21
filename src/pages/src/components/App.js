import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./HomePage.js";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage}/>
        <Route path = "/room/:roomCode" render = {
          () => {
            this.renderNewRoom();
          }
        }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
