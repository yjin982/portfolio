"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useEffectEvent, useState } from "react";

import HeaderTime from "@/components/common/headerTime";
import LocalStorage from "@/utils/localStorage";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  const updateTheme = useEffectEvent((savedTheme: "light" | "dark") => {
    setTheme(savedTheme);
    setMounted(true);
  });

  // 클라이언트에서만 실행
  useEffect(() => {
    const savedTheme =
      (LocalStorage.getItem("theme") as "light" | "dark") || "light";
    updateTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;
    LocalStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // 마운트 전에는 기본 아이콘만 표시 (깜빡임 방지)
  if (!mounted) {
    return (
      <nav className="bg-gray-100 dark:bg-slate-600 border border-slate-900 rounded-xl p-2 absolute top-5 left-4 right-4">
        <div className="flex justify-between items-center text-sm">
          <button onClick={handleTheme}>
            <Sun color="red" size={20} className="ml-1 mr-3" />
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

  return (
    <nav className="bg-gray-100 dark:bg-slate-600 border border-slate-900 rounded-xl p-2 absolute top-5 left-4 right-4">
      <div className="flex justify-between items-center text-sm">
        <button onClick={handleTheme}>
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
