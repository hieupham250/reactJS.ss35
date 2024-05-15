import React, { useState } from "react";

export default function B3() {
  const [color, setColor] = useState<string>("black");
  const handleChangeColor = () => {
    setColor("red");
  };
  return (
    <>
      B3
      <p style={{ color: color, fontSize: "30px" }}>Tiêu đề văn bản</p>
      <button onClick={handleChangeColor}>Change Color</button>
    </>
  );
}
