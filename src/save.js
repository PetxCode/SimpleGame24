import React, { useState, useEffect, useRef } from "react";
import "antd/dist/antd.css";
import { Button, Input } from "antd";

const App = () => {
  const myRef = useRef();

  const [counter, setCounter] = useState(0);

  const [mins, setMins] = useState(0);
  const [sec, setSec] = useState(0);

  const [myRand, setMyRand] = useState(0);

  const [text, setText] = useState("");

  const [word, setWord] = useState([
    "Colin said that, his name means People's victory",
    "Miracle's best quote is, Life is Beautiful",
    "Mr Joe best Quote is, I am a success",
    "Mr Confident is saying that, He is Coding!",
  ]);

  const [move, setMove] = useState(0);

  const addInput = () => {
    setWord([...word, text]);
  };

  const addCounter = () => {
    setCounter(counter + 1);
  };

  const minusCounter = () => {
    if (counter <= 0) {
      setCounter(word.length);
    } else {
      setCounter(counter - 1);
    }
  };

  const color = ["black", "gray", "gray", "gray"];
  const color1 = ["gray", "black", "gray", "gray"];
  const color2 = ["gray", "gray", "black", "gray"];
  const color3 = ["gray", "gray", "gray", "black"];

  useEffect(() => {
    setInterval(() => {
      setCounter((el) => el + 1);
    }, 3000);
  }, []);

  useEffect(() => {
    myRef.current.style.backgroundColor =
      color[Math.floor(Math.random * color.length)];
  }, [counter]);

  // useEffect(() => {
  //   console.log("Just checking Out");
  //   setInterval(() => {
  //     console.log("I love coding");
  //   }, 1000);
  // }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     setSec((el) => el + 1);
  //     console.log(sec);
  //   }, 1000);
  // }, []);

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div>
        {mins}mins : {sec % 10}sec
      </div>
      <div>{counter}</div>
      <div>{word[1]}</div>

      <div
        style={{
          color: "red",
        }}
      >
        {Math.floor(Math.random() * 4)}
      </div>
      <div
        style={{
          color: "red",
        }}
      >
        This is the Random value: {myRand}
      </div>

      <div>
        <Input
          placeholder="Enter your Statement"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            addInput();
            console.log(text);
          }}
        >
          Add
        </Button>
      </div>

      <div
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
          width: "100%",
          height: "100vh",
        }}
      >
        <Button onClick={minusCounter} type="primary" danger>
          -
        </Button>
        <div> {word[counter % word.length]} </div>
        <Button onClick={addCounter} type="primary">
          +
        </Button>
      </div>
      <div>
        <div
          ref={myRef}
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "10px",
          }}
        />
      </div>
      <Button
        onClick={() => {
          setMyRand(Math.floor(Math.random() * 10));
        }}
      >
        Change Word
      </Button>
    </div>
  );
};

export default App;
