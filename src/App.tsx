import React from "react";
import "./App.css";

let syllableCount = 0

function App() {
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
