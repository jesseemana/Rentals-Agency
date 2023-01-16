import React, { useState } from "react";

export const Pagination = () => {
  const [active, setActive] = useState(false);
  const [page, setPage] = useState(1);

  const handleButton = () => {
    setActive(!active);
  };

  return (
    <div className="font-bold">
      <button onClick={handleButton} className={`p-4 text-[#F4511E]border`}>
        Prev
      </button>
      <button
        onClick={handleButton}
        className={`text-[#F4511E] p-4 border bg-white`}
      >
        1
      </button>
      <button
        onClick={handleButton}
        className={`text-[#F4511E] p-4 border bg-white`}
      >
        2
      </button>
      <button
        onClick={handleButton}
        className={`text-[#F4511E] p-4 border bg-white`}
      >
        3
      </button>
      <button
        onClick={handleButton}
        className={`text-[#F4511E] p-4 border bg-white`}
      >
        Next
      </button>
    </div>
  );
};
