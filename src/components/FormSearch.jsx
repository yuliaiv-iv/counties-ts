import React from "react";
import { IoSearch } from "react-icons/io5";
import Input from "../UI/Input";


function FormSearch({ search, setSearch }) {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Input value={search} onChange={handleSearch}>
      <IoSearch />
    </Input>
  );
}

export default FormSearch;
