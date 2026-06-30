import React from "react";

export default function Settings() {
  return (
    <div>
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">⚙️ 시스템 설정</h2>
        <p className="text-gray-500 mt-1">대시보드의 환경을 설정합니다.</p>
      </header>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-md">
        <p className="text-gray-700 font-medium mb-2">사용자 프로필 변경</p>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-indigo-500"
        />
        <p className="text-xs text-gray-400 mt-4">
          내일 배울 Context API를 통해 전역으로 연결할 예정입니다.
        </p>
      </div>
    </div>
  );
}
