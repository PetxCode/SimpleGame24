import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import "./HomeScreen.css";
import { addCount, subCount } from "./addCounter";

const HomeScreen = ({ add, sub }) => {
  const count = useSelector((state) => state.myReducer.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="containerTitle">Let's Build</div>
      <div className="containerResult">result: {count}</div>
      <div className="containerButtonHolder">
        <button
          className="containerButton"
          onClick={() => {
            dispatch(addCount());
            console.log("I am Click");
          }}
        >
          Add
        </button>
        <button className="containerButton">Sub</button>
      </div>
    </div>
  );
};

export default HomeScreen;
