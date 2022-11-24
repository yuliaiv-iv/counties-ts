import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../utils/api";
import { searchByCountry, filterByCode } from "../utils/config";

function Details() {
  let { name } = useParams();
  const navigate = useNavigate();
  const { data: country, fetchData: fetchCountry } = useFetch(
    [],
    searchByCountry(name)
  );

  const { borders = [] } = country?.[0] || {};

  // console.log(country)

  const { data: neighborBorders, fetchData: fetchNeiborBorders } = useFetch(
    [],
    filterByCode(borders)
  );

  useEffect(() => {
    fetchCountry();
  }, [fetchCountry]);

  useEffect(() => {
    if (borders.length === 0) return;
    fetchNeiborBorders();
  }, [fetchNeiborBorders, borders]);

  console.log(neighborBorders);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <div>details {name}</div>
      {/* make an error if fetched failed */}
      {country && (
        <div>
          {borders.length === 0 ? (
            "no borders"
          ) : (
            <div>
              {neighborBorders.map((b) => (
                <div onClick={() => navigate(`/country/${b.name}`)}>{b.name}</div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Details;
