import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import FormControl from "../components/FormControl";

function HomePage({ countries, fetchCounties }) {
  const [filteredList, setFilteredList] = useState(countries);

  useEffect(() => {
    if (!countries.length) fetchCounties();
    setFilteredList(countries);
  }, [fetchCounties, countries]);

  const handleSearchAndFilter = (search, region) => {
    let filteredCounties = [...countries];

    if (region) {
      filteredCounties = filteredCounties.filter((country) =>
        country.region.includes(region)
      );
    }
    if (search) {
      filteredCounties = filteredCounties.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredList(filteredCounties);
  };

  return (
    <>
      <FormControl onSearch={handleSearchAndFilter} />
      <CardList filteredList={filteredList} />
    </>
  );
}

export default HomePage;
