import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import FormControl from "../components/FormControl";
import Main from "../components/Main";
import ScrollButton from "../components/ScrollButton";

function HomePage({ countries, fetchCounties, error, errorMessage }) {
  const [filteredList, setFilteredList] = useState(countries);

  useEffect(() => {
    if (!countries.length && !error) fetchCounties();
    setFilteredList(countries);
  }, [fetchCounties, countries, error]);


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
    <Main>
      <FormControl onSearch={handleSearchAndFilter} />
      <CardList filteredList={filteredList} error={error} />
      <ScrollButton />
    </Main>
  );
}

export default HomePage;
