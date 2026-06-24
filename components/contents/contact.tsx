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
    value: "010-2512-5722",
    href: "#",
  },
];

export default function Contact() {
  return (
    <div className="bg-[#f6f8fa] dark:bg-[#1e1e1e] p-8 h-full flex flex-col justify-center font-mono text-sm">
      {/* 인삿말 */}
      <p className=" text-slate-800 dark:text-slate-200 text-base font-bold">
        <span className="text-green-500">yujin@portfolio</span>
        <span className="text-slate-400 dark:text-slate-500">:~$</span>{" "}
        <span>Contact</span>
      </p>

      {/* ASCII 아트 카드 */}
      <div className="w-[36ch] flex flex-col mb-4 text-slate-400 dark:text-slate-600 select-none font-mono">
        <div>┌──────────────────────────────────┐</div>

        {contacts.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="group flex justify-between items-center py-1 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <span className="flex items-center gap-2">
              <span>│</span>
              <span className="text-yellow-500 flex items-center gap-1">
                {item.icon}
                <span className="uppercase tracking-wider font-bold">
                  {item.label}
                </span>
              </span>
            </span>

            <span className="flex items-center gap-2">
              <span className="text-slate-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors font-sans">
                {item.value}
              </span>
              <span>│</span>
            </span>
          </a>
        ))}

        <div>└──────────────────────────────────┘</div>
      </div>

      <div className="mb-3 font-mono">
        <div>┌───────────────┐</div>
        <div>　　　감사합니다. </div>
        <div>└───────────────┘</div>
        <div>　　ᕱ ᕱ ||</div>
        <div>　 ( ･ω･ ||</div>
        <div>　 /　つΦ</div>
      </div>

      {/* 로그아웃 */}
      <p className="mb-3 text-slate-800 dark:text-slate-200 text-base font-bold">
        <span className="text-green-500">yujin@portfolio</span>
        <span className="text-slate-400 dark:text-slate-500">:~$</span>{" "}
        <span>logout</span>
      </p>
      <p className="text-slate-500 mt-1 select-none">Saving session...</p>
      <p className="text-red-500 select-none">[Process exited]</p>
    </div>
  );
}
