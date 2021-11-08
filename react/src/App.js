import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import PinButton from "./Components/PinButton.js";
import SceneSwitcher from "./Components/SceneSwitcher.js";

function App() {
  
  const testId = 1;
  const [scene, setScene] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <p>o-------o--------o</p>
        <SceneSwitcher scene={1} />
      </header>
      <PinButton Id={testId} />
    </div>
  );
}

export default App;
