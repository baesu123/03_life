import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Sidebar() {
  const location = useLocation();
  const { username } = useContext(UserContext); //

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
        👤 {username} 님
      </div>
    </div>
  );
}
