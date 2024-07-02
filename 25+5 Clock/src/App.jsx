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
      <Timer />
    </div>
  );
}

export default App;
