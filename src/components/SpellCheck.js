// 

import { useState } from "react";


const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const SpellCheck = () => {
  const [inputText, setInputText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    // Split by spaces, trim empty entries
    const words = text.trim().split(/\s+/).filter(Boolean);

    if (words.length === 0) {
      setSuggestion("");
      return;
    }

    
    const lastWord = words[words.length - 1].toLowerCase();

    if (customDictionary[lastWord]) {
      setSuggestion(`Did you mean: ${customDictionary[lastWord]}?`);
    } else {
      setSuggestion("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Spell Check Suggestion</h2>

      <textarea
        value={inputText}
        onChange={handleInputChange}
        rows={5}
        cols={50}
        placeholder="Enter text..."
      />

      {/* Display the suggestion exactly as tests expect */}
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
};

export default SpellCheck;