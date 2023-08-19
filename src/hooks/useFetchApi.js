import React, { useEffect, useState } from "react";

const useFetchApi = (api) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api);
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, [api]);

  return [data];
};

export default useFetchApi;