import React, { useState } from "react";

export default function B4() {
  const [status, setStatus] = useState<boolean>(false);
  const handleChange = () => {
    setStatus(!status);
  };
  return (
    <div>
      B4 <br />
      <button onClick={handleChange}>{status ? "ẩn" : "hiện"}</button>
      {status ? <p style={{ fontSize: "30px" }}>Tiêu đề văn bản</p> : ""}
    </div>
  );
}
