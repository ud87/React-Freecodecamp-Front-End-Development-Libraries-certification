import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState("0");
  const [result, setResult] = useState("0");
  const [display, setDisplay] = useState("0");
  const [equalsClicked, setEqualsClicked] = useState(false);
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
  let total = "";

  useEffect(() => {
    if (equalsClicked) {
      const total = data; //Use data as a string

      // Custom evaluate function
      const evaluateExpression = (expression) => {
        try {
          // Use Function constructor to evaluate expression
          const evalResult = Function(`"use strict"; return (${expression})`)();
          return Math.round((evalResult + Number.EPSILON) * 100000) / 100000; // Round to handle precision
        } catch (error) {
          return "Error";
        }
      };

      //calculate result
      try {
        const evalResult = evaluateExpression(total.replace("X", "*"));
        setResult(evalResult.toString());

        //update display after result is set
        setDisplay(`${total} = ${evalResult}`);
      } catch (error) {
        setDisplay("Error");
      } finally {
        setEqualsClicked(true);
      }
    }
  }, [equalsClicked, data]);

  function handleClick(e) {
    const value = e.target.innerText;
    setEqualsClicked(false);

    setData((prevData) => {
      // Handle clear button
      if (value === "AC") {
        return "0";
      }

      // Prevent consecutive operators
      if (
        ["+", "-", "/", "X"].includes(prevData.slice(-1)) &&
        ["+", "-", "/", "X"].includes(value)
      ) {
        return prevData.slice(0, -1) + value;
      }

      // Handle initial zero
      if (prevData === "0" && value !== ".") {
        return value;
      }

      // Handle multiple decimal points
      if (value === "." && prevData.includes(".")) {
        return prevData;
      }

      // Replace "X" with "*" for multiplication
      if (value === "X") {
        return prevData + "*";
      }

      // Otherwise, append the new value
      return prevData + value;
    });
  }

  function calculate() {
    console.log("data is " + data);
    setEqualsClicked(true);
  }

  function reset() {
    setEqualsClicked(false);
    console.log("reset pressed");
    setData("0");
    setResult("0");
  }

  const buttonElements = buttons.map((button, index) => {
    return (
      <button
        key={index}
        className={`grid-item grid-item-${index + 1}`}
        id={ids[index]}
        onClick={(e) => {
          if (button === "=") {
            calculate();
          } else if (button === "AC") {
            reset();
          } else {
            handleClick(e);
          }
        }}
      >
        {button}
      </button>
    );
  });

  return (
    <div className="container">
      <div id="display">{equalsClicked === false ? data : result}</div>
      <div className="grid-container">{buttonElements}</div>
    </div>
  );
}

export default App;
