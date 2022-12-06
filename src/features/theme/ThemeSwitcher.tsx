import { useEffect } from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { CapitalizeFirstLetter } from "../../utils/config";

import { useSelector } from "react-redux";
import { selectTheme, setTheme } from "./themeSlice";
import { useAppDispatch } from "store";

const Switcher = styled(Button)`
  && {
    box-shadow: none;
    padding: 0;
  }
`;

function ThemeSwitcher() {
  const dispatch = useAppDispatch();
  const theme = useSelector(selectTheme);

  useEffect(() => {
    const lastTheme = localStorage.getItem("themeMode");
    document.body.setAttribute("data-theme", lastTheme || "light");
  }, [theme]);

  const switchTheme = () => {
    const renderedTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(renderedTheme));
    localStorage.setItem("themeMode", renderedTheme);
  };

  return (
    <Switcher
      text={`${CapitalizeFirstLetter(theme)} Mode`}
      onClick={switchTheme}
    >
      {theme === "light" ? <IoMoonOutline /> : <IoMoon />}
    </Switcher>
  );
}

export default ThemeSwitcher;
