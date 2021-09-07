import React from "react";
import styled from "styled-components";

const MixChange = ({ img, text, sub, chg }) => {
  return (
    <Container>
      <Wrapper chg={chg}>
        <Image src={img} />
        <Text>
          <HeaderTag>{text}</HeaderTag>
          <Span>{sub}</Span>
        </Text>
      </Wrapper>
    </Container>
  );
};

export default MixChange;

const NewFlex = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  background-color: rgb(24, 24, 24);
  color: white;
  padding-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;
const Wrapper = styled.div`
  /* height: 300px; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ chg }) => (chg ? "row" : "row-reverse")};
`;
const Image = styled.img`
  width: 400px;
  height: 250px;
  border-radius: 10px;
  margin: 20px;
`;
const Text = styled.div`
  width: 400px;
  margin: 20px;
`;
const HeaderTag = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
const Span = styled.div`
  margin-top: 10px;
`;
