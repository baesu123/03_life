import React from "react";
import { Link, useLocation } from "react-router-dom"; // Link와 현재 위치 파악용 훅 임포트

export default function Sidebar() {
  const location = useLocation();

  // 현재 활성화된 페이지에 따라 스타일을 다르게 주는 헬퍼 함수
  const activeClass = (path) =>
    location.pathname === path
      ? "block px-4 py-2 rounded bg-indigo-600 text-white font-medium"
      : "block px-4 py-2 rounded text-gray-400 hover:bg-gray-800 hover:text-white transition";

  return (
    <div className="w-full md:w-64 bg-gray-900 text-white p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold text-indigo-400 mb-8">MySpace</h1>
        <nav className="space-y-3">
          <Link to="/" className={activeClass("/")}>
            📊 대시보드
          </Link>
          <Link to="/settings" className={activeClass("/settings")}>
            ⚙️ 설정
          </Link>
        </nav>
      </div>
      <div className="text-sm text-gray-500 border-t border-gray-800 pt-4">
        👤 김프론트 강사님
      </div>
    </div>
  );
}
