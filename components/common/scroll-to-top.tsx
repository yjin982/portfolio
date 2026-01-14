"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        className={`fixed right-10 bottom-5 bg-gray-100 hover:bg-gray-300 dark:bg-slate-600 border border-slate-900 px-2 py-2 rounded-full shadow-lg transition-all duration-300
            ${isButtonVisible ? "opacity-100" : "opacity-0"}`}
        onClick={scrollToTop}
      >
        <ChevronUp />
      </button>
    </div>
  );
}
