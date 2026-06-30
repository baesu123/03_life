import React from "react";
//title: 위젯의 제목, children:위젯으로 감싼 내용
export default function Widget({ title, children }) {
  return (
    // Tailwind 설명: bg-white(흰배경), p-6(안쪽여백), rounded-xl(둥근모서리), shadow-sm(부드러운그림자)
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[150px]">
      <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">
        {title}
      </h3>
      <div className="text-gray-800">{children}</div>
    </div>
  );
}
