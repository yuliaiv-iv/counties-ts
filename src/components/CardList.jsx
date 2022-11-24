import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Wrapper } from "./Wrapper";
import { useNavigate } from "react-router-dom";

const ListSection = styled.ul`
  width: 100%;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;

  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 75px;
  }
`;

function CardList({ filteredList }) {
  const navigate = useNavigate();

  const handleClickOnCard = (param) => {
    navigate(`/country/${param}`);
  };
  return (
    <Wrapper>
      <ListSection>
        {filteredList.map(({ flags, name, population, region, capital }) => {
          const countryDescription = {
            image: flags.png,
            name: name,
            subInfo: [
              {
                title: "Population",
                description: population,
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
    </Wrapper>
  );
}

export default CardList;
