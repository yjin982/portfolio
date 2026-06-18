"use client";
import { Mail, Phone } from "lucide-react";

const contacts = [
  {
    icon: <Mail size={14} />,
    label: "Email",
    value: "yjin.jeong982@gmail.com",
    href: "mailto:yjin.jeong982@gmail.com",
  },
  {
    icon: <Phone size={14} />,
    label: "Phone",
    value: "010-0000-5722",
    href: "tel:010-0000-5722",
  },
];

export default function Contact() {
  return (
    <div className="bg-[#f6f8fa] dark:bg-[#1e1e1e] p-8 h-full flex flex-col justify-center font-mono text-sm">
      {/* 인삿말 */}
      <p className="mb-3 text-slate-800 dark:text-slate-200 text-base font-bold">
        <span className="text-green-500">yujin@portfolio</span>
        <span className="text-slate-400 dark:text-slate-500">:~$</span>{" "}
        <span>감사합니다.</span>
      </p>

      {/* ASCII 아트 카드 */}
      <div className="flex flex-col mb-3">
        {contacts.map((item, idx) => (
          <a key={idx} href={item.href} className="group block w-[303px]">
            <div className="text-slate-400 dark:text-slate-600 select-none">
              ┌──────────────────────────────────┐
            </div>
            <div className="flex justify-between gap-2 text-slate-400 dark:text-slate-600 select-none">
              <div className="flex items-center gap-1">
                <span>│</span>
                <span className="text-yellow-500 flex items-center gap-1">
                  {item.icon}
                  <span className="text-xs uppercase tracking-widest">
                    {item.label}
                  </span>
                </span>
              </div>
              <span className="flex-1 text-end">│</span>
            </div>
            <div className="flex justify-between gap-2 text-slate-400 dark:text-slate-600 select-none">
              <div className="flex items-center gap-1">
                <span>│</span>
                <span className="text-slate-800 dark:text-white group-hover:text-blue-400 dark:group-hover:text-blue-300 transition-colors">
                  {item.value}
                </span>
              </div>
              <span className="flex-1 text-end">│</span>
            </div>
            <div className="text-slate-400 dark:text-slate-600 select-none">
              └──────────────────────────────────┘
            </div>
          </a>
        ))}
      </div>

      {/* 로그아웃 */}
      <p className="text-slate-800 dark:text-slate-200 text-base font-bold mb-6">
        <span className="text-green-500">yujin@portfolio</span>
        <span className="text-slate-400 dark:text-slate-500">:~$</span>{" "}
        <span>logout</span>
      </p>
      <p className="text-slate-500 mt-1 select-none">Saving session...</p>
      <p className="text-red-500 select-none">[Process exited]</p>
    </div>
  );
}
