import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Break from "../components/Break.jsx";
import Session from "../components/Session.jsx";
import Timer from "../components/Timer.jsx";

function App() {
  const [breakLength, setBreaklength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [currentSessionLengthMins, setCurrentSessionLengthMins] =
    useState(sessionLength);
  const [currentBreakLengthMins, setCurrentBreakLengthMins] =
    useState(breakLength);
  const [secs, setSecs] = useState("00");

  function breakLengthDecrease() {
    if (breakLength > 1) {
      return setBreaklength(breakLength - 1);
    } else {
      return setBreaklength(1);
    }
  }

  function breakLengthIncrease() {
    if (breakLength < 60) {
      return setBreaklength(breakLength + 1);
    } else {
      return setBreaklength(60);
    }
  }

  function sessionLengthDecrease() {
    if (sessionLength > 1) {
      return setSessionLength(sessionLength - 1);
    } else {
      return setSessionLength(1);
    }
  }

  function sessionLengthIncrease() {
    if (sessionLength < 60) {
      return setSessionLength(sessionLength + 1);
    } else {
      return setSessionLength(60);
    }
  }

  //timer function to switch between session length function and break length function
  function timer() {
    if (currentSessionLengthMins != 0) {
      currentSesssionLength();
    } else if (currentSessionLengthMins == 0) {
      currentBreakLength();
    } else if (currentBreakLengthMins == 0 && currentSessionLengthMins == 0) {
      setCurrentBreakLengthMins(breakLength);
      setCurrentBreakLengthMins(sessionLength);
    }
  }

  //current session length function to change current session length time
  function currentSesssionLength() {
    if (secs == "00") {
      setCurrentSessionLengthMins(currentSessionLengthMins - 1);
      setSecs(60 - 1);
    } else {
      setSecs(secs - 1);
    }
  }

  //current break length function to change current break length time
  function currentBreakLength() {
    if (secs == "00") {
      setCurrentBreakLengthMins(currentBreakLengthMins - 1);
      setSecs(60 - 1);
    } else {
      setSecs(secs - 1);
    }
  }

  return (
    <div className="container">
      <h1>25 + 5 Clock</h1>
      <div className="flex-container">
        <Break
          breakLength={breakLength}
          breakLengthDecrease={breakLengthDecrease}
          breakLengthIncrease={breakLengthIncrease}
        />
        <Session
          sessionLength={sessionLength}
          sessionLengthDecrease={sessionLengthDecrease}
          sessionLengthIncrease={sessionLengthIncrease}
        />
      </div>
      <Timer
        currentBreakLengthMins={currentBreakLengthMins}
        currentSessionLengthMins={currentSessionLengthMins}
        timer={timer}
        secs={secs}
      />
    </div>
  );
}

export default App;
