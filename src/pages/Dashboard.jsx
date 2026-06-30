import React from "react";
import Widget from "../components/Widget";
import TodoWidget from "../components/TodoWidget";
import WeatherWidget from "../components/WeatherWidget";
import QuoteWidget from "../components/QuoteWidget";

export default function Dashboard() {
  return (
    <div>
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          안녕하세요, 좋은 하루입니다! 👋
        </h2>
        <p className="text-gray-500 mt-1">오늘의 대시보드 현황입니다.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Widget title="🌤️ 오늘의 날씨">
          <WeatherWidget />
        </Widget>
        <Widget title="✍️ 오늘의 명언">
          <QuoteWidget />
        </Widget>
        <Widget title="✅ 할 일 목록 (Todo)">
          <TodoWidget />
        </Widget>
      </div>
    </div>
  );
}
