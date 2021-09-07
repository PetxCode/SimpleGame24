import React, { useState, useEffect, Fragment } from "react";
import "./myCSS.css";
import img from "../img/1.png";
import img1 from "../img/2.png";
import img2 from "../img/4.png";
import img3 from "../img/2.png";
import img4 from "../img/3.png";
import avatar from "../img/img.png";
import { BiCommentDetail } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { Button, Input } from "antd";
import moment from "moment";

const Test = () => {
  const [text, setText] = useState("");
  const [showImage, setShowImage] = useState(avatar);

  const [myData, setMyData] = useState([
    {
      id: 1,
      title: "I love simple codes",
      icon: "NO",
      time: "3sec ago",
      image: img3,
    },
    {
      id: 2,
      title: "I love soft codes",
      icon: "JS",
      time: "6sec ago",
      image: img1,
    },
    {
      id: 3,
      title: "I love my job",
      icon: "RC",
      time: "90sec ago",
      image: img2,
    },
    {
      id: 4,
      title: "I love hard codes",
      icon: "MN",
      time: "65sec ago",
      image: img4,
    },
  ]);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const imgs = URL.createObjectURL(file);
    setShowImage(imgs);
  };

  const deleteItem = (id) => {
    const removeItem = myData.filter((el) => el.id !== id);
    setMyData(removeItem);
  };

  const addItem = () => {
    const file = {
      time: Date.now(),
      image: showImage,
      title: text,
      icon: text.charAt(0),
      id: myData.length + 1,
    };

    setMyData([...myData, file]);

    setText("");
    setShowImage(avatar);
  };

  useEffect(() => {
    const saveData = JSON.parse(localStorage.getItem("storage"));
    setMyData(saveData);
  }, []);

  useEffect(() => {
    localStorage.setItem("storage", JSON.stringify(myData));
  }, [myData]);

  return (
    <>
      <div className="inputContainer">
        <div className="inputLayOut">
          <div className="input24">
            <Input className="input" type="file" onChange={uploadImage} />
            <Input
              className="input"
              placeholder="Enter the Title"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <Button
              className="inputButton"
              type="primary"
              danger
              onClick={addItem}
            >
              Add
            </Button>
          </div>
          <div className="inputImage">
            <img
              src={showImage}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      <div className="mainContainer">
        {myData.map((props) => (
          <div className="container" key={props.id}>
            <div className="containerHolder">
              <div className="containerIcon">{props.icon}</div>
              <div className="containerIcon">
                <AiFillDelete
                  style={{
                    color: "rgb(253, 103, 103)",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    console.log("I am because, i am!");
                    deleteItem(props.id);
                  }}
                />
              </div>
            </div>
            <div className="containerTitle">{props.title}</div>
            <div className="containerTime">{moment(props.time).fromNow()}</div>
            <div className="containerImage">
              <img className="containerImage1" src={props.image} />
            </div>
            <div className="containerIcons">
              <BiCommentDetail />
              <BsFillBookmarkFill />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Test;
