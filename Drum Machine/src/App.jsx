import { useCallback, useEffect, useState } from "react";
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

  const [display, setDisplay] = useState("");

  const keyboardKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  function handleClick(e) {
    const index = keyboardKeys.indexOf(e.target.children[0].id); //get id from element clicked and get index from keyboardKeys
    setDisplay(Object.keys(audio)[index]); //convert audio object keys to an array and use index to find the key value
    const playAudio = e.target.children[0]; //if only one audio element
    //console.log(playAudio);
    playAudio.play();
  }

  //event listener that listens for key press and plays sound
  const handleKeyPress = useCallback((event) => {
    //console.log(`key pressed: ${event.key}`.toUpperCase());

    const playAudio = document.getElementById(`${event.key}`.toUpperCase());
    playAudio.play();
  }, []);

  useEffect(() => {
    //add event listener
    document.addEventListener("keydown", handleKeyPress);

    //clean up event listener on component unmount
    return () => {
      document.addEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      {Object.keys(audio).map((key, index) => (
        <button
          className="drum-pad"
          id={index + 1}
          key={key}
          onClick={handleClick}
        >
          {keyboardKeys[index]}
          <audio
            className="clip"
            id={keyboardKeys[index]}
            src={audio[key]}
          ></audio>
        </button>
      ))}
    </div>
  );
}

export default App;
