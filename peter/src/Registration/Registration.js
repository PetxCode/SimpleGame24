import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { app } from "../base";
import firebase from "firebase";
import { AuthContext } from "./AuthState";
import defaultPix from "../dev.gif";

const Registration = () => {
  const { currentUser } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [img, setImg] = useState(defaultPix);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [nationality, setNationality] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [avatar, setAvatar] = useState("");
  const [toggle, setToggle] = useState(true);

  const [percentage, setPercentage] = useState(0);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const googleSignUp = async () => {
    const googleIn = new firebase.auth.GoogleAuthProvider();
    await app.auth().signInWithPopup(googleIn);
  };

  const onChangeImage = async (e) => {
    const file = e.target.files[0];
    const newImg = URL.createObjectURL(file);
    setImg(newImg);
    console.log(img);

    const fileRef = await app.storage().ref();
    const storageRef = fileRef.child("avatar/" + file.name).put(file);

    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const counter = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("This is the Counter: ", counter);
        setPercentage(counter);
        // console.log("data transferred: ", percentage);
      },
      (err) => console.log(err.message),

      () => {
        storageRef.snapshot.ref.getDownloadURL().then((URL) => {
          setAvatar(URL);
          console.log(URL);
          console.log("This is the Avatar: ", avatar);
        });
      }
    );
  };

  const signUp = async () => {
    await app.auth().createUserWithEmailAndPassword(email, password);
  };

  const postData = async () => {
    await app.firestore().collection("users").doc().set({
      email,
      password,
      avatar,
      phone,
      name,
    });
  };

  console.log(currentUser);

  return (
    <>
      <div>{currentUser && currentUser.displayName}</div>
      <div>{currentUser && currentUser.email}</div>
      <div>{currentUser && currentUser.password}</div>
      {toggle ? (
        <Container>
          <Wrapper>
            <Display src={img} />
            <Content>
              <Input
                placeholder="Enter Avatar"
                type="file"
                onChange={onChangeImage}
              />
              <Input
                placeholder="Enter Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Input
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                placeholder="Enter Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Input
                placeholder="Enter Address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
              <Input
                placeholder="Enter Phone Number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <Input
                placeholder="Enter Gender"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <Input
                placeholder="Enter DoB"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                }}
              />

              <Input
                placeholder="Enter Nationality"
                value={nationality}
                onChange={(e) => {
                  setNationality(e.target.value);
                }}
              />
              <Button onClick={signUp}>Sign Up</Button>
              <Button onClick={postData}>Sign Up Post</Button>
              <span>
                Already have an, then <p onClick={onToggle}>Sign In here</p>
              </span>

              <span>
                or sign up with <p onClick={googleSignUp}>Google</p>
              </span>
            </Content>
          </Wrapper>
        </Container>
      ) : (
        <Container>
          <Wrapper>
            <Content>
              <Input
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                placeholder="Enter Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button>Sign In</Button>
              <span>
                Already have an, then <p onClick={onToggle}>Sign Up here</p>
              </span>
              <span>
                or sign in with <p onClick={googleSignUp}>Google</p>
              </span>
            </Content>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Registration;

const Button = styled.button`
  width: 105%;
  height: 40px;
  background-color: lavender;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: 10px;
  border-radius: 5px;
`;

const Content = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;

  span {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 12px;
  }
  p {
    margin-left: 5px;
    margin-top: 0px;
    color: red;
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 10px;
  margin: 10px 0;

  ::placeholder {
    font-family: Poppins;
  }

  /* ::-webkit-file-upload-button {
    font-family: Poppins;
    color: white;
    background-color: red;
    width: 300px;
    height: 30px;
    outline: none;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
  } */
`;

const Display = styled.img`
  margin: 30px;
  width: 320px;
  height: 300px;
  border-radius: 5px;
  background-color: white;
  color: black;
  object-fit: cover;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 140px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;
