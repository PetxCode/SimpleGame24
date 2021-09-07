import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { app } from "../base";
import { AuthContext } from "./AuthProvider";

import img from "./dev.gif";

const TopPart = () => {
  const hist = useHistory();
  // const { currentUser } = useContext(AuthContext);
  const [displayImage, setDisplayImage] = useState(img);

  return (
    <Container>
      {/* {currentUser && currentUser ? (
        <Image src={currentUser.photoURL} />
      ) : (
        <Image src={displayImage} />
      )} */}
      <Wrapper>
        <Place to="/">Home</Place>
        <Place to="/view">View</Place>
        <Place to="/chart">Chart</Place>

        {/* {currentUser && currentUser ? (
          <Place
            onClick={() => {
              app.auth().signOut();
              hist.push("/sign");
            }}
          >
            Sign Out
          </Place>
        ) : (
          <Place to="/sign">Register</Place>
        )} */}
      </Wrapper>
    </Container>
  );
};

export default TopPart;

const Place = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  margin: 20px 10px;
  color: white;
`;

const Container = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 120px;

  background-color: rgb(24, 24, 24);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50px;
  border: 2px solid white;
`;
