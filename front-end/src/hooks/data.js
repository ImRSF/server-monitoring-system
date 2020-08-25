import { useState, useCallback } from "react";

const useData = () => {
  const [currentData, setCurrentData] = useState(null);

  const setData = useCallback((data) => {
    setCurrentData(data);
  }, []);

  return {
    setData: setData,
    getData: currentData,
  };
};

export default useData;
