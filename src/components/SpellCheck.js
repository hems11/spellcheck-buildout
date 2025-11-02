import { useState } from "react";

const customDictionary = {
        teh: "the",
        wrok: "work",
        fot: "for",
        exampl: "example"
    };

const SpellCheck = () => {
   const [inputText, setInputText] = useState("");
   const [suggestion, setSuggestion] = useState("");
   
   const handleInputChange = (e) => {
    const text = e.target.value;
    const words = text.split(" ");

    const correctedWords = words.map(
      (word) => customDictionary[word.toLowerCase()] || word
    );

     const firstWrong = words.find(
      (word, i) => correctedWords[i] !== word && word.trim() !== ""
    );

    if (firstWrong) {
      const corrected = customDictionary[firstWrong.toLowerCase()];
      setSuggestion(corrected);
    } else {
      setSuggestion("");
    }

    setInputText(text);
   }

    return (
        <div>
            <h1>Spell Check and Auto-Correction </h1>
            <textarea
            value={inputText}
            onChange={handleInputChange}
            rows={5}
            cols={50} 
            placeholder="Enter text..."
            />

            {suggestion && (
                <p>Did you mean: <strong>{suggestion}?</strong></p>
            )}
        </div>
    )

}

export default SpellCheck;