import React, { useState, useEffect, useRef } from "react";

import "./Wilmer.css";

const WilmerBuild = () => {
  const myRef = useRef(0);

  const [res, setRes] = useState(0);
  const [click, setClick] = useState(0);

  const showRes = (min, max) => {
    setRes(Math.floor(Math.random() * (max - min + 1)) + min);
  };

  useEffect(() => {
    myRef.current = res;
  }, [res]);

  useEffect(() => {
    setInterval(() => {
      showRes(1, 7);
    }, 3000);
  }, []);

  return (
    <div className="wilmer_container">
      <div className="wilmer_containerName">CodeLab</div>
      <div className="wilmer_containerDesc">This is my First Build</div>
      <div>value: {myRef.current}</div>
      <div className="wilmer_containerRow">
        <div className="wilmer_containerRowHolder">
          <div className="wilmer_containerRowBox">
            <div className="wilmer_containerRowBoxHolder">
              <div
                className="wilmer_box"
                onClick={() => {
                  setClick(0);
                  console.log(click);
                }}
              >
                0
              </div>
              <div
                className="wilmer_box"
                onClick={() => {
                  setClick(1);
                  console.log(click);
                }}
              >
                1
              </div>
              <div
                className="wilmer_box"
                onClick={() => {
                  setClick(2);
                  console.log(click);
                }}
              >
                2
              </div>
            </div>
          </div>
          <div className="wilmer_containerRowBoxName">Me</div>
        </div>
        <div className="wilmer_containerRowHolder">
          <div className="wilmer_containerRowBox">box2</div>
          <div className="wilmer_containerRowBoxName">Computer</div>
        </div>
      </div>
      <div className="wilmer_containerResult">
        <div>Result</div>
        <div className="wilmer_containerShowResultPut">
          <div className="wilmer_containerShowResult">{click}</div>
          <div className="wilmer_containerShowResult">{res}</div>
        </div>
        <div>
          {res === click ? <div>You're Right</div> : <div>You're Wrong</div>}
        </div>
      </div>
    </div>
  );
};

export default WilmerBuild;
