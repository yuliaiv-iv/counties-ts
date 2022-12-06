import { useEffect } from "react";
import styled from "styled-components";
import Card from "components/Card";
import Loading from "components/Loading";
import { useNavigate } from "react-router-dom";
import { errorMessage } from "utils/config";
import { useWindowSize } from "hooks/useWindowSize";
import { CountryInfo } from "types";

import { useSelector} from "react-redux";
import {
  selectAllCountries,
  fetchCountries,
  selectCountries,
} from "./countrySlice";
import { selectControls } from "../controls/controlSlice";
import { RootState, useAppDispatch } from "store";

type Props = {
  justifyContent?: string;
};

const ListSection = styled.ul<Props>`
  width: 100%;
  padding: 0;
  list-style: none;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 264px);
  gap: 40px;
  justify-content: ${(props) => props.justifyContent || "center"};

  @media (min-width: 1438px) {
    gap: 40px 74px;
  }
`;

const ErrorMsg = styled.h3`
  color: var(--color-text);
  font-size: var(--fs-large);
  font-weight: var(--fw-light);
`;

function CountryList() {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const dispatch = useAppDispatch()

  const { status, list, error } = useSelector(selectAllCountries);
  const controls = useSelector(selectControls);
  const countries = useSelector((state: RootState) =>
    selectCountries(state, controls)
  );

  useEffect(() => {
    if (!list.length) {
      dispatch(fetchCountries());
    }
  }, [dispatch, list]);

  // adjust the styles based on screen size
  const ListStyle = () => {
    if (
      (width > 1255 && countries.length < 4) ||
      (width > 903 && width <= 1255 && countries.length < 3)
    ) {
      return "flex-start";
    }
    return;
  };

  return (
    <>
      {error && <ErrorMsg>{errorMessage}</ErrorMsg>}
      {status === "loading" && <Loading />}
      {status === "received" && (
        <ListSection justifyContent={ListStyle()}>
          {countries.map(({ flags, name, population, region, capital }) => {
            const countryInfo: CountryInfo = {
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
                {...countryInfo}
                onClick={() => navigate(`/country/${name}`)}
                onKeyPress={() => navigate(`/country/${name}`)}
              />
            );
          })}
        </ListSection>
      )}
    </>
  );
}

export default CountryList;
