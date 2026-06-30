# ✨ MySpace - 나만의 라이프 대시보드

> React 핵심 개념(State, Context, Custom Hook, Routing)을 활용해 만든 개인 생활 관리 대시보드입니다.

---

## 🖥️ 주요 기능

| 위젯 / 기능 | 설명 |
|---|---|
| 🌤️ **날씨 위젯** | 외부 API(wttr.in)에서 실시간 날씨 정보를 불러옵니다. 서울/부산/제주 도시 전환 가능 |
| 🕐 **시계 위젯** | `setInterval`을 활용해 매 초 실시간 업데이트되는 디지털 시계 |
| ✍️ **명언 위젯** | 한국어 명언 API에서 랜덤 명언을 불러오고 새 명언 버튼으로 갱신 가능 |
| ✅ **할 일 위젯** | 할 일 추가/삭제/완료 토글, 진행률 바 표시 |
| 📝 **메모 위젯** | `localStorage`에 자동 저장되는 간단한 메모 패드 |
| 📊 **통계 카드** | 대시보드 요약 정보를 시각적으로 표시하는 카드 섹션 |
| 🌙 **다크모드** | 라이트/다크 모드 전환, 설정이 `localStorage`에 유지됨 |
| ⚙️ **설정 페이지** | 닉네임 변경, 테마 토글 스위치, 앱 정보 확인 |

---

## 🛠️ 주요 기술 스택

| 분류 | 기술 | 설명 |
|---|---|---|
| **프레임워크** | React 19 | UI 컴포넌트 기반 개발 |
| **번들러** | Vite | 빠른 개발 서버 및 빌드 |
| **라우팅** | React Router DOM v7 | SPA 페이지 전환 (`/`, `/settings`) |
| **스타일링** | Tailwind CSS v4 | 유틸리티 기반 CSS 프레임워크 |
| **상태관리** | React Context API | 전역 상태(유저, 테마) 관리 |

---

## ⚛️ React 핵심 개념 학습 포인트

### 1. `useState` — 컴포넌트 내부 상태 관리
```jsx
// TodoWidget.jsx - 할 일 목록과 입력값 관리
const [todos, setTodos] = useState([...]);
const [inputValue, setInputValue] = useState("");
```

### 2. `useEffect` — 사이드 이펙트 처리
```jsx
// ClockWidget.jsx - 1초마다 시간 업데이트
useEffect(() => {
  const timer = setInterval(() => setNow(new Date()), 1000);
  return () => clearInterval(timer); // 클린업 함수 (메모리 누수 방지)
}, []);

// ThemeContext.jsx - theme 변경 시 html 클래스 조작
useEffect(() => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}, [theme]);
```

### 3. `useContext` — 전역 상태 소비
```jsx
// Dashboard.jsx - 유저 이름과 테마를 전역 Context에서 가져옴
const { username } = useContext(UserContext);
const { theme, toggleTheme } = useContext(ThemeContext);
```

### 4. 커스텀 훅 (`useFetch`) — 로직 재사용
```jsx
// 날씨, 명언 위젯에서 공통으로 사용하는 데이터 패칭 훅
const { data, loading, refetch } = useFetch("https://...");
```

### 5. `React Router` — SPA 라우팅
```jsx
// App.jsx - URL에 따라 컴포넌트를 스위칭
<Routes>
  <Route path="/"         element={<Dashboard />} />
  <Route path="/settings" element={<Settings />} />
</Routes>
```

### 6. `localStorage` — 데이터 영속성
- 유저 닉네임, 테마 설정, 메모 내용을 새로고침 후에도 유지

---

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── ClockWidget.jsx     # 실시간 시계 위젯
│   ├── MemoWidget.jsx      # 메모 위젯 (localStorage)
│   ├── QuoteWidget.jsx     # 명언 위젯 (외부 API)
│   ├── Sidebar.jsx         # 좌측 네비게이션
│   ├── StatsCard.jsx       # 통계 요약 카드
│   ├── TodoWidget.jsx      # 할 일 목록 위젯
│   ├── WeatherWidget.jsx   # 날씨 위젯 (외부 API)
│   └── Widget.jsx          # 공통 위젯 래퍼
├── context/
│   ├── ThemeContext.jsx    # 다크/라이트 테마 전역 상태
│   └── UserContext.jsx     # 사용자 이름 전역 상태
├── hooks/
│   └── useFetch.js         # 데이터 패칭 커스텀 훅
├── pages/
│   ├── Dashboard.jsx       # 메인 대시보드 페이지
│   └── Settings.jsx        # 설정 페이지
├── App.jsx                 # 라우터 및 레이아웃 루트
└── main.jsx                # 앱 진입점
```

---

## 🚀 시작하기

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

> 개발 서버 실행 후 브라우저에서 `http://localhost:5173` 접속

---

## 🌐 사용하는 외부 API

| API | 주소 | 용도 |
|---|---|---|
| wttr.in | `https://wttr.in/{city}?format=j1` | 실시간 날씨 정보 |
| 한국어 명언 API | `https://korean-advice-open-api.vercel.app/api/advice` | 한국어 명언 |
