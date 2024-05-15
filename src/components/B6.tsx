import React, { useState } from "react";

export default function B6() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      B6
      <p>bạn đã click {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
