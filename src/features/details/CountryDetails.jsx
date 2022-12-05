import React, { useEffect } from "react";
import styled from "styled-components";
import Loading from "../../components/Loading";
import CountryInfo from "./CountryInfo";
import { errorMessage } from "../../utils/config";

import { useSelector, useDispatch } from "react-redux";
import { fetchCountyByName, selectDetails, clearDetails } from "./detailsSlice";

const ErrorMsg = styled.h3`
  color: var(--color-text);
  font-size: var(--fs-large);
  font-weight: var(--fw-light);
`;

function CountryDetails({ name = "", navigate }) {
  const dispatch = useDispatch();
  const { currentCountry, status, error } = useSelector(selectDetails);

  useEffect(() => {
    dispatch(fetchCountyByName(name));
    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);

  return (
    <>
      {status === "loading" && <Loading />}
      {error && <ErrorMsg>{errorMessage}</ErrorMsg>}
      {currentCountry && <CountryInfo push={navigate} {...currentCountry} />}
    </>
  );
}

export default CountryDetails;
