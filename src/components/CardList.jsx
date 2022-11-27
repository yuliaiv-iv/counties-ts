import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { errorMessage } from "../utils/config";

const ListSection = styled.ul`
  width: 100%;
  padding: 0;
  list-style: none;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 264px);
  justify-content: center;
  gap: 40px;

  @media (min-width: 1438px) {
    gap: 40px 74px;
  }
`;

const ErrorMsg = styled.h3`
  color: var(--color-text);
  font-size: var(--fs-large);
  font-weight: var(--fw-light);
`;

function CardList({ filteredList, error }) {
  const navigate = useNavigate();

  const handleClickOnCard = (param) => {
    navigate(`/country/${param}`);
  };

  return (
    <>
      {error ? (
        <ErrorMsg>{errorMessage}</ErrorMsg>
      ) : (
        <ListSection>
          {filteredList.map(({ flags, name, population, region, capital }) => {
            const countryDescription = {
              image: flags.png,
              name: name,
              subInfo: [
                {
                  title: "Population",
                  description: population.toLocaleString("en-US"),
                },
                {
                  title: "Region",
                  description: region,
                },
                {
                  title: "Capital",
                  description: capital,
                },
              ],
            };
            return (
              <Card
                key={name}
                {...countryDescription}
                onClick={() => handleClickOnCard(name)}
              />
            );
          })}
        </ListSection>
      )}
    </>
    // <ListSection>
    //   {filteredList.map(({ flags, name, population, region, capital }) => {
    //     const countryDescription = {
    //       image: flags.png,
    //       name: name,
    //       subInfo: [
    //         {
    //           title: "Population",
    //           description: population.toLocaleString("en-US"),
    //         },
    //         {
    //           title: "Region",
    //           description: region,
    //         },
    //         {
    //           title: "Capital",
    //           description: capital,
    //         },
    //       ],
    //     };
    //     return (
    //       <Card
    //         key={name}
    //         {...countryDescription}
    //         onClick={() => handleClickOnCard(name)}
    //       />
    //     );
    //   })}
    // </ListSection>
  );
}

export default CardList;
