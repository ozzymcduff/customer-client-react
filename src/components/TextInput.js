import React, { useState } from "react";

function TextInput({ onSave, text }) {
  const [inputText, setInputText] = useState(text || "");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleBlur = (e) => {
    onSave(e.target.value);
  };

  return (
    <input
      type="text"
      autoFocus={true}
      value={inputText}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
}


export default TextInput;
