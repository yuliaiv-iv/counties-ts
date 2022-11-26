const BASE_URL = "https://restcountries.com/v2/";

export const ALL_COUNTRIES =
  BASE_URL + "all?fields=name,capital,flags,population,region";

export const searchByCountry = (name) => BASE_URL + "name/" + name;

export const filterByCode = (codes) =>
  BASE_URL + "alpha?codes=" + codes.join(",");

export const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

export const arrayToString = (array, key) => {
  return array?.map((item) => item[key]);
};
