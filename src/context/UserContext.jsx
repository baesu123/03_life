// context/UserContext.jsx (새 파일)
import React, { createContext, useState } from "react";

// 1. Context 생성
export const UserContext = createContext();

// 2. 데이터를 제공하는 Provider 컴포넌트
export function UserProvider({ children }) {
  const [username, setUsername] = useState(
    () => localStorage.getItem("username") || "exex",
  );

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}
