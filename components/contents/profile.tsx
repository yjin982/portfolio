"use client";
import { Calendar, Info, Mail, Phone } from "lucide-react"; // 아이콘 추가
import Image from "next/image";

import pic from "@/assets/images/sample.png";

export default function Profile() {
  return (
    <div className="p-8 h-full flex flex-col gap-10">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* 이미지 섹션: 사진첩에서 꺼낸 듯한 프레임 */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-liner-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative h-40 w-40 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-white">
            <Image src={pic} alt="sample" className="object-cover" fill />
          </div>
          <div
            className="absolute -bottom-2 -right-2 bg-green-500 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 shadow-sm"
            title="Active Now"
          ></div>
        </div>

        {/* 텍스트 섹션: 시스템 정보 스타일 */}
        <div className="flex-1 space-y-4 w-full">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              정유진{" "}
              <span className="text-lg font-normal text-slate-400 ml-2">
                Yujin Jeong
              </span>
            </h1>
            <p className="mt-2 text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Info size={16} /> 4년 6개월차 프론트엔드 개발자 | 사용자 경험
              최적화 지향
            </p>
          </div>

          <div className="h-px w-full bg-slate-100 dark:bg-slate-800" />

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 italic">
            &quot;복잡한 문제를 단순하고 명확한 코드로 해결하는 과정에서
            즐거움을 느낍니다.&quot;
          </p>
        </div>
      </div>

      {/* 하단 상세 정보: 디렉토리/속성 리스트 스타일 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: <Calendar size={18} />, label: "Birth", value: "92.08.02" },
          {
            icon: <Mail size={18} />,
            label: "Email",
            value: "yjin.jeong982@gmail.com",
          },
          { icon: <Phone size={18} />, label: "Phone", value: "010-0000-5722" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="group p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50"
          >
            <div className="flex items-center gap-3 mb-2 text-slate-40">
              {item.icon}
              <span className="text-xs font-bold uppercase tracking-wider">
                {item.label}
              </span>
            </div>
            <div className="text-lg truncate">
              <span>{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
