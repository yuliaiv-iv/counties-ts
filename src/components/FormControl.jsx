import React, { useState, useEffect } from "react";
import FormSearch from "./FormSearch";
import styled from "styled-components";
import SelectOption from "../UI/SelectOption";
import { options } from "../utils/config";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

function FormControl({ onSearch }) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const regionValue = region?.value || "";
    onSearch(search, regionValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, region]);
  
  return (
    <Section>
      <FormSearch search={search} setSearch={setSearch} />
      <SelectOption
        placeholder="Filter by Region"
        value={region}
        onChange={setRegion}
        options={options}
      />
    </Section>
  );
}

export default FormControl;

