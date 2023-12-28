import { useEffect, useState } from "react";
import { apiUrl } from "../../constants";

export type ResultItem = {
  result: string;
  imported_file: string;
  id: number;
};

export const useProcessedResults = () => {
  const [results, setResults] = useState<ResultItem[]>([]);

  const getResults = async () => {
    const requestUrl = `${apiUrl}/test/`;

    await fetch(requestUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((response) => response.json())
      .then((results) => setResults(results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getResults();
  }, []);

  return { results };
};
