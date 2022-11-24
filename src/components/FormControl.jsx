import React, { useState, useEffect } from "react";
// import { FormSelect } from "./FormSelect";
import FormSearch from "./FormSearch";
import Select from "react-select";
import styled from "styled-components";

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

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

function FormControl({onSearch}) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  
  useEffect(() => {
    const regionValue = region?.value || "";
    onSearch(search, regionValue)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, region])
  return (
    <Section>
      <FormSearch search={search} setSearch={setSearch} />
      <Select
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
        styles={{
          container: (baseStyles) => ({ ...baseStyles, width: "100%" }),
          control: (baseStyles, state) => ({
            ...baseStyles,
          }),
          dropdownIndicator: () => ({
            display: "none",
          }),
          indicatorSeparator: () => {},
        }}
        options={options}
      />
    </Section>
  );
}


export default FormControl;

const FormSelect = styled(Select).attrs({
  placeholder: "Search for a country...",
  styles: {
    control: (baseStyles) => ({
      // console.log(baseStyles)
      ...baseStyles,
      // backgroundColor: "var(--colors-ui-base)",
      // color: "var(--colors-text)",
      // borderRadius: "var(--radii)",
      // padding: "0.25rem",
      // border: "none",
      // boxShadow: "var(--shadow)",
      // height: "50px",
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      cursor: "pointer",
      color: "var(--colors-text)",
      backgroundColor: state.isSelected
        ? "var(--colors-bg)"
        : "var(--colors-ui-base)",
    }),
  },
});
