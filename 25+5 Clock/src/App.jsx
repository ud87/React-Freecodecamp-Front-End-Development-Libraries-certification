import { useState, useEffect, useRef } from "react";
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
  const [secs, setSecs] = useState(0);
  const [isSession, setIsSession] = useState(true); //true for session, false for break
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        if (isSession) {
          if (currentSessionLengthMins === 0 && secs === 0) {
            setIsSession(false);
            setCurrentBreakLengthMins(breakLength);
            setSecs(0);
          } else if (secs === 0) {
            setCurrentSessionLengthMins(currentSessionLengthMins - 1);
            setSecs(59);
          } else {
            setSecs(secs - 1);
          }
        } else {
          if (currentBreakLengthMins === 0 && secs === 0) {
            setIsSession(true);
            setCurrentSessionLengthMins(sessionLength);
            setSecs(0);
          } else if (secs === 0) {
            setCurrentBreakLengthMins(currentBreakLengthMins - 1);
            setSecs(59);
          } else {
            setSecs(secs - 1);
          }
        }
      }, 1000);

      return () => clearInterval(timerRef.current);
    }
  }, [
    isRunning,
    currentSessionLengthMins,
    currentBreakLengthMins,
    secs,
    isSession,
    sessionLength,
    breakLength,
  ]);

  function sessionLengthDecrease() {
    if (sessionLength > 1) {
      setCurrentSessionLengthMins(sessionLength - 1);
      return setSessionLength(sessionLength - 1);
    } else {
      setCurrentSessionLengthMins(1);
      return setSessionLength(1);
    }
  }

  function sessionLengthIncrease() {
    if (sessionLength < 60) {
      setCurrentSessionLengthMins(sessionLength + 1);
      return setSessionLength(sessionLength + 1);
    } else {
      return setSessionLength(60);
    }
  }

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

  function handleStartStop() {
    setIsRunning(!isRunning);
  }

  function handleReset() {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setBreaklength(5);
    setSessionLength(25);
    setCurrentSessionLengthMins(25);
    setCurrentBreakLengthMins(5);
    setSecs(0);
    setIsSession(true);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
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
        secs={secs}
        isSession={isSession}
        handleStartStop={handleStartStop}
        handleReset={handleReset}
        audioRef={audioRef}
      />
    </div>
  );
}

export default App;
