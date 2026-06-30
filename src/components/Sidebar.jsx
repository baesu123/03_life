import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";

/**
 * Sidebar - 좌측 고정 네비게이션 사이드바 (개선 버전)
 * - 아이콘 + 텍스트 형태의 네비게이션
 * - 현재 경로 활성화 표시
 * - 하단 사용자 정보 영역
 */
export default function Sidebar() {
  const location = useLocation();
  const { username } = useContext(UserContext);

  // 네비게이션 메뉴 목록 (아이콘, 레이블, 경로)
  const navItems = [
    { icon: "📊", label: "대시보드", path: "/" },
    { icon: "⚙️", label: "설정", path: "/settings" },
  ];

  // 현재 경로와 일치하면 활성화 스타일, 아니면 기본 스타일 반환
  const getLinkClass = (path) =>
    location.pathname === path
      ? "flex items-center gap-3 px-4 py-2.5 rounded-lg bg-indigo-600 text-white font-medium transition"
      : "flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition";

  return (
    <div className="w-full md:w-60 bg-gray-900 text-white flex flex-col justify-between shrink-0">
      {/* 상단: 로고 + 네비게이션 */}
      <div className="p-5">
        {/* 앱 로고 / 브랜드 */}
        <div className="mb-8">
          <h1 className="text-xl font-bold text-indigo-400 tracking-tight">
            ✨ MySpace
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">나만의 대시보드</p>
        </div>

        {/* 네비게이션 메뉴 */}
        <nav className="space-y-1.5">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={getLinkClass(item.path)}>
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* 하단: 사용자 정보 */}
      <div className="p-5 border-t border-gray-800">
        <div className="flex items-center gap-3">
          {/* 아바타 (이니셜 표시) */}
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold shrink-0">
            {username ? username[0].toUpperCase() : "?"}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-white truncate">{username}</p>
            <p className="text-xs text-gray-500">일반 사용자</p>
          </div>
        </div>
      </div>
    </div>
  );
}
