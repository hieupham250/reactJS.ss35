import React, { useState } from "react";

export default function B5() {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <div>
      B5 <br />
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Nhập nội dung"
        value={inputValue}
      />
      <p>{inputValue}</p>
    </div>
  );
}
