"use client";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

import HeaderTime from "@/components/common/headerTime";
import { useTheme } from "@/components/common/themeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-gray-100 dark:bg-slate-600 border border-slate-900 rounded-xl p-2 fixed top-5 left-8 right-8 z-10">
      <div className="flex flex-wrap justify-between items-center text-sm">
        <button onClick={toggleTheme}>
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
            href="#education"
          >
            Education
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
