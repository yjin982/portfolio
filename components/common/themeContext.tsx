"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

import LocalStorage from "@/utils/localStorage";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// <html data-theme>을 외부 store로 구독
// (초기값은 테마 스크립트가 localStorage → cookie → 시스템 설정 순으로 결정)
const listeners = new Set<() => void>();

const notify = () => listeners.forEach((listener) => listener());

// 다른 탭에서 테마를 바꾸면 현재 탭에도 반영
const handleStorage = (event: StorageEvent) => {
  if (event.key !== "theme" || !event.newValue) return;
  document.documentElement.setAttribute("data-theme", event.newValue);
  notify();
};

const subscribe = (callback: () => void) => {
  if (listeners.size === 0) window.addEventListener("storage", handleStorage);
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
    if (listeners.size === 0)
      window.removeEventListener("storage", handleStorage);
  };
};

const getSnapshot = (): Theme =>
  document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";

// 서버 렌더링 및 hydration 시에는 light로 시작
const getServerSnapshot = (): Theme => "light";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    // Side Effects
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;
    LocalStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    notify();
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
