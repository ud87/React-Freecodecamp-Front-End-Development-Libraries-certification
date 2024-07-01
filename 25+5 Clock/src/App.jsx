import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Break from "../components/Break.jsx";
import Session from "../components/Session.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>25 + 5 Clock</h1>
      <div className="flex-container">
        <Break />
        <Session />
      </div>
    </div>
  );
}

export default App;
