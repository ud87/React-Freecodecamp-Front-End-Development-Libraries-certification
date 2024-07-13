import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState("0");
  const [result, setResult] = useState(0);
  const buttons = [
    "AC",
    "/",
    "X",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
    ".",
  ];
  const ids = [
    "clear",
    "divide",
    "multiply",
    "seven",
    "eight",
    "nine",
    "subtract",
    "four",
    "five",
    "six",
    "add",
    "one",
    "two",
    "three",
    "equals",
    "zero",
    "decimal",
  ];

  const buttonElements = buttons.map((button, index) => {
    return (
      <button
        key={index}
        className={`grid-item grid-item-${index + 1}`}
        id={ids[index]}
      >
        {button}
      </button>
    );
  });

  function handleClick(e) {
    //console.log(e.target.innerText);
    setData((prevData) => [...prevData, e.target.innerText]);
    console.log(data);
    console.log(eval(data.join("")));
  }

  return (
    <div className="container">
      <div id="display">Display</div>
      <div className="grid-container">{buttonElements}</div>
    </div>
  );
}

export default App;
