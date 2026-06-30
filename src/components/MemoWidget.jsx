import React, { useState } from "react";

/**
 * MemoWidget - 간단한 메모 위젯
 * localStorage에 메모 내용을 저장해 새로고침 후에도 유지됩니다.
 */
export default function MemoWidget() {
  // localStorage에서 초기값 불러오기 (없으면 빈 문자열)
  const [memo, setMemo] = useState(
    () => localStorage.getItem("dashboard_memo") || "",
  );
  // 저장 완료 피드백 상태
  const [saved, setSaved] = useState(false);

  // 텍스트 변경 핸들러 (입력할 때마다 state 업데이트)
  const handleChange = (e) => {
    setMemo(e.target.value);
    setSaved(false); // 내용이 바뀌면 저장 표시 초기화
  };

  // 저장 버튼 클릭 시 localStorage에 저장
  const handleSave = () => {
    localStorage.setItem("dashboard_memo", memo);
    setSaved(true);
    // 2초 후 저장 완료 표시 숨기기
    setTimeout(() => setSaved(false), 2000);
  };

  // 전체 지우기 버튼 클릭 시
  const handleClear = () => {
    setMemo("");
    localStorage.removeItem("dashboard_memo");
    setSaved(false);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* 메모 입력 영역 */}
      <textarea
        value={memo}
        onChange={handleChange}
        placeholder="여기에 메모를 입력하세요..."
        rows={4}
        className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-600
                   rounded-lg resize-none focus:outline-none focus:border-indigo-400
                   bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200
                   placeholder-gray-400 dark:placeholder-gray-500 transition"
      />

      {/* 버튼 영역 */}
      <div className="flex items-center justify-between gap-2">
        {/* 저장 완료 피드백 메시지 */}
        {saved && (
          <span className="text-xs text-green-500 font-medium">
            ✅ 저장 완료!
          </span>
        )}
        {!saved && <span />}

        <div className="flex gap-2">
          {/* 전체 지우기 버튼 */}
          <button
            onClick={handleClear}
            className="px-3 py-1.5 text-xs text-gray-400 hover:text-red-400 border border-gray-200
                       dark:border-gray-600 rounded-lg transition hover:border-red-300"
          >
            🗑️ 지우기
          </button>
          {/* 저장 버튼 */}
          <button
            onClick={handleSave}
            className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-lg transition"
          >
            💾 저장
          </button>
        </div>
      </div>
    </div>
  );
}
