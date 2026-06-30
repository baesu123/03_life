import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function QuoteWidget() {
  // const [quote, setQuote] = useState({ text: "", author: "" });
  // const [loading, setLoading] = useState(true);

  const { data, loading, refetch } = useFetch(
    "https://korean-advice-open-api.vercel.app/api/advice",
  );

  if (loading) {
    return <p>명언을 불러오는 중...</p>;
  }

  return (
    <div className="flex flex-col justify-between min-h-[90px]">
      <p
        className="text-gray-700 italic font-medium leading-relaxed
      text-gray-800 dark:text-white"
      >
        "{data?.message}"
      </p>
      <p className="text-gray-400 text-xs text-right mt-2">— {data?.author}</p>
      <p>
        <button
          onClick={refetch}
          style={{
            backgroundColor: "#4F46E5",
            color: "white",
            padding: "5px 8px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          [새 명언]
        </button>
      </p>
    </div>
  );
}
