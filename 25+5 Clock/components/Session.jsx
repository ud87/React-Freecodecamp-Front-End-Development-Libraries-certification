import React from "react";

export default function Session(props) {
  return (
    <div className="session">
      <div id="session-label">Session Length</div>
      <div className="controls">
        <button id="session-decrement" onClick={props.sessionLengthDecrease}>
          <i className="fa-solid fa-arrow-down fa-lg"></i>
        </button>
        <div id="session-length">{props.sessionLength}</div>
        <button id="session-increment" onClick={props.sessionLengthIncrease}>
          <i className="fa-solid fa-arrow-up fa-lg"></i>
        </button>
      </div>
    </div>
  );
}
