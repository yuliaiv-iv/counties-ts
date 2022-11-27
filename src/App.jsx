import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import { ALL_COUNTRIES } from "./utils/config";
import { useFetch } from "./hooks/useFetch";
import Loading from "./components/Loading";

function App() {
  const {
    data: countries,
    fetchData: fetchCounties,
    isLoading,
    error,
    errorMessage,
  } = useFetch([], ALL_COUNTRIES);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage
                countries={countries}
                fetchCounties={fetchCounties}
                error={error}
                // errorMessage={errorMessage}
              />
            }
          />
          <Route exact path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
}

export default App;
