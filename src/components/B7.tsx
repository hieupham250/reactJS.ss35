import React, { useState } from "react";

export default function B7() {
  const [inputValue, setInputValue] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setCount(value.length);
  };

  return (
    <div>
      B7 <br />
      <textarea onChange={handleInputChange} value={inputValue}></textarea>
      <p>Số ký tự: {count}</p>
    </div>
  );
}
