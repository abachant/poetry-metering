import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [syllableCount, setSyllableCount] = useState(0);
  return (
    <div className="App">
      <div className="text-input-container">
        <div className="syllable-count">{syllableCount}</div>
        <textarea name="text-input"></textarea>
      </div>
    </div>
  );
}

export default App;
