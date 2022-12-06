import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { IoArrowUp } from "react-icons/io5";

const ScrollBtn = styled(Button)`
  position: fixed;
  bottom: 30px;
  && {
    border-radius: 50%;
    border: solid var(--color-text) 1px;
    background: transparent;
    svg {
      margin: 0;
      width: 30px;
      height: 30px;
    }
  }
`;

function ScrollButton() {
  const [visibleBtn, setVisibleBtn] = useState(false);

  const handleShowScrollBtn = () => {
    if (window.scrollY > 400) {
      setVisibleBtn(true);
    } else {
      setVisibleBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShowScrollBtn);
    return () => window.removeEventListener("keydown", handleShowScrollBtn);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visibleBtn ? (
        <ScrollBtn onClick={scrollToTop} padding="20px">
          <IoArrowUp />
        </ScrollBtn>
      ) : null}
    </>
  );
}

export default ScrollButton;
