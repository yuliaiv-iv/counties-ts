import React from "react";
import styled from "styled-components";
import SelectOption from "../../UI/SelectOption";
import Input from "../../UI/Input";
import { IoSearch } from "react-icons/io5";
import { options } from "../../utils/config";

import { useSelector, useDispatch } from "react-redux";
import { setSearch, setRegion, selectControls } from "./controlSlice";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 24px;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

function FormControl() {
  const dispatch = useDispatch();
  const { search, region } = useSelector(selectControls);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleSelect = (region) => {
    dispatch(setRegion(region?.value || ""));
  };

  return (
    <Section>
      <Input value={search} onChange={handleSearch}>
        <IoSearch />
      </Input>
      <SelectOption
        placeholder="Filter by Region"
        value={options[region]}
        onChange={handleSelect}
        options={options}
      />
    </Section>
  );
}

export default FormControl;
