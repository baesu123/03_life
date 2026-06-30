import React, { useState } from "react";

export default function TodoWidget() {
  // 1. 상태(State) 정의
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 복습하기" },
    { id: 2, text: "Tailwind CSS 익히기" },
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
    };
    setTodos([...todos, newTodo]);
    setInputValue(""); // 입력창 비우기
  };

  // 3. 이벤트 핸들러: 삭제 버튼 클릭 시
  const handleDeleteTodo = (id) => {
    // 클릭한 ID만 제외한 새로운 배열을 만들어 상태 업데이트
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {/* 할 일 입력 폼 */}
      <form onSubmit={handleAddTodo} className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // 입력할 때마다 State 업데이트
          placeholder="할 일을 입력하세요"
          className="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
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
              className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg text-sm border border-gray-100 group"
            >
              <span className="text-gray-700">{todo.text}</span>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="text-gray-400 hover:text-red-500 md:opacity-0 group-hover:opacity-100 transition"
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
