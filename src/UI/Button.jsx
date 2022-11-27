import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: var(--color-ui);
  color: var(--color-text);
  font-size: var(--fs-sm);
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  font-weight: var(--fw-light);
  line-height: 20px;
  padding: ${(props) => props.padding || "6px 24px"};

  &:hover {
    box-shadow: var(--hover-shadow);
  }
  svg {
    margin-right: 10px;
  }

  @media (min-width: 767px) {
    padding: ${(props) => props.padding || "10px 40px"};
  }
`;
function Button({ text, children, type, padding, onClick, className }) {
  return (
    <Btn type={type} padding={padding} onClick={onClick} className={className}>
      {children} {text}
    </Btn>
  );
}

export default Button;
