import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { app } from "../base";
import { Instagram } from "react-content-loader";

const ViewScreen = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    await app
      .firestore()
      .collection("myMovies")
      .onSnapshot((snapshot) => {
        const r = [];
        snapshot.forEach((doc) => {
          r.push({ ...doc.data(), id: doc.id });
        });
        setData(r);
      });
  };

  useEffect(() => {
    setInterval(() => {}, 5000);

    fetchData();
  }, []);

  return (
    <Container>
      {!data && (
        <div>
          <Instagram
            speed={1}
            height={400}
            width={300}
            viewBox="10 10 300 200"
            backgroundColor="lightgray"
            foregroundColor="gray"
          />
          <Instagram
            speed={2}
            height={400}
            width={300}
            viewBox="10 10 300 200"
            backgroundColor="lightgray"
            foregroundColor="gray"
          />
          <Instagram
            speed={2}
            height={400}
            width={300}
            viewBox="10 10 300 200"
            backgroundColor="lightgray"
            foregroundColor="gray"
          />
        </div>
      )}

      {data &&
        data.map((props) => (
          <Wrapper>
            <Image src={props.cardImg} />
            <Tag>{props.type}</Tag>
            <BgImg src={props.backgroundImg} />
            <Title>{props.title}</Title>
          </Wrapper>
        ))}
    </Container>
  );
};

export default ViewScreen;

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-bottom: 40px;
  object-fit: cover;
`;
const BgImg = styled.img`
  /* margin: 10px; */
  width: 275px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;
const Tag = styled.div``;
const Title = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 10px;
  font-weight: 500;
  font-size: 20px;
`;

const Container = styled.div`
  color: white;
  background-color: rgb(24, 24, 24);
  height: 100%;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
`;
const Wrapper = styled.div`
  width: 300px;
  height: 450px;
  border-radius: 10px;
  border: 1px solid whitesmoke;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;

  &:hover {
    /* border: 2px solid white; */
  }
`;
