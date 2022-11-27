import React from "react";
import Main from "../components/Main";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section`
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 34px;
  color: var(--color-input);
  margin: 0;
`;

const LinkTo = styled(Link).attrs({
  to: "/",
})`
  color: var(--color-text);
  font-size: var(--fs-reg);
  font-weight: var(--fw-bold);
  line-height: 20px;

  &:hover {
    color: var(--color-input);
  }
`;

function NotFound() {
  return (
    <Main>
      <Container>
        <Title >Page Not Found</Title>
        <p>Go to <LinkTo>Home Page</LinkTo></p>
      </Container>
    </Main>
  );
}

export default NotFound;
