import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function WeatherWidget() {
  // 1. 선택된 도시를 state로 관리
  const [city, setCity] = useState("Busan");

  // 2. city 가 바뀔 때마다 url도 자동으로 바뀜
  const { data, loading } = useFetch(`https://wttr.in/${city}?format=j1`);

  // 3. 버튼에 표시할 한글이랑 영어 매핑
  const cities = [
    { label: "서울", value: "Seoul" },
    { label: "부산", value: "Busan" },
    { label: "제주", value: "Jeju" },
  ];

  if (loading)
    return (
      <p className="text-gray-400 text-sm animate-pulse">
        날씨 정보 로딩 중...
      </p>
    );
  if (!data)
    return <p className="text-red-400 text-sm">날씨를 불러올 수 없습니다.</p>;

  const current = data.current_condition[0];

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-4xl font-bold text-gray-800">
            {current.temp_C}°C
          </div>
          <p className="text-gray-500 text-sm mt-1 capitalize">
            {current.weatherDesc[0].value}
          </p>
        </div>
        <div className="text-right text-xs text-gray-400 space-y-1">
          <p>💧 습도: {current.humidity}%</p>
          <p>📍 위치: {city}</p>

          {/* 4. 도시 선택 버튼 */}
          <div className="flex gap-1 justify-end mt-2">
            {cities.map((c) => (
              <button
                key={c.value}
                onClick={() => setCity(c.value)}
                className={`px-2 py-1 rounded text-xs ${
                  city === c.value
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
