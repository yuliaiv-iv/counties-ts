import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Button from "UI/Button";
import Main from "components/Main";
import CountryDetails from "features/details/CountryDetails";

function Details() {
  let { name } = useParams();
  const navigate = useNavigate();

  const handleBackBtn = () => {
    navigate(-1);
  };

  return (
    <Main>
      <Button text="Back" onClick={handleBackBtn}>
        <IoArrowBack />
      </Button>
      <CountryDetails name={name} navigate={navigate} />
    </Main>
  );
}

export default Details;
