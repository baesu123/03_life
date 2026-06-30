import React from "react";
//title: 위젯의 제목, children:위젯으로 감싼 내용
export default function Widget({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
        {title}
      </h3>
      <div className="text-gray-700 dark:text-gray-200">{children}</div>
    </div>
  );
}
