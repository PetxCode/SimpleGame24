import React, { useState, useEffect } from "react";

const GenRandCode = () => {
  const [rand, setRand] = useState(0);

  const getRand = (min, max) => {
    const res = Math.floor(Math.random() * (max - min + 1)) + min;

    setRand(res);
  };

  const getMyRand = () => {
    getRand(3, 15);
  };

  useEffect(() => {
    setInterval(() => {
      getMyRand();
    }, 2000);
  }, []);

  return (
    <div>
      <div>Code</div>
      <button
        onClick={() => {
          getRand(3, 15);
        }}
      >
        check
      </button>
      <div>{rand}</div>
    </div>
  );
};

export default GenRandCode;
