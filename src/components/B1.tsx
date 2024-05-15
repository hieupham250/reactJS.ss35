import React, { useState } from "react";

export default function B1() {
  const [name, setName] = useState<string>("Phạm Trung Hiếu");
  return (
    <>
      B1
      <h3>Họ và tên: {name}</h3>
    </>
  );
}
