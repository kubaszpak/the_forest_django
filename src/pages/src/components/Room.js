import React, { useState, useEffect } from "react";

export default function Room(props) {
  const [map, setMap] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  // useEffect(() => {
  //   fetch("/api/get-room" + "?code=" + this.roomCode)
  //     .then((response) => {
  //       if (!response.ok) {
  //         this.props.leaveRoomCallback();
  //         this.props.history.push("/");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setMap(data.map);
  //     });
  // });
  return (
    <>
      <div class="parent-container">
        <div class="animated-container">
          <div class="board">
            <Box id="first-box" image={map[0]}></Box>
            <Box id="second-box" image={map[1]}></Box>
            <Box id="third-box" image={map[2]}></Box>
            <Box id="fourth-box" image={map[3]}></Box>
            <Box id="fifth-box" image={map[4]}></Box>
            <Box id="sixth-box" image={map[5]}></Box>
            <Box id="seventh-box" image={map[6]}></Box>
            <Box id="eighth-box" image={map[7]}></Box>
            <Box id="ninth-box" image={map[8]}></Box>
          </div>
        </div>
      </div>
      <Menu />
    </>
  );
}

const Box = ({ id = null, image = 0 }) => {
  return (
    <>
      <div class="box" id={id}>
        <div class="tree">
          {image ? (
            <img src={`../static/images/building${image}.png`} alt="Building" />
          ) : null}
        </div>
      </div>
    </>
  );
};

const Menu = () => {
  return (
    <div class="menu">
      <h1>This is the Room Page</h1>
      {/* <h2>Room code: {props.match.params.roomCode}</h2> */}
    </div>
  );
};
