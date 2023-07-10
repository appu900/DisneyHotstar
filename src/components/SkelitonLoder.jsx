import React, { useState } from "react";

const SkelitonLoder = () => {
  const [cards, setcards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  return (
    <div className="w-[1360px]   grid grid-cols-6 gap-6">
      {cards.map((item) => (
        <div className="text-white w-[200px] h-[300px] opacity-30  animate-pulse bg-[#252833] rounded"></div>
      ))}
    </div>
  );
};

export default SkelitonLoder;
