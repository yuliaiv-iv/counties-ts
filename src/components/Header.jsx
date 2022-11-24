import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { Wrapper } from "./Wrapper";
import { Link } from "react-router-dom";

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

const Switcher = styled.div`
  display: flex;
  cursor: pointer;
  line-height: 16px;
  p {
    color: var(--color-text);
    font-size: var(--fs-xs);
    font-weight: var(--fw-light);
    margin: 0;
    margin-left: 10px;
    text-transform: capitalize;
  }
`;

function Header() {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <HeaderElement>
      <Wrapper>
        <Container>
          <Title>Where is the world?</Title>
          <Switcher onClick={switchTheme}>
            {theme === "light" ? <IoMoonOutline /> : <IoMoon />}
            <p>{theme} Mode</p>
          </Switcher>
        </Container>
      </Wrapper>
    </HeaderElement>
  );
}

export default Header;
