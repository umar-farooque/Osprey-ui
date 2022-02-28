import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log("rendered");
  const request = async (...args) => {
    try {
      setLoading(true);
      const response = await apiFunc(...args);
      // console.log(">>>>", response);
      setError(false);
      setData(response.data);
    } catch (error) {
      // console.log(">>>>error", error?.response);
      setError(true);
      // setData(error?.response?.data);
      // return { error,data,request,loading, }
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, request };
};

export default useApi;
