import React from "react";

function Box(props) {
  return (
    <>
      <div class="box" id={props.id}>
        <div class="tree">
          <img src="static/images/building1.svg" alt="My image" />
        </div>
      </div>
    </>
  );
}

export default Box;
