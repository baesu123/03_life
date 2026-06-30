import React, { useContext, useState } from "react";
import Widget from "../components/Widget";
import TodoWidget from "../components/TodoWidget";
import WeatherWidget from "../components/WeatherWidget";
import QuoteWidget from "../components/QuoteWidget";
import ClockWidget from "../components/ClockWidget";
import MemoWidget from "../components/MemoWidget";
import StatsCard from "../components/StatsCard";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

/**
 * Dashboard - 메인 대시보드 페이지 (업그레이드 버전)
 * - 상단 통계 카드 섹션 추가
 * - 시계, 메모 위젯 추가
 * - 전체 레이아웃 개선
 */
export default function Dashboard() {
  const { username } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  // 현재 시각의 인사말 계산 (아침/오후/저녁)
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "좋은 아침이에요" : hour < 18 ? "좋은 오후예요" : "좋은 저녁이에요";

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      {/* ── 헤더 영역 ── */}
      <header className="mb-6 relative">
        {/* 다크/라이트 모드 토글 버튼 (오른쪽 상단 고정) */}
        <button
          onClick={toggleTheme}
          className="absolute top-0 right-0 px-3 py-1.5 rounded-lg border text-sm
                     bg-white text-gray-700 border-gray-300 shadow-sm
                     dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600
                     hover:shadow-md transition"
        >
          {theme === "light" ? "🌙 다크모드" : "🌞 라이트모드"}
        </button>

        {/* 환영 메시지 */}
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          {greeting}, <span className="text-indigo-600 dark:text-indigo-400">{username}</span>님! 👋
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
          오늘도 알찬 하루 보내세요. 대시보드에서 하루를 관리해보세요.
        </p>
      </header>

      {/* ── 통계 카드 섹션 ── */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {/* 각 카드에 고유 그라데이션 색상 지정 */}
        <StatsCard
          icon="✅"
          label="완료한 미션"
          value="3"
          color="from-indigo-500 to-purple-600"
        />
        <StatsCard
          icon="📅"
          label="오늘의 일정"
          value="5"
          color="from-sky-500 to-blue-600"
        />
        <StatsCard
          icon="📝"
          label="메모 저장"
          value="1"
          color="from-emerald-500 to-teal-600"
        />
        <StatsCard
          icon="🔥"
          label="연속 출석일"
          value="7"
          color="from-orange-500 to-red-500"
        />
      </section>

      {/* ── 위젯 그리드 섹션 ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 날씨 위젯 */}
        <Widget title="🌤️ 오늘의 날씨">
          <WeatherWidget />
        </Widget>

        {/* 시계 위젯 */}
        <Widget title="🕐 현재 시각">
          <ClockWidget />
        </Widget>

        {/* 명언 위젯 */}
        <Widget title="✍️ 오늘의 명언">
          <QuoteWidget />
        </Widget>

        {/* 할 일 목록 위젯 (2칸 차지) */}
        <div className="md:col-span-2">
          <Widget title="✅ 할 일 목록 (Todo)">
            <TodoWidget />
          </Widget>
        </div>

        {/* 메모 위젯 */}
        <Widget title="📝 나의 메모">
          <MemoWidget />
        </Widget>
      </section>
    </div>
  );
}
