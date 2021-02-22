import React from "react";

export default function Room(props) {
  return (
    <div>
      <h1>This is the Room Page</h1>
      <h2>Room code: {props.match.params.roomCode}</h2>
    </div>
  );
}
