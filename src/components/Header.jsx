import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { CapitalizeFirstLetter } from "../utils/config";
import { Wrapper } from "./Wrapper";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

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

const Switcher = styled(Button)`
  && {
    box-shadow: none;
    padding: 0;
  }
`;

function Header() {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    const renderTheme = theme === "light" ? "dark" : "light";
    setTheme(renderTheme);
    window.localStorage.setItem("themeMode", renderTheme);
  };

  useEffect(() => {
    const lastTheme = window.localStorage.getItem("themeMode");
    document.body.setAttribute("data-theme", lastTheme);
  }, [theme]);

  return (
    <HeaderElement>
      <Wrapper>
        <Container>
          <Title>Where is the world?</Title>
          <Switcher
            text={`${CapitalizeFirstLetter(theme)} Mode`}
            onClick={switchTheme}
            // tabIndex="2"
          >
            {theme === "light" ? <IoMoonOutline /> : <IoMoon />}
          </Switcher>
        </Container>
      </Wrapper>
    </HeaderElement>
  );
}

export default Header;
