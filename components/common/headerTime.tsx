"use client";

import { useEffect, useState } from "react";

export default function HeaderTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  // Format: YYYY MMM Day DD HH:mm:ss AM/PM
  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      weekday: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };

    return date.toLocaleString("en-US", options);
  };

  return (
    <p className="text-slate-900 dark:text-gray-100">
      {formatTime(currentTime)}
    </p>
  );
}
