import React from "react";

export default function Timer(props) {
  function timerDisplay() {
    let minutes;
    let seconds = props.secs;
    if (props.currentSessionLengthMins != 0) {
      minutes = props.currentSessionLengthMins;
    } else if (props.currentSessionLengthMins == 0) {
      minutes = props.currentBreakLengthMins;
    }
    return `${minutes}:${seconds}`;
  }

  return (
    <div className="timer">
      <p id="timer-label">
        {props.currentSessionLengthMins !== 0 ? "Session" : "Break"}
      </p>
      <p id="time-left">{timerDisplay()}</p>
      <div className="controls">
        <button id="start_stop">start_stop</button>
        <button id="reset">Reset</button>
      </div>
    </div>
  );
}
