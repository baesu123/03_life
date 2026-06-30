import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

/**
 * Settings - 설정 페이지 (업그레이드 버전)
 * - 다크모드 완전 지원
 * - 테마 토글 UI 추가
 * - 저장 완료 피드백 추가
 */
export default function Settings() {
  const { username, setUsername } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  // 저장 완료 피드백 상태
  const [saved, setSaved] = useState(false);

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const value = e.target.value;
    setUsername(value); // Context 값 변경
    localStorage.setItem("username", value); // 새로고침 대비 저장
  };

  // 저장 버튼 클릭 시 피드백 표시
  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      {/* ── 헤더 ── */}
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          ⚙️ 시스템 설정
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
          대시보드의 환경을 설정합니다.
        </p>
      </header>

      {/* ── 설정 카드들 ── */}
      <div className="space-y-4 max-w-lg">

        {/* 프로필 설정 카드 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-4 pb-3 border-b border-gray-100 dark:border-gray-700">
            👤 사용자 프로필
          </h3>

          <div className="space-y-3">
            <label className="block text-sm text-gray-600 dark:text-gray-400 font-medium">
              닉네임
            </label>
            <input
              type="text"
              value={username}
              onChange={handleChange}
              placeholder="이름을 입력하세요"
              className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm
                         focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                         bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white
                         placeholder-gray-400 dark:placeholder-gray-500 transition"
            />
            {/* 저장 버튼 */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition"
              >
                변경 저장
              </button>
              {/* 저장 완료 피드백 */}
              {saved && (
                <span className="text-sm text-green-500 font-medium animate-pulse">
                  ✅ 저장되었습니다!
                </span>
              )}
            </div>
          </div>
        </div>

        {/* 테마 설정 카드 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-4 pb-3 border-b border-gray-100 dark:border-gray-700">
            🎨 테마 설정
          </h3>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {theme === "light" ? "☀️ 라이트 모드" : "🌙 다크 모드"}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                {theme === "light"
                  ? "현재 밝은 테마가 적용되어 있습니다."
                  : "현재 어두운 테마가 적용되어 있습니다."}
              </p>
            </div>

            {/* 토글 스위치 */}
            <button
              onClick={toggleTheme}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300
                ${theme === "dark" ? "bg-indigo-600" : "bg-gray-300"}`}
            >
              {/* 슬라이더 원형 버튼 */}
              <span
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300
                  ${theme === "dark" ? "translate-x-6" : "translate-x-0.5"}`}
              />
            </button>
          </div>
        </div>

        {/* 앱 정보 카드 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-4 pb-3 border-b border-gray-100 dark:border-gray-700">
            ℹ️ 앱 정보
          </h3>
          <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex justify-between">
              <span>버전</span>
              <span className="font-mono text-indigo-500">v1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span>프레임워크</span>
              <span>React 19 + Vite</span>
            </div>
            <div className="flex justify-between">
              <span>스타일링</span>
              <span>Tailwind CSS v4</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
