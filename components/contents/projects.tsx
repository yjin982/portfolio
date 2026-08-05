"use client";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Home as HomeIcon,
  Lock,
  type LucideIcon,
  NotebookPen,
  Sparkles,
} from "lucide-react";
import { type StaticImageData } from "next/image";
import { useState } from "react";

import pic from "@/assets/images/sample.png";
import Card from "@/components/common/card";

interface TabItem {
  id: string;
  icon: LucideIcon;
  title: string;
  url: string;
}

interface Project extends TabItem {
  image: string | StaticImageData;
  description: string;
}

const HOME_TAB: TabItem = {
  id: "home",
  icon: Globe,
  title: "All Projects",
  url: "#project/home",
};

const PROJECTS: Project[] = [
  {
    id: "simple-stock-trading-diary",
    icon: NotebookPen,
    title: "Simple Stock Trading Diary",
    url: "https://simple-stock-trading-diary.vercel.app/",
    image: pic,
    description: "A simple stock trading diary application.",
  },
  {
    id: "lightstick-wiki",
    icon: Sparkles,
    title: "Lightstick Wiki",
    url: "https://lightstick-museum.vercel.app/",
    image: pic,
    description: "A wiki for lightstick enthusiasts.",
  },
  // 새 프로젝트 추가 시 여기에만 객체 하나 추가
];

const tabs: TabItem[] = [HOME_TAB, ...PROJECTS];

export default function Projects() {
  const [activeTabId, setActiveTabId] = useState(HOME_TAB.id);

  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? HOME_TAB;
  const activeProject = PROJECTS.find((project) => project.id === activeTabId);
  const isHome = activeTabId === HOME_TAB.id;
  const activeIndex = tabs.findIndex((tab) => tab.id === activeTabId);

  const goHome = () => setActiveTabId(HOME_TAB.id);
  const goToPrevTab = () => setActiveTabId(tabs[activeIndex - 1].id);
  const goToNextTab = () => setActiveTabId(tabs[activeIndex + 1].id);

  return (
    <div className="w-full h-full flex flex-col font-mono">
      {/* 브라우저 탭 바 */}
      <div className="flex items-end gap-1 bg-[#eceef0] dark:bg-[#171717] px-2 pt-2 shrink-0 rounded-t-lg">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`flex items-center gap-2 max-w-40 px-3 py-2 text-xs font-medium rounded-t-md truncate transition-colors ${
                tab.id === activeTabId
                  ? "bg-[#f6f8fa] dark:bg-[#1e1e1e] text-slate-800 dark:text-slate-100"
                  : "text-slate-500 dark:text-slate-400 border-t border-x border-slate-300 dark:border-slate-600 hover:bg-slate-200/60 dark:hover:bg-slate-700/40"
              }`}
            >
              <Icon size={14} className="shrink-0" />
              <span className="truncate">{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* 네비게이션 바 (이전 탭/다음 탭/홈 + 주소창) */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 bg-[#f6f8fa] dark:bg-[#1e1e1e] px-3 py-2 shrink-0">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={goToPrevTab}
            disabled={activeIndex === 0}
            aria-label="이전 탭"
            className="p-1.5 rounded-md text-slate-500 dark:text-slate-400 hover:text-blue-500 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:text-slate-500 disabled:hover:bg-transparent dark:disabled:hover:text-slate-400"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={goHome}
            aria-label="홈으로"
            className="p-1.5 rounded-md text-slate-500 dark:text-slate-400 hover:text-blue-500 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
          >
            <HomeIcon size={16} />
          </button>
          <button
            type="button"
            onClick={goToNextTab}
            disabled={activeIndex === tabs.length - 1}
            aria-label="다음 탭"
            className="p-1.5 rounded-md text-slate-500 dark:text-slate-400 hover:text-blue-500 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:text-slate-500 disabled:hover:bg-transparent dark:disabled:hover:text-slate-400"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="flex-1 flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#252526] px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400">
          <Lock size={12} className="shrink-0" />
          {isHome ? (
            <span className="truncate">{activeTab.url}</span>
          ) : (
            <a
              href={activeTab.url}
              target="_blank"
              rel="noopener noreferrer"
              className="truncate text-blue-500 hover:underline"
            >
              {activeTab.url}
            </a>
          )}
        </div>
      </div>

      {/* 콘텐츠 영역: 홈(그리드) / 프로젝트 상세 */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f6f8fa] dark:bg-[#1e1e1e] p-4">
        {isHome ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {PROJECTS.map((project) => (
              <Card
                key={project.id}
                image={project.image}
                imageAlt={project.title}
                title={project.title}
                description={project.description}
                onClick={() => setActiveTabId(project.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-slate-500 dark:text-slate-400">
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
              {activeProject?.title}
            </h2>
            <p className="mt-1 text-sm">{activeProject?.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
