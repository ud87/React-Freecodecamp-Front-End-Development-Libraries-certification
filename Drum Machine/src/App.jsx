import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [audio, setAudio] = useState({
    "Heater 1":
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    "Heater 2":
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    "Heater 3":
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    "Heater 4":
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    Clap: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    "Open-HH":
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    "Kick-n'-Hat":
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    kick: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    "Closed-HH":
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
  });
  //console.log(Object.keys(audio));

  const keyboardKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  return (
    <div id="drum-machine">
      {Object.keys(audio).map((key, index) => (
        <button className="drum-pad" id={index + 1} key={index + 1}>
          {keyboardKeys[index]}
          <audio
            className="clip"
            src={audio[key]}
            id={keyboardKeys[index]}
          ></audio>
        </button>
      ))}
    </div>
  );
}

export default App;
