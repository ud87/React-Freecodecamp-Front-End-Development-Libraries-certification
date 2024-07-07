import React, { useEffect, useRef } from "react";
import beepSound from "../src/assets/analog-watch-alarm_daniel-simion.mp3";

export default function Timer(props) {
  useEffect(() => {
    if (
      (props.currentSessionLengthMins === 0 && props.secs === 0) ||
      (props.currentBreakLengthMins === 0 && props.secs === 0)
    ) {
      props.audioRef.current.play();
    }
  }, [
    props.currentSessionLengthMins,
    props.secs,
    props.currentBreakLengthMins,
  ]);

  function formatTime(minutes, seconds) {
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  }

  function timerDisplay() {
    if (props.isSession) {
      return formatTime(props.currentSessionLengthMins, props.secs);
    } else {
      return formatTime(props.currentBreakLengthMins, props.secs);
    }
  }
  return (
    <div className="timer">
      <p id="timer-label">{props.isSession ? "Session" : "Break"}</p>
      <p id="time-left">{timerDisplay()}</p>
      <audio
        id="beep"
        ref={props.audioRef}
        src={beepSound}
        preload="auto"
      ></audio>
      <div className="controls">
        <button id="start_stop" onClick={props.handleStartStop}>
          start_stop
        </button>
        <button id="reset" onClick={props.handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
