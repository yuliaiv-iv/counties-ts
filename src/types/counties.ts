import { Region } from "./regions";

type Currency = {
  name: string[];
};

type Language = {
  name: string[];
  nativeName: string;
};

export type Country = {
  name: string;
  nativeName: string;
  flags: { png: string; svg: string };
  region: Region;
  subregion: string;
  population: number;
  capital: string;
  topLevelDomain: string[];
  borders: string[];
  currencies: Currency[];
  languages: Language[];
};

export type CountryInfo = {
  image: string;
  name: string;
  subInfo: { title: string; description: string }[];
};
