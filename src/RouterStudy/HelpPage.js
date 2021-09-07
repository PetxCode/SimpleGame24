import React from "react";
import styled from "styled-components";

const HelpPage = () => {
  return (
    <Container>
      <Wrapper>This is The Help Page</Wrapper>
    </Container>
  );
};

export default HelpPage;

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
