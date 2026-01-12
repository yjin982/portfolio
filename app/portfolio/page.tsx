"use client";
import {
  Award,
  Briefcase,
  FileUser,
  GraduationCap,
  LibraryBig,
  Sword,
} from "lucide-react";
import { useState } from "react";

import Dock from "@/components/common/dock";
import Window from "@/components/common/window";
import Career from "@/components/contents/career";
import Certificate from "@/components/contents/certificate";
import Education from "@/components/contents/education";
import Profile from "@/components/contents/profile";
import Projects from "@/components/contents/projects";
import Skills from "@/components/contents/skills";

type WindowState = "open" | "minimized" | "closed";

interface Section {
  component: React.ComponentType;
  name: string;
  icon: React.ComponentType<{ size: number }>;
  label: string;
}

export default function Page() {
  const iconSize = 40;

  const sections: Section[] = [
    { component: Profile, name: "profile", icon: FileUser, label: "Profile" },
    { component: Skills, name: "skills", icon: Sword, label: "Skills" },
    { component: Career, name: "career", icon: Briefcase, label: "Career" },
    {
      component: Projects,
      name: "projects",
      icon: LibraryBig,
      label: "Projects",
    },
    {
      component: Education,
      name: "education",
      icon: GraduationCap,
      label: "Education",
    },
    {
      component: Certificate,
      name: "certificate",
      icon: Award,
      label: "Certificate",
    },
  ];

  const [windowStates, setWindowStates] = useState<Record<string, WindowState>>(
    sections.reduce(
      (acc, section) => ({ ...acc, [section.name]: "closed" }),
      {}
    )
  );

  const handleIconClick = (sectionName: string) => {
    setWindowStates((prev) => ({
      ...prev,
      [sectionName]: "open",
    }));
  };

  const handleClose = (sectionName: string) => {
    setWindowStates((prev) => ({
      ...prev,
      [sectionName]: "closed",
    }));
  };

  const handleMinimize = (sectionName: string) => {
    setWindowStates((prev) => ({
      ...prev,
      [sectionName]: "minimized",
    }));
  };

  const handleRestore = (sectionName: string) => {
    setWindowStates((prev) => ({
      ...prev,
      [sectionName]: "open",
    }));
  };

  const openWindows = sections.filter(
    (section) => windowStates[section.name] === "open"
  );

  const minimizedWindows = sections.filter(
    (section) => windowStates[section.name] === "minimized"
  );

  return (
    <>
      {/* 열린 창들 */}
      {openWindows.map((section, index) => (
        <Window
          key={section.name}
          name={section.name}
          label={section.label}
          icon={section.icon}
          component={section.component}
          onClose={() => handleClose(section.name)}
          onMinimize={() => handleMinimize(section.name)}
          initialPosition={{ x: 20 + index * 30, y: 20 + index * 30 }}
        />
      ))}

      {/* 아이콘 목록 */}
      <div className="absolute top-0 right-10 grid grid-cols-1 gap-4 text-sm">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.name}
              onClick={() => handleIconClick(section.name)}
              className="flex flex-col items-center justify-center hover:opacity-70 cursor-pointer text-black dark:text-white"
            >
              <Icon size={iconSize} />
              {section.label}
            </button>
          );
        })}
      </div>

      {/* Dock (최소화된 목록) */}
      <Dock minimizedWindows={minimizedWindows} onRestore={handleRestore} />
    </>
  );
}
