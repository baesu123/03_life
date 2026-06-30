import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("데이터 호출 실패:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    refetch: fetchData,
  };
}
