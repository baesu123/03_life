import React from "react";
/**
 * Widget - 위젯 공통 래퍼 컴포넌트 (개선 버전)
 * hover 시 살짝 올라오는 효과와 상단 컬러 라인 추가
 * @param {string} title - 위젯 상단에 표시할 제목
 * @param {React.ReactNode} children - 위젯 내부 컨텐츠
 */
export default function Widget({ title, children }) {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700
                 hover:shadow-md transition-shadow duration-200 overflow-hidden"
    >
      {/* 위젯 상단 컬러 라인 */}
      <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />

      {/* 위젯 본문 */}
      <div className="p-4">
        <h3 className="text-base font-bold text-gray-800 dark:text-white mb-3">
          {title}
        </h3>
        <div className="text-gray-700 dark:text-gray-200">{children}</div>
      </div>
    </div>
  );
}
