import styled from "styled-components";
import SelectOption, { CountryOption } from "../../UI/SelectOption";
import Input from "../../UI/Input";
import { IoSearch } from "react-icons/io5";
import { regionOptions } from "../../utils/config";

import { useSelector } from "react-redux";
import { setSearch, setRegion, selectControls } from "./controlSlice";
import { useAppDispatch } from "store";
import { SingleValue } from "react-select";

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
  const dispatch = useAppDispatch();
  const { search, region } = useSelector(selectControls);
  const options = Object.values(regionOptions);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  const handleSelect = (region: SingleValue<CountryOption>) => {
    if (region) {
      dispatch(setRegion(region.value || ""));
    } else {
      dispatch(setRegion(""));
    }
  };

  return (
    <Section>
      <Input value={search} onChange={handleSearch}>
        <IoSearch />
      </Input>
      <SelectOption
        placeholder="Filter by Region"
        value={region ? regionOptions[region]: ""}
        onChange={handleSelect}
        options={options}
      />
    </Section>
  );
}

export default FormControl;
