import React, { useContext } from "react";
import Widget from "../components/Widget";
import TodoWidget from "../components/TodoWidget";
import WeatherWidget from "../components/WeatherWidget";
import QuoteWidget from "../components/QuoteWidget";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Dashboard() {
  const { username } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="dark:bg-gray-900 min-h-screen p-6">
      {/* relative + 버튼 absolute 로 오른쪽 위 배치 */}
      <header className="mb-8 relative">
        <button
          onClick={toggleTheme}
          className="absolute top-0 right-0 px-3 py-1.5 rounded-lg border text-sm
                     bg-white text-gray-700 border-gray-300
                     dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
        >
          {theme === "light" ? "🌞 라이트모드" : "🌙 다크모드"}
        </button>

        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          안녕하세요, {username}님 좋은 하루입니다! 👋
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          오늘의 대시보드 현황입니다.
        </p>
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
