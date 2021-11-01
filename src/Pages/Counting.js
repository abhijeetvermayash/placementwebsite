import React from "react";
import CountUp from "react-countup";

function Counting(props) {
  return (
    <div>
      <h2>{props.heading}</h2>
      <br />

      <div style={{ fontSize: "50px" }}>
        <CountUp start={props.start} end={props.end} duration={7} />
        &nbsp;<a>{props.suffix}</a>
      </div>
    </div>
  );
}

export default Counting;
