import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import { ALL_COUNTRIES } from "./utils/config";
import { useFetch } from "./utils/api";

function App() {
  const {
    data: countries,
    fetchData: fetchCounties,
  } = useFetch([], ALL_COUNTRIES);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage countries={countries} fetchCounties={fetchCounties} />}
          />
          <Route exact path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
