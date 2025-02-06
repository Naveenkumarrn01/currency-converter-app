// src/hooks/useCurrencyInfo.js
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://v6.exchangerate-api.com/v6/7cf6b8fc9d82d487d415484e/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.result === "success") {
          setData(res.conversion_rates);
        } else {
          setError("Failed to fetch currency data");
        }
      })
      .catch((error) => {
        setError("Network error: " + error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currency]);

  return { data, loading, error };
}

export default useCurrencyInfo;