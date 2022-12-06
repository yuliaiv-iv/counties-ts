import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";

function App() {
  // const {
  //   data: countries,
  //   fetchData: fetchCounties,
  //   isLoading,
  //   error,
  // } = useFetch([], ALL_COUNTRIES);

  // useFetch hook was used before Redux implementation

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:name" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
