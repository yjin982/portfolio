"use client";

import dayjs from "dayjs";
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
    const now = dayjs(date).format("ddd MMM DD. hh:mm A");

    return now;
  };

  return (
    <div className="m-1 text-slate-900 dark:text-gray-100 min-w-[70px]">
      {formatTime(currentTime)}
    </div>
  );
}
