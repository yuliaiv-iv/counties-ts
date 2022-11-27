import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { searchByCountry } from "../utils/config";
import Button from "../UI/Button";
import { IoArrowBack } from "react-icons/io5";
import Info from "../components/Info";
import Main from "../components/Main";
import Loading from "../components/Loading";

function Details() {
  let { name } = useParams();
  const navigate = useNavigate();
  const {
    data: country,
    fetchData: fetchCountry,
    isLoading,
    error,
  } = useFetch([], searchByCountry(name));

  useEffect(() => {
    fetchCountry();
  }, [fetchCountry]);

  const handleBackBtn = () => {
    navigate(-1);
  };

  return (
    <Main>
      <Button text="Back" onClick={handleBackBtn}>
        <IoArrowBack />
      </Button>
      {isLoading ? (
        <Loading />
      ) : (
        <Info {...country[0]} error={error} />
      )}
    </Main>
  );
}

export default Details;
