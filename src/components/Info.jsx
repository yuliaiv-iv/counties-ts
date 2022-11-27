import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { arrayToString, filterByCode, errorMessage } from "../utils/config";
import { useFetch } from "../hooks/useFetch";
import InfoText from "../UI/InfoText";
import Button from "../UI/Button";

const Details = styled.article`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 40px;
  max-width: 450px;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: max-content;
    gap: 40px;
  }
  @media (min-width: 1150px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: max-content;
    gap: 140px;
  }
`;
const DetailsImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: var(--radius);

  @media (min-width: 900px) {
    align-self: center;
  }
`;
const DetailsTitle = styled.h2`
  font-size: var(--fs-xl);
  font-weight: var(--fw-bold);
  line-height: 30px;
  margin: 40px 0 16px;
  @media (min-width: 900px) {
    margin: 0;
    margin-bottom: 20px;
  }
`;
const ListGroup = styled.div`
  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
  }
`;
const DetailsSubTitle = styled.h3`
  font-size: var(--fs-reg);
  font-weight: var(--fw-normal);
  line-height: 24px;
  margin: 0;
  margin: 30px 0;
`;
const DetailsList = styled.ul`
  padding: 0;
  list-style: none;
`;
const DetailsListItem = styled.li`
  padding: 3px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ErrorMsg = styled.h3`
  color: var(--color-text);
  font-size: var(--fs-large);
  font-weight: var(--fw-light);
`;

function Info({
  name,
  nativeName,
  flag,
  capital,
  population,
  region,
  subregion,
  topLevelDomain,
  currencies = [],
  languages = [],
  borders = [],
  error,
}) {
  const navigate = useNavigate();
  const {
    data: neighborBorders,
    fetchData: fetchNeiborBorders,
    isLoading,
  } = useFetch([], filterByCode(borders));

  useEffect(() => {
    if (borders.length === 0) return;
    fetchNeiborBorders();
  }, [fetchNeiborBorders, borders]);

  const handleNeighborBorders = (name) => {
    navigate(`/country/${name}`);
  };

  return (
    <Details>
      {error ? (
        <ErrorMsg>{errorMessage}</ErrorMsg>
      ) : (
        <>
          <DetailsImg src={flag} alt={name} />
          <div>
            <DetailsTitle>{name}</DetailsTitle>
            <ListGroup>
              <DetailsList>
                <DetailsListItem>
                  <InfoText title="Native Name" description={nativeName} />
                </DetailsListItem>
                <DetailsListItem>
                  <InfoText
                    title="Population"
                    description={population?.toLocaleString("en-US")}
                  />
                </DetailsListItem>
                <DetailsListItem>
                  <InfoText title="Region" description={region} />
                </DetailsListItem>
                <DetailsListItem>
                  <InfoText title="Sub Region" description={subregion} />
                </DetailsListItem>
                <DetailsListItem>
                  <InfoText title="Capital" description={capital || "N/A"} />
                </DetailsListItem>
              </DetailsList>
              <DetailsList>
                <DetailsListItem>
                  <InfoText
                    title="Top Level Domain"
                    description={topLevelDomain?.join(", ")}
                  />
                </DetailsListItem>
                <DetailsListItem>
                  <InfoText
                    title="Currencies"
                    description={
                      arrayToString(currencies, "name").join(", ") || "N/A"
                    }
                  />
                </DetailsListItem>
                <DetailsListItem>
                  <InfoText
                    title="Languages"
                    description={arrayToString(languages, "name").join(", ")}
                  />
                </DetailsListItem>
              </DetailsList>
            </ListGroup>
            <div>
              {borders.length === 0 ? (
                "No Border Countries"
              ) : (
                <div>
                  <DetailsSubTitle>Border Countries:</DetailsSubTitle>
                  {isLoading ? (
                    "Loading Border Countries..."
                  ) : (
                    <ButtonGroup>
                      {neighborBorders.map(({ name }) => (
                        <Button
                          key={name}
                          onClick={() => handleNeighborBorders(name)}
                          padding="6px 10px"
                        >
                          {name}
                        </Button>
                      ))}
                    </ButtonGroup>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </Details>
  );
}

export default Info;
