import React from "react";
import styled from "styled-components";
import { Wrapper } from "./Wrapper";

const Container = styled.main`
  margin: 40px 0;
`;

function Main({ children }) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

export default Main;
