import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import { ALL_COUNTRIES } from "./utils/config";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { data: countries, fetchData: fetchCounties } = useFetch(
    [],
    ALL_COUNTRIES
  );

  console.log(countries)

  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage countries={countries} fetchCounties={fetchCounties} />
          }
        />
        <Route exact path="/country/:name" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
