import React from "react";
import styled from "styled-components";
import { Wrapper } from "./Wrapper";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../features/theme/ThemeSwitcher";

const HeaderElement = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  background-color: var(--color-ui);
  box-shadow: var(--shadow);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--color-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
  line-height: 20px;
`;

function Header() {
  return (
    <HeaderElement>
      <Wrapper>
        <Container>
          <Title>Where is the world?</Title>
          <ThemeSwitcher />
        </Container>
      </Wrapper>
    </HeaderElement>
  );
}

export default Header;
