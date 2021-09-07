import { Button, Input } from "antd";
import React, { useState, useEffect, useRef } from "react";
import img from "../img/1.png";
import img1 from "../img/2.png";
import img2 from "../img/3.png";
import img3 from "../img/4.png";

const MyStyle = () => {
  const myRef = useRef();
  const myRef1 = useRef();
  const myRef2 = useRef();
  const myRef3 = useRef();

  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");
  const [myImage, setMyImage] = useState("");
  const [myQuote, setMyQuote] = useState([
    "Find the best answer to your technical question, help others answer theirs",
    "Want a secure, private space for your technical knowledge?",
    "A community-based space to find and contribute answers to technical challenges",
    "A web-based platform to increase productivity, decrease cycle times, accelerate time to market, and protect institutional knowledge.",
  ]);

  const [loadImage, setLoadImage] = useState([img, img1, img2, img3]);

  const color = ["gray", "lightgray", "lightgray", "lightgray"];
  const color1 = ["lightgray", "gray", "lightgray", "lightgray"];
  const color2 = ["lightgray", "lightgray", "gray", "lightgray"];
  const color3 = ["lightgray", "lightgray", "lightgray", "gray"];

  const add = () => {
    setCounter(counter + 1);
  };

  const minus = () => {
    if (counter <= 0) {
      setCounter(myQuote.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  const addQuote = () => {
    setMyQuote([...myQuote, text]);
    setText("");
  };

  useEffect(() => {
    setInterval(() => {
      setCounter((el) => el + 1);
    }, 3000);
  }, []);

  useEffect(() => {
    myRef.current.style.backgroundColor = color[counter % color.length];
    myRef.current.style.transition = "all 350ms";
  }, [counter]);
  useEffect(() => {
    myRef1.current.style.backgroundColor = color1[counter % color1.length];
    myRef1.current.style.transition = "all 350ms";
  }, [counter]);
  useEffect(() => {
    myRef2.current.style.backgroundColor = color2[counter % color2.length];
    myRef2.current.style.transition = "all 350ms";
  }, [counter]);
  useEffect(() => {
    myRef3.current.style.backgroundColor = color3[counter % color3.length];
    myRef3.current.style.transition = "all 350ms";
  }, [counter]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          marginTop: "100px",
          width: "100%",
          height: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "60%",
            height: "10vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Input
            placeholder="Enter your faviorite QUOTE"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <Button onClick={addQuote}>Add</Button>
        </div>
        <div
          style={{
            marginTop: "60px",
          }}
        >
          <img
            style={{
              width: "300px",
              heigth: "100px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            src={loadImage[counter % loadImage.length]}
          />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Button type="primary" danger onClick={minus}>
            -
          </Button>
          <div
            style={{
              width: "60%",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div> {myQuote[counter % myQuote.length]}</div>
            <div
              style={{
                marginTop: "30px",
                display: "flex",
              }}
            >
              <div
                ref={myRef}
                style={{
                  height: "10px",
                  width: "10px",
                  borderRadius: "5px",
                  margin: "0 5px",
                }}
              />
              <div
                ref={myRef1}
                style={{
                  height: "10px",
                  width: "10px",
                  borderRadius: "5px",
                  margin: "0 5px",
                }}
              />
              <div
                ref={myRef2}
                style={{
                  height: "10px",
                  width: "10px",
                  borderRadius: "5px",
                  margin: "0 5px",
                }}
              />
              <div
                ref={myRef3}
                style={{
                  height: "10px",
                  width: "10px",
                  borderRadius: "5px",
                  margin: "0 5px",
                }}
              />
            </div>
          </div>
          <Button type="primary" onClick={add}>
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyStyle;
