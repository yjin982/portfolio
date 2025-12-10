"use client";

import { useEffect, useState } from "react";

interface ScrollProgressBarProps {
  className?: string;
}

export default function ScrollProgressBar({
  className = "",
}: ScrollProgressBarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(Math.min(progress, 100));
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // 초기 상태 설정

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-2 z-50 transition-opacity duration-300
        ${isVisible ? "opacity-100" : "opacity-0"} ${className}`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.07)" }}
    >
      <div
        className="h-full bg-linear-to-r from-sky-200 to-lime-200 relative overflow-hidden"
        style={{
          width: `${scrollProgress}%`,
          transition: "width 0.1s ease-out",
        }}
      ></div>
    </div>
  );
}
