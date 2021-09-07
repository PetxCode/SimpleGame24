import React, { useState, useEffect, useRef } from "react";
import { Input, Button } from "antd";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";

const MyComponent = () => {
  const myRef = useRef();
  const myRef1 = useRef();
  const myRef2 = useRef();
  const myRef3 = useRef();

  const [word, setWord] = useState([
    "Start again",
    "The world is ours",
    "Let's start all over again",
    "Tomorrow will be great",
  ]);

  const [slider, setSlider] = useState([img1, img2, img3, img4]);

  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");
  const [myImg, setMyImg] = useState("");

  const color = ["gray", "lightgray", "lightgray", "lightgray"];
  const color1 = ["lightgray", "gray", "lightgray", "lightgray"];
  const color2 = ["lightgray", "lightgray", "gray", "lightgray"];
  const color3 = ["lightgray", "lightgray", "lightgray", "gray"];

  const addImage = (e) => {
    const file = e.target.files[0];
    const res = URL.createObjectURL(file);
    setMyImg(res);
  };

  const addToFile = () => {
    setWord([...word, text]);

    setSlider([...slider, myImg]);
  };

  const add = () => {
    setCounter(counter + 1);
  };

  const minus = () => {
    if (counter <= 0) {
      setCounter(word.length - 1);
    } else {
      setCounter(counter - 1);
    }
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
    myRef1.current.style.backgroundColor = color1[counter % color.length];
    myRef1.current.style.transition = "all 350ms";
  }, [counter]);

  useEffect(() => {
    myRef2.current.style.backgroundColor = color2[counter % color.length];
    myRef2.current.style.transition = "all 350ms";
  }, [counter]);

  useEffect(() => {
    myRef3.current.style.backgroundColor = color3[counter % color.length];
    myRef3.current.style.transition = "all 350ms";
  }, [counter]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div>
        <div
          style={{
            width: "800px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button type="primary" danger onClick={minus}>
            -
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                margin: "20px 0px",
              }}
            >
              <div style={{ margin: "40px 0" }}>
                <Input
                  onChange={addImage}
                  type="file"
                  style={{ margin: "10px 0" }}
                />
                <Input
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  placeholder="Enter Quote"
                  style={{ margin: "10px 0" }}
                />
                <Button onClick={addToFile}>Add</Button>
              </div>
              {word[counter % word.length]}
            </div>
            <img
              src={slider[counter % slider.length]}
              alt="image"
              style={{
                width: "500px",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <div style={{ display: "flex" }}>
              <div
                ref={myRef}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "5px",
                  margin: "0 5px",
                  // backgroundColor: "red",
                }}
              />
              <div
                ref={myRef1}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "5px",
                  margin: "0 5px",
                  // backgroundColor: "red",
                }}
              />
              <div
                ref={myRef2}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "5px",
                  margin: "0 5px",
                  // backgroundColor: "red",
                }}
              />
              <div
                ref={myRef3}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "5px",
                  margin: "0 5px",
                  // backgroundColor: "red",
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

export default MyComponent;
