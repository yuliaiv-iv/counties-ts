import React from "react";
import styled from "styled-components";

const InputContainer = styled.label`
  background-color: var(--color-ui);
  width: 100%;
  max-width: 480px;
  display: flex;
  align-items: center;
  padding-left: 22px;
  color: var(--color-input);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  margin-bottom: 40px;

  @media (min-width: 767px) {
    margin-bottom: 0;
  }
`;

const InputElement = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
})`
  width: calc(100% - 13px);
  margin-left: 13px;
  border-radius: var(--radius);
  height: 48px;
  border: none;
  padding: 0 13px;
  background-color: var(--color-ui);
  color: var(--color-text);
  ::placeholder {
    font-size: var(--fs-sm);
    color: var(--color-input);
    line-height: 20px;
  }
  &:focus {
    box-shadow: var(--hover-shadow);
  }
`;

function Input({ children, value, onChange }) {
  return (
    <InputContainer>
      {children}
      <InputElement value={value || ""} onChange={onChange} />
    </InputContainer>
  );
}

export default Input;
