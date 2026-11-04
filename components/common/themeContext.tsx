"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";

import LocalStorage from "@/utils/localStorage";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// localStorage를 외부 store로 구독 (같은 탭 변경은 listeners, 다른 탭 변경은 storage 이벤트)
const listeners = new Set<() => void>();

const subscribe = (callback: () => void) => {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
};

const getSnapshot = (): Theme =>
  LocalStorage.getItem("theme") === "dark" ? "dark" : "light";

// 서버 렌더링 및 hydration 시에는 light로 시작
const getServerSnapshot = (): Theme => "light";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // 초기 마운트 시 HTML 속성 동기화
  useEffect(() => {
    const savedTheme = LocalStorage.getItem("theme");

    if (savedTheme && savedTheme !== "light") {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    // Side Effects
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;
    LocalStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    listeners.forEach((listener) => listener());
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 커스텀 훅 (사용 편의성 증대)
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
