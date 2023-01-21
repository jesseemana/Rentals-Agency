import React, { useState } from "react";

export const Pagination = () => {
  const [active, setActive] = useState(false);
  const [page, setPage] = useState(1);

  const handleButton = () => {
    console.log("clicked");
  };

  return (
    <div className={`font-bold`}>
      <button
        onClick={handleButton}
        className={`text-[#BDBDBD] p-4 border border-r-0 rounded-l-lg`}
      >
        Prev
      </button>
      <button
        onClick={() => setActive(!active)}
        className={`bg-orange-500 text-black p-4 border bg-white`}
      >
        1
      </button>
      <button
        onClick={() => setActive(!active)}
        className={` p-4 border border-r-0 border-l-0 bg-white`}
      >
        2
      </button>
      <button
        onClick={() => setActive(!active)}
        className={` p-4 border bg-white`}
      >
        3
      </button>
      <button
        onClick={() => setActive(!active)}
        className={` p-4 border border-l-0 bg-white rounded-r-lg`}
      >
        Next
      </button>
    </div>
  );
};
