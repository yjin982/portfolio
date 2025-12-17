"use client";
import {
  Award,
  Briefcase,
  CircleSmall,
  FileUser,
  GraduationCap,
  LibraryBig,
  Sword,
} from "lucide-react";
import { useState } from "react";

import Career from "@/components/common/career";
import Certificate from "@/components/common/certificate";
import Education from "@/components/common/education";
import Profile from "@/components/common/profile";
import Projects from "@/components/common/projects";
import Skills from "@/components/common/skills";

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>("profile");
  const iconSize = 40;

  const sections = [
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

  const handleClick = (sectionName: string) => {
    setActiveSection(sectionName);
  };

  const handleClose = () => {
    setActiveSection(null);
  };

  const ActiveComponent = sections.find(
    (s) => s.name === activeSection
  )?.component;

  return (
    <div>
      {/* 새 창 */}
      {activeSection && (
        <div className="z-40 absolute top-0 left-[2%] w-[80%] h-[80%] border rounded-xl bg-white dark:bg-slate-800 flex flex-col">
          <div className="border-b flex justify-start items-center p-2 shrink-0">
            <button onClick={handleClose}>
              <CircleSmall color="red" fill="red" size={20} />
            </button>
            <button>
              <CircleSmall color="orange" fill="orange" size={20} />
            </button>
            <button className="grow">
              <CircleSmall color="green" fill="green" size={20} />
            </button>
          </div>
          <div className="p-2 overflow-y-scroll flex-1 scrollbar">
            {ActiveComponent && <ActiveComponent />}
          </div>
        </div>
      )}

      {/* 아이콘 목록 */}
      <div className="absolute top-0 right-10 grid grid-cols-1 gap-4 text-sm">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.name}
              onClick={() => handleClick(section.name)}
              className="flex flex-col items-center justify-center hover:opacity-70 cursor-pointer"
            >
              <Icon size={iconSize} />
              {section.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
