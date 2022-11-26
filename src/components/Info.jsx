import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { arrayToString, filterByCode } from "../utils/config";
import { useFetch } from "../hooks/useFetch";
import InfoText from "../UI/InfoText";
import Button from "../UI/Button";

const Details = styled.article`
  display: flex;
  flex-direction: column;
`;
const DetailsImg = styled.img`
  width: 100%;
  max-width: 320px;
  object-fit: cover;
  border-radius: var(--radius);
`;
const DetailsTitle = styled.h2`
  font-size: var(--fs-xl);
  font-weight: var(--fw-bold);
  line-height: 30px;
  margin: 0;
`;
const DetailsSubTitle = styled.h3`
  font-size: var(--fs-reg);
  font-weight: var(--fw-normal);
  line-height: 24px;
  margin: 0;
`;
const DetailsList = styled.ul`
  padding: 0;
  list-style: none;
  margin: ${(props) => props.padding || "12px 0 0"};
`;
const DetailsListItem = styled.ul`
  padding: 5px 0;
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
}) {
  const navigate = useNavigate();
  const { data: neighborBorders, fetchData: fetchNeiborBorders } = useFetch(
    [],
    filterByCode(borders)
  );

  useEffect(() => {
    if (borders.length === 0) return;
    fetchNeiborBorders();
  }, [fetchNeiborBorders, borders]);

  const handleNeighborBorders = (name) => {
    navigate(`/country/${name}`);
  };

  return (
    <Details>
      <DetailsImg src={flag} alt={name} />
      <div>
        <DetailsTitle>{name}</DetailsTitle>
        <div>
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
          <DetailsList padding="32px 0 0">
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
        </div>
        <div>
          {borders.length === 0 ? (
            "no borders"
          ) : (
            <div>
              <DetailsSubTitle>Border Countries:</DetailsSubTitle>
              <div>
                {neighborBorders.map(({ name }) => (
                  <Button
                    onClick={() => handleNeighborBorders(name)}
                    padding="6px 10px"
                  >
                    {name}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Details>
  );
}

export default Info;
