import React, { useState, useEffect, useRef } from "react";
import "./SimpleGame.css";
import img from "./assets/0.png";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import win from "./assets/trophy.png";
import BackgroundAnimation from "./BackgroundAnimation";

const SimpleGame = () => {
  const myRef = useRef(0);
  const [computer, setComputer] = useState(0);
  const [me, setMe] = useState(0);

  const genRand = (min, max) => {
    const myRes = Math.floor(Math.random() * (max - min + 1)) + min;
    setComputer(myRes);
  };

  useEffect(() => {
    myRef.current = computer;
  }, [computer]);

  useEffect(() => {
    setInterval(() => {
      genRand(0, 5);
    }, 5000);
  }, []);

  return (
    <div className="container">
      <div className="containerTitle">Simple Game</div>
      <div className="containerDesc">
        Developed by CodeLab Crew | Previous Guess: {myRef.current}
      </div>

      <div className="containerBoxHolder">
        <div className="containerBoxHolderContainer">
          <div className="containerBox">
            <img
              src={img}
              className="containerBoxRound"
              onClick={() => {
                setMe(0);
              }}
            />

            <img
              src={img1}
              className="containerBoxRound"
              onClick={() => {
                setMe(1);
              }}
            />

            <img
              src={img2}
              className="containerBoxRound"
              onClick={() => {
                setMe(2);
              }}
            />

            <img
              src={img3}
              className="containerBoxRound"
              onClick={() => {
                setMe(3);
              }}
            />
            <img
              src={img4}
              className="containerBoxRound"
              onClick={() => {
                setMe(4);
              }}
            />

            <img
              src={img5}
              className="containerBoxRound"
              onClick={() => {
                setMe(5);
              }}
            />
          </div>
          <div>Me</div>
        </div>
        <div className="containerBoxHolderContainer">
          <div className="containerBox">
            {myRef.current === 0 ? (
              <img src={img} className="containerBoxRound" />
            ) : myRef.current === 1 ? (
              <img src={img1} className="containerBoxRound" />
            ) : myRef.current === 2 ? (
              <img src={img2} className="containerBoxRound" />
            ) : myRef.current === 3 ? (
              <img src={img3} className="containerBoxRound" />
            ) : myRef.current === 4 ? (
              <img src={img4} className="containerBoxRound" />
            ) : myRef.current === 5 ? (
              <img src={img5} className="containerBoxRound" />
            ) : null}
          </div>
          <div>Computer</div>
        </div>
      </div>
      <div className="containerResult">Result</div>
      <div className="containerResultDisplay">
        {me === computer ? (
          <div>Woo, You're Right </div>
        ) : (
          <div>Hmmm, You're Wrong </div>
        )}
      </div>
      <div className="containerResultDisplay">
        {me === computer ? (
          <div>
            <img src={win} className="win" />
          </div>
        ) : null}
      </div>
      <div>Hello</div>
      <BackgroundAnimation />
    </div>
  );
};

export default SimpleGame;
