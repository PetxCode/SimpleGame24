import React from "react";
import styled from "styled-components";

const AboutPage = () => {
  return (
    <Container>
      <Wrapper>This is The About Page</Wrapper>
    </Container>
  );
};

export default AboutPage;

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
