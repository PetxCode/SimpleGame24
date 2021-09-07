import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { app } from "../base";
import img from "./dev.gif";

const Header = () => {
  const hist = useHistory();
  const [displayImage, setDisplayImage] = useState(img);

  return (
    <Container>
      <Image src={displayImage} />
      <Wrapper>
        <Place to="/">Home</Place>
        <Place to="/register">Register</Place>
        <Place to="/setting">Setting</Place>
        {/* <Place to="/chart">Chart</Place> */}
        <Place
          onClick={() => {
            app.auth().signOut();
          }}
        >
          SignOut
        </Place>
      </Wrapper>
    </Container>
  );
};

export default Header;

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
