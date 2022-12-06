import CountryList from "features/counties/CountryList";
import FormControl from "features/controls/FormControl";
import Main from "components/Main";
import ScrollButton from "components/ScrollButton";

function HomePage() {
  return (
    <Main>
      <FormControl />
      <CountryList />
      <ScrollButton />
    </Main>
  );
}

export default HomePage;
