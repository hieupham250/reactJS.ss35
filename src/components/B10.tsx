import React, { useState } from "react";

export default function B10() {
  const [interest, setInterest] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    if (checked) {
      setInterest((prevInterest) => [...prevInterest, value]);
    } else {
      setInterest((prevInterest) =>
        prevInterest.filter((item) => item !== value)
      );
    }
  };
  const formattedInterest = JSON.stringify(interest);

  return (
    <div>
      B10 <br />
      <p>Sở thích: {formattedInterest}</p>
      <input type="checkbox" value="Đi chơi" onChange={handleCheckboxChange} />
      Đi chơi <br />
      <input type="checkbox" value="Code" onChange={handleCheckboxChange} />
      Code <br />
      <input type="checkbox" value="Bơi lội" onChange={handleCheckboxChange} />
      Bơi lội <br />
      <input type="checkbox" value="Nhảy dây" onChange={handleCheckboxChange} />
      Nhảy dây <br />
    </div>
  );
}
