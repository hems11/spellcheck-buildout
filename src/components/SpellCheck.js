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

    // Split input text into words (ignore extra spaces)
    const words = text.trim().split(/\s+/).filter(Boolean);

    if (words.length === 0) {
      setSuggestion("");
      return;
    }

    const wrongWord = words.find(
      (word) => customDictionary[word.toLowerCase()]
    );

    if (wrongWord) {
      const corrected = customDictionary[wrongWord.toLowerCase()];
      setSuggestion(`Did you mean: ${corrected}?`);
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

      {suggestion && <p>{suggestion}</p>}
    </div>
  );
};

export default SpellCheck;
