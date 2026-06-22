"use client";
import { Menu, Moon, Sun, X } from "lucide-react"; // Menu, X 아이콘 추가
import Link from "next/link";
import { useState } from "react"; // 토글 상태 관리를 위해 추가

import HeaderTime from "@/components/common/headerTime";
import { useTheme } from "@/components/common/themeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false); // 서랍메뉴 열림/닫힘 상태

  // 반복되는 링크들을 배열로 관리하여 코드 축소
  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#profile", label: "Profile" },
    { href: "#skills", label: "Skills" },
    { href: "#career", label: "Career" },
    { href: "#education", label: "Education" },
    { href: "#certification", label: "Certification" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gray-100 dark:bg-slate-600 border border-slate-900 rounded-xl p-2 fixed top-5 left-8 right-8 z-10">
      {/* 메인 헤더 라인 */}
      <div className="flex justify-between items-center text-sm">
        {/* 테마 토글 버튼 */}
        <button onClick={toggleTheme} className="flex items-center">
          {theme === "dark" ? (
            <Moon color="cyan" size={20} className="m-1" />
          ) : (
            <Sun color="red" size={20} className="m-1" />
          )}
        </button>

        {/* [데스크톱 메뉴] sm 이상에서만 노출 */}
        <div className="hidden sm:flex gap-4 my-1 mx-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              className="text-slate-900 hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-300 rounded"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* 우측 영역: 시간 & 모바일 햄버거 버튼 */}
        <div className="flex items-center gap-2">
          <HeaderTime />

          {/* [모바일 토글 버튼] sm 미만에서만 노출 */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block sm:hidden p-1 text-slate-900 dark:text-gray-100"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* [모바일 서랍 메뉴] sm 미만이고 isOpen이 true일 때만 아래로 펼쳐짐 */}
      {isOpen && (
        <div className="sm:hidden flex flex-col gap-3 mt-3 pt-3 border-t border-slate-300 dark:border-slate-500 animate-in fade-in slide-in-from-top-2 duration-200">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              className="text-slate-900 hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-300 rounded px-1 py-0.5"
              href={item.href}
              onClick={() => setIsOpen(false)} // 메뉴 클릭 시 서랍 닫기
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
