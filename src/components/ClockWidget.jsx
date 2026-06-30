import React, { useState, useEffect } from "react";

/**
 * ClockWidget - 실시간 디지털 시계 위젯
 * setInterval로 매 초마다 현재 시간을 업데이트합니다.
 */
export default function ClockWidget() {
  // 현재 시간을 state로 관리
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    // 1초마다 현재 시간 갱신
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => clearInterval(timer);
  }, []);

  // 두 자리 숫자로 포맷 (예: 9 → "09")
  const pad = (n) => String(n).padStart(2, "0");

  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());

  // 요일 한글 배열
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dayStr = days[now.getDay()];
  const dateStr = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 (${dayStr})`;

  return (
    <div className="flex flex-col items-center justify-center py-2">
      {/* 시:분:초 표시 */}
      <div className="text-4xl font-bold font-mono tracking-widest text-indigo-600 dark:text-indigo-400">
        {hours}
        <span className="animate-pulse">:</span>
        {minutes}
        <span className="animate-pulse">:</span>
        {seconds}
      </div>
      {/* 날짜 표시 */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{dateStr}</p>
    </div>
  );
}
