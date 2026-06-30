import React from "react";

/**
 * StatsCard - 통계 요약 카드 컴포넌트
 * @param {string} icon - 카드에 표시할 이모지 아이콘
 * @param {string} label - 카드 설명 레이블
 * @param {string|number} value - 표시할 숫자/값
 * @param {string} color - 배경 그라데이션 색상 클래스 (예: "from-indigo-500 to-purple-600")
 */
export default function StatsCard({ icon, label, value, color }) {
  return (
    <div
      className={`bg-gradient-to-br ${color} rounded-xl p-4 text-white shadow-md
                  hover:scale-105 transition-transform duration-200 cursor-default`}
    >
      {/* 아이콘 */}
      <div className="text-3xl mb-2">{icon}</div>
      {/* 숫자 값 */}
      <div className="text-2xl font-bold">{value}</div>
      {/* 레이블 */}
      <div className="text-sm opacity-80 mt-1">{label}</div>
    </div>
  );
}
