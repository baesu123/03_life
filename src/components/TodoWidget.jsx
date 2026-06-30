import React, { useState } from "react";

/**
 * TodoWidget - 할 일 목록 위젯 (업그레이드 버전)
 * - 완료/미완료 토글 기능 추가
 * - 완료된 항목 취소선 표시
 * - 완료 개수 진행률 표시
 */
export default function TodoWidget() {
  // 1. 상태(State) 정의 - 각 todo에 completed 필드 추가
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 복습하기", completed: false },
    { id: 2, text: "Tailwind CSS 익히기", completed: false },
  ]);
  const [inputValue, setInputValue] = useState(""); // 입력창 글자 저장용

  // 2. 이벤트 핸들러: 등록 버튼 클릭 시
  const handleAddTodo = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
    if (!inputValue.trim()) return; // 빈 값 입력 방지

    // 기존 배열을 유지하면서 새로운 객체 추가 (불변성 유지)
    const newTodo = {
      id: Date.now(), // 고유한 ID 생성
      text: inputValue,
      completed: false, // 처음엔 미완료 상태
    };
    setTodos([...todos, newTodo]);
    setInputValue(""); // 입력창 비우기
  };

  // 3. 이벤트 핸들러: 삭제 버튼 클릭 시
  const handleDeleteTodo = (id) => {
    // 클릭한 ID만 제외한 새로운 배열을 만들어 상태 업데이트
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 4. 이벤트 핸들러: 완료/미완료 토글
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // 완료된 항목 수 계산
  const completedCount = todos.filter((t) => t.completed).length;
  const total = todos.length;

  return (
    <div>
      {/* 진행률 표시바 (todo가 1개 이상일 때만 표시) */}
      {total > 0 && (
        <div className="mb-3">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>진행률</span>
            <span>
              {completedCount}/{total}
            </span>
          </div>
          {/* 프로그레스 바 배경 */}
          <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
            {/* 완료 비율만큼 채워지는 바 */}
            <div
              className="bg-indigo-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${total > 0 ? (completedCount / total) * 100 : 0}%` }}
            />
          </div>
        </div>
      )}

      {/* 할 일 입력 폼 */}
      <form onSubmit={handleAddTodo} className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // 입력할 때마다 State 업데이트
          placeholder="할 일을 입력하세요"
          className="flex-1 px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-600
                     rounded-lg focus:outline-none focus:border-indigo-500
                     bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200
                     placeholder-gray-400 dark:placeholder-gray-500"
        />
        <button
          type="submit"
          className="px-3 py-1.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition"
        >
          추가
        </button>
      </form>

      {/* 할 일 목록 출력 */}
      {todos.length === 0 ? (
        <p className="text-gray-400 text-sm text-center py-4">
          할 일이 없습니다. 🎉
        </p>
      ) : (
        <ul className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50
                         px-3 py-2 rounded-lg text-sm border border-gray-100 dark:border-gray-600 group"
            >
              {/* 체크박스 + 텍스트 영역 */}
              <div
                className="flex items-center gap-2 cursor-pointer flex-1 min-w-0"
                onClick={() => handleToggleTodo(todo.id)}
              >
                {/* 커스텀 체크박스 */}
                <span
                  className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition
                    ${todo.completed ? "bg-indigo-500 border-indigo-500" : "border-gray-300 dark:border-gray-500"}`}
                >
                  {/* 완료 시 체크 표시 */}
                  {todo.completed && (
                    <span className="text-white text-[10px]">✓</span>
                  )}
                </span>
                {/* 완료된 항목은 취소선 + 흐림 처리 */}
                <span
                  className={`truncate transition ${
                    todo.completed
                      ? "line-through text-gray-400 dark:text-gray-500"
                      : "text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {todo.text}
                </span>
              </div>

              {/* 삭제 버튼 */}
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="text-gray-400 hover:text-red-500 md:opacity-0 group-hover:opacity-100 transition ml-2 flex-shrink-0"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
