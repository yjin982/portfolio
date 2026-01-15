"use client";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
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
      <nav className="bg-gray-100 dark:bg-slate-600 border border-slate-900 rounded-xl p-2 fixed top-5 left-8 right-8 z-10">
        <div className="flex flex-wrap justify-between items-center text-sm">
          <button onClick={handleTheme}>
            <Sun color="red" size={20} className="m-1" />
          </button>
          <div className="flex flex-wrap gap-4 my-1">
            <Link
              className="text-slate-900 hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-300 rounded"
              href="#home"
            >
              Home
            </Link>
            <Link
              className="text-slate-900 hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-300 rounded"
              href="#profile"
            >
              Profile
            </Link>
            <Link
              className="text-slate-900 hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-300 rounded"
              href="#skills"
            >
              Skills
            </Link>
            <Link
              className="text-slate-900 hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-300 rounded"
              href="#career"
            >
              Career
            </Link>
            <Link
              className="text-slate-900 hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-300 rounded"
              href="#certification"
            >
              Certification
            </Link>
            <Link
              className="text-slate-900 hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-300 rounded"
              href="#contact"
            >
              Contact
            </Link>
          </div>
          <HeaderTime />
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-gray-100 dark:bg-slate-600 border border-slate-900 rounded-xl p-2 fixed top-5 left-8 right-8 z-10">
      <div className="flex flex-wrap justify-between items-center text-sm">
        <button onClick={handleTheme}>
          {theme === "dark" ? (
            <Moon color="cyan" size={20} className="m-1" />
          ) : (
            <Sun color="red" size={20} className="m-1" />
          )}
        </button>
        <div className="flex flex-wrap gap-4 my-1">
          <Link
            className="text-slate-900 hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-300 rounded"
            href="#home"
          >
            Home
          </Link>
          <Link
            className="text-slate-900 hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-300 rounded"
            href="#profile"
          >
            Profile
          </Link>
          <Link
            className="text-slate-900 hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-300 rounded"
            href="#skills"
          >
            Skills
          </Link>
          <Link
            className="text-slate-900 hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-300 rounded"
            href="#career"
          >
            Career
          </Link>
          <Link
            className="text-slate-900 hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-300 rounded"
            href="#certification"
          >
            Certification
          </Link>
          <Link
            className="text-slate-900 hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-300 rounded"
            href="#contact"
          >
            Contact
          </Link>
        </div>
        <HeaderTime />
      </div>
    </nav>
  );
}
