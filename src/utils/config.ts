import { Region } from "types";

const BASE_URL = "https://restcountries.com/v2/";

export const ALL_COUNTRIES =
  BASE_URL + "all?fields=name,capital,flags,population,region";

export const searchByCountry = (name: string) => BASE_URL + "name/" + name;

export const filterByCode = (codes: string[]) =>
  BASE_URL + "alpha?codes=" + codes.join(",");

export const regionOptions: Record<Region, {value: Region, label: Region}> = {
  'Africa': { value: 'Africa', label: 'Africa' },
  'Americas': { value: 'Americas', label: 'Americas' },
  'Asia': { value: 'Asia', label: 'Asia' },
  'Europe': { value: 'Europe', label: 'Europe' },
  'Oceania': { value: 'Oceania', label: 'Oceania' },
};

export const arrayToString = (array: {name: string[]}[]) => {
  return array?.map((item) => item.name).join(", ");
};

export const CapitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const errorMessage =
  "Sorry something went wrong during the request. There may be a connection issue or the server may be down. Please try again later";
