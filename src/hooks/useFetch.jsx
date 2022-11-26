import { useState, useCallback } from "react";

export const useFetch = (initialData, url) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      if (response.ok) {
        setData(result);
      } else {
        setError(true);
        setErrorMessage(result);
      }
      setIsLoading(false);
    } catch (err) {
      setError(true);
      setErrorMessage(err.message);
      setIsLoading(false);
    }
  },[url]);

  return { data, isLoading, error, errorMessage, setData, fetchData };
};
