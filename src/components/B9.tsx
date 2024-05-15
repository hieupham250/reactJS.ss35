import React, { useState } from "react";

export default function B9() {
  const [gender, setGender] = useState<string>("nam");

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  return (
    <div>
      B9 <br />
      <input
        type="radio"
        value="nam"
        checked={gender === "nam"}
        onChange={handleGenderChange}
      />
      Nam <br />
      <input
        type="radio"
        value="nữ"
        checked={gender === "nữ"}
        onChange={handleGenderChange}
      />
      Nữ <br />
      <input
        type="radio"
        value="khác"
        checked={gender === "khác"}
        onChange={handleGenderChange}
      />
      Khác <br />
      <p>Giới tính: {gender}</p>
    </div>
  );
}
