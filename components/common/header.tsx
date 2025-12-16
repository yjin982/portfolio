"use client";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useState } from "react";

import LocalStorage from "@/utils/localStorage";

import HeaderTime from "./headerTime";

export default function Header() {
  // 초기값을 useState에서 직접 설정 (lazy initialization)
  const [theme, setTheme] = useState<string>("light");

  const handleToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    LocalStorage.setItem("theme", newTheme);
    setTheme(newTheme);

    // html 태그에 data-theme 속성 적용
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  };

  // 초기 로드 시 html에 data-theme 적용
  if (typeof window !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme);
  }

  return (
    <nav className="bg-gray-100 dark:bg-slate-600 border border-slate-900 rounded-xl p-2 absolute top-5 left-4 right-4">
      <div className="flex justify-between items-center text-sm">
        <button onClick={handleToggle}>
          {theme === "dark" ? (
            <Moon color="cyan" size={20} className="ml-1 mr-3" />
          ) : (
            <Sun color="red" size={20} className="ml-1 mr-3" />
          )}
        </button>

        <div className="flex gap-4">
          <button className="text-slate-900 hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-300 rounded">
            About
          </button>
          <button className="text-slate-900 hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-300 rounded">
            Portfolio
          </button>
          <button className="text-slate-900 hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-300 rounded">
            Contact
          </button>
        </div>

        <HeaderTime />
      </div>
    </nav>
  );
}
