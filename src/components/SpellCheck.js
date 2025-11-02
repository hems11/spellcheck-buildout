import React, { useState } from "react";

// Dictionary of wrong → correct words
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
    const words = text.split(" ");

    // Case-insensitive correction check
    const correctedWords = words.map(
      (word) => customDictionary[word.toLowerCase()] || word
    );

    // Find first incorrect word
    const firstWrong = words.find(
      (word, i) => correctedWords[i] !== word && word.trim() !== ""
    );

    if (firstWrong) {
      const corrected = customDictionary[firstWrong.toLowerCase()];
      setSuggestion(`Did you mean: ${corrected}?`);
    } else {
      setSuggestion("");
    }

    setInputText(text);
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
