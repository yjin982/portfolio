"use client";

import { useEffect, useState, useRef } from "react";
import Profile from "@/components/common/profile";
import Skills from "@/components/common/skills";
import Career from "@/components/common/career";
import Projects from "@/components/common/projects";
import Education from "@/components/common/education";
import Certificate from "@/components/common/certificate";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // body에 스냅 스크롤 적용
    document.documentElement.style.scrollSnapType = "y mandatory";
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      // 뷰포트 중앙 위치
      const viewportCenter = scrollPosition + viewportHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionCenter = sectionTop + sectionHeight / 2;

        // 뷰포트 중앙과 섹션 중앙의 거리 계산
        const distance = Math.abs(viewportCenter - sectionCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveSection(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // 초기 상태 설정

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // 정리
      document.documentElement.style.scrollSnapType = "";
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const sections = [
    { component: Profile, name: "profile" },
    { component: Skills, name: "skills" },
    { component: Career, name: "career" },
    { component: Projects, name: "projects" },
    { component: Education, name: "education" },
    { component: Certificate, name: "certificate" },
  ];

  return (
    <main className="w-full max-w-7xl mx-auto">
      {sections.map(({ component: Component, name }, index) => {
        const isActive = activeSection === index;
        const isPast = index < activeSection;
        const isFuture = index > activeSection;

        return (
          <section
            key={name}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="w-full min-h-screen snap-start transition-all duration-1000 ease-in-out"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isPast
                ? "translateY(-20px)"
                : isFuture
                ? "translateY(20px)"
                : "translateY(0)",
            }}
          >
            <div className="w-full">
              <Component />
            </div>
          </section>
        );
      })}
    </main>
  );
}
