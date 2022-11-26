import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { searchByCountry } from "../utils/config";
import Button from "../UI/Button";
import { IoArrowBack } from "react-icons/io5";
import Info from "../components/Info";

function Details() {
  let { name } = useParams();
  const navigate = useNavigate();
  const { data: country, fetchData: fetchCountry } = useFetch(
    [],
    searchByCountry(name)
  );

  useEffect(() => {
    fetchCountry();
  }, [fetchCountry]);

  const handleBackBtn = () => {
    navigate(-1);
  };

  return (
    <div>
      <Button text="Back" onClick={handleBackBtn}>
        <IoArrowBack />
      </Button>
      {country && (
        <Info {...country[0]} />
      )}
      {/* make an error if fetched failed */}
    </div>
  );
}

export default Details;
