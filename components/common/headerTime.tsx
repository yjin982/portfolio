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

  const fullTime = dayjs(currentTime).format("ddd MMM DD. hh:mm A");
  const shortTime = dayjs(currentTime).format("hh:mm A");

  return (
    <div className="m-1 text-slate-900 dark:text-gray-100 text-nowrap shrink-0">
      <span className="hidden sm:inline">{fullTime}</span>
      <span className="sm:hidden">{shortTime}</span>
    </div>
  );
}
