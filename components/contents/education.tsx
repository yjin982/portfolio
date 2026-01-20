"use client";
import {
  BookOpen,
  ChevronRight,
  Code2,
  Folder,
  GraduationCap,
  MapPin,
  Terminal,
} from "lucide-react";

export default function Education() {
  const academicData = [
    {
      period: "2011.03 - 2017.02",
      school: "단국대학교",
      major: "소프트웨어학과",
      status: "Graduated",
      location: "Yongin, Korea",
    },
    {
      period: "2008.03 - 2011.02",
      school: "오상고등학교",
      major: "",
      status: "Graduated",
      location: "Gumi, Korea",
    },
  ];

  const trainingData = [
    {
      period: "2020.01 - 2020.07",
      title: "클라우드 기반의 자바 응용 및 빅데이터 분석",
      institution: "KIC 캠퍼스",
      description:
        "Java Spring Framework 기반의 웹 개발과 R, Python을 이용한 데이터 분석 기초",
      location: "Seoul, Korea",
    },
  ];

  return (
    <div className="p-6 font-mono">
      {/* 상단 경로 표시 (Breadcrumbs) */}
      <div className="flex items-center gap-2 text-sm text-slate-400 mb-10 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
        <Folder size={14} />
        <span>Users</span>
        <ChevronRight size={12} />
        <span>yujin</span>
        <ChevronRight size={12} />
        <span className="text-blue-500 font-bold">Education</span>
      </div>

      <div className="space-y-16">
        {/* 1. Academic Section */}
        <section>
          <div className="flex items-center gap-2 mb-8 text-slate-400 border-b dark:border-slate-800 pb-2">
            <BookOpen size={16} className="text-yellow-500" />
            <span className="text-sm font-bold uppercase tracking-wider">
              Academic_Background
            </span>
          </div>

          <div className="space-y-10">
            {academicData.map((item, idx) => (
              <div key={idx} className="relative pl-6 group">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-500">
                    <GraduationCap size={22} />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                        {item.school}
                      </h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full border border-green-500 text-green-500 font-bold uppercase">
                        {item.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                      {item.major && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-blue-500 font-bold">
                            major:
                          </span>
                          <span>{item.major}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5">
                        <span className="text-blue-500 font-bold">period:</span>
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Training Section */}
        <section>
          <div className="flex items-center gap-2 mb-8 text-slate-400 border-b dark:border-slate-800 pb-2">
            <Terminal size={16} className="text-blue-500" />
            <span className="text-sm font-bold uppercase tracking-wider">
              External_Training
            </span>
          </div>

          <div className="space-y-10">
            {trainingData.map((item, idx) => (
              <div key={idx} className="relative pl-6 group">
                <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-slate-100 dark:bg-slate-800 group-last:h-0"></div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-purple-50 dark:bg-purple-900/30 text-purple-500">
                    <Code2 size={22} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                        {item.title}
                        <span className="text-sm text-slate-400 font-semibold">
                          &nbsp;| {item.institution}
                        </span>
                      </h3>
                      <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
                        {`// ${item.description}`}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500 pt-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-blue-500 font-bold">period:</span>
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
