import React, { useState } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const App = () => {
  const [text, setText] = useState('');
  const [correction, setCorrection] = useState('');

  const handleTextChange = (event) => {
    const userInput = event.target.value.toLowerCase();
    const words = userInput.split(/\s+/); 
    let correctedWord = '';
    
    for (const word of words) {
      if (customDictionary[word]) {
        correctedWord = customDictionary[word];
        break; 
      }
    }
    
    setCorrection(correctedWord ? `Did you mean: ${correctedWord}?` : '');
    setText(event.target.value);
  };
  

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text..."
        rows={4}
        cols={50}
      />
      {correction && <div>{correction}</div>}
    </div>
  );
};

export default App;
