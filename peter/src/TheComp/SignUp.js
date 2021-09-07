import { Input } from "antd";
import { Button } from "antd/lib/radio";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { app } from "../base";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const hist = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [myImage, setMyImage] = useState("");

  const [authIn, setAuthIn] = useState(true);

  const toggle = () => {
    setAuthIn(!authIn);
  };

  const signUp = async () => {
    await app.auth().createUserWithEmailAndPassword(email, password);

    setPassword("");
    setEmail("");
  };

  const signIn = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
  };

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await app.auth().signInWithPopup(provider);

    hist.push("/");
  };

  const showImage = (e) => {
    const file = e.target.files[0];
    const showMe = URL.createObjectURL(file);
    setMyImage(showMe);
  };

  return (
    <>
      {authIn ? (
        <Container>
          <Wrapper>
            <InputContainer>
              <MyInput type="file" onChange={showImage} />
              <MyInput
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <MyInput
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <MyButton onClick={signUp}>sign up</MyButton>
              <span>
                or sign up with{" "}
                <p
                  onClick={() => {
                    signInWithGoogle();
                  }}
                >
                  Google
                </p>
              </span>
            </InputContainer>
            <Image src={myImage} />
          </Wrapper>
          <JustText>
            Already have an Account <span onClick={toggle}>Sign In</span> Here
          </JustText>
        </Container>
      ) : (
        <Container>
          <Wrapper>
            <InputContainer>
              <MyInput
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <MyInput
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <MyButton onClick={signIn}>sign in</MyButton>
              <span>
                or sign in with <p onClick={signInWithGoogle}>Google</p>
              </span>
            </InputContainer>
          </Wrapper>
          <JustText>
            Don't have an Account <span onClick={toggle}>Sign up</span> Here
          </JustText>
        </Container>
      )}
    </>
  );
};

export default SignUp;

const JustText = styled.div`
  margin-top: 50px;

  span {
    cursor: pointer;
    color: red;
    font-weight: bold;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  background-color: rgb(24, 24, 24);
  color: white;
`;
const Wrapper = styled.div`
  width: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 300px;
  height: 250px;
  object-fit: cover;
  background-color: lightblue;
  border-radius: 10px;
`;
const InputContainer = styled.div`
  width: 400px;
  span {
    display: flex;
    justify-content: center;

    p {
      margin-left: 5px;
      font-weight: bold;
      cursor: pointer;
      color: red;
    }
  }
`;
const MyButton = styled(Button)`
  margin: 5px;
  height: 45px;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
`;

const MyInput = styled(Input)`
  margin: 5px;
  height: 45px;
`;
