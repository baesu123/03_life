import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import { UserProvider } from "./context/UserContext";

export default function App() {
  return (
    <UserProvider>
      <div
        className="flex flex-col md:flex-row min-h-screen
                bg-gray-50 dark:bg-gray-900"
      >
        {/* 사이드바는 항상 고정 */}
        <Sidebar />

        {/* 주소(URL)에 따라 우측 컨텐츠 영역만 스위칭 */}
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </UserProvider>
  );
}
