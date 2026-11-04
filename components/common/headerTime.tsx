"use client";

import dayjs from "dayjs";
import { useSyncExternalStore } from "react";

// 1초마다 확인하되, 표시 단위인 분이 바뀔 때만 리렌더
const subscribe = (callback: () => void) => {
  const timerId = setInterval(callback, 1000);
  return () => clearInterval(timerId);
};

const getSnapshot = () => Math.floor(Date.now() / 60000) * 60000;

// 서버(UTC)와 브라우저의 시간대가 달라 hydration 불일치가 생기므로 서버에서는 렌더하지 않음
const getServerSnapshot = () => null;

export default function HeaderTime() {
  const currentTime = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (currentTime === null) return null;

  const fullTime = dayjs(currentTime).format("ddd MMM DD. hh:mm A");
  const shortTime = dayjs(currentTime).format("hh:mm A");

  return (
    <div className="m-1 text-slate-900 dark:text-gray-100 text-nowrap shrink-0">
      <span className="hidden sm:inline">{fullTime}</span>
      <span className="sm:hidden">{shortTime}</span>
    </div>
  );
}
