import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className="container">
      <div id="display">Display</div>
      <div className="grid-container">
        <button className="grid-item grid-col-span-2" id="clear">
          AC
        </button>
        <button className="grid-item" id="divide">
          /
        </button>
        <button className="grid-item" id="multiply">
          X
        </button>
        <button className="grid-item" id="seven">
          7
        </button>
        <button className="grid-item" id="eight">
          8
        </button>
        <button className="grid-item" id="nine">
          9
        </button>
        <button className="grid-item" id="subtract">
          -
        </button>
        <button className="grid-item" id="four">
          4
        </button>
        <button className="grid-item" id="five">
          5
        </button>
        <button className="grid-item" id="six">
          6
        </button>
        <button className="grid-item" id="add">
          +
        </button>
        <button className="grid-item" id="one">
          1
        </button>
        <button className="grid-item" id="two">
          2
        </button>
        <button className="grid-item" id="three">
          3
        </button>
        <button className="grid-item grid-row-span-2" id="equals">
          =
        </button>
        <button className="grid-item grid-col-span-2" id="zero">
          0
        </button>
        <button className="grid-item" id="decimal">
          .
        </button>
      </div>
    </div>
  );
}

export default App;
