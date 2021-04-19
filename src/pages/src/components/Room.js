import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Grid, Button, RadioGroup, FormControl, FormControlLabel, FormLabel, Radio } from "@material-ui/core";

export default function Room(props) {
  const [map, setMap] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const { roomCode } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch("/api/get-room" + "?code=" + roomCode)
      .then((response) => {
        if (!response.ok) {
          props.leaveRoomCallback();
          history.push('/');
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setMap(data.list_of_buildings);
        }
      });
  }, []);

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
    <>
      <div class="menu">
        <FormControl component="fieldset">
          <FormLabel component="legend" >Room Page</FormLabel>
          <RadioGroup aria-label="gender" name="gender1">
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={1}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </Grid>
              <Grid container item xs={12} spacing={1}>
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                <FormControlLabel value="disabled" control={<Radio />} label="(Disabled option)" />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
};