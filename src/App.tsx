import React from "react";
import "./App.css";
import { useState } from "react";
import { syllable } from "syllable";

function App() {
  const [syllableCount, setSyllableCount] = useState(0);
  const [textInput, setTextInput] = useState("");

  return (
    <div className="App">
      <div className="text-input-container">
        <div className="syllable-count">{syllableCount}</div>
        <textarea
          name="text-input"
          value={textInput}
          onChange={(e) => {
            setTextInput(e.target.value);
            setSyllableCount(syllable(e.target.value));
          }}
        ></textarea>
      </div>
    </div>
  );
}

export default App;
