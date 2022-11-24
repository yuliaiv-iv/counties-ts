import React from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const InputContainer = styled.label`
  background-color: var(--color-ui);
  padding: 6px 32px;
  display: flex;
  align-items: center;
  margin: 24px 0 40px;
  color: var(--color-input);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
`;

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
})`
  margin-left: 26px;
  height: 36px;
  border: none;
  width: 100%;
  background-color: var(--color-ui);
  ::placeholder {
    color: var(--color-input);
    line-height: 20px;
  }
`;

function FormSearch({ search, setSearch }) {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <InputContainer>
      <IoSearch />
      <Input value={search || ""} onChange={handleSearch} />
    </InputContainer>
  );
}

export default FormSearch;
