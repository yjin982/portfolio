"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="px-4 min-h-screen relative flex flex-col items-center justify-center">
      <h1 className="text-8xl font-bold">Oops!</h1>
      <p className="mt-4 text-xl">에러가 발생했어요!</p>
      <div className="flex gap-4 mt-8">
        <button
          onClick={reset}
          className="px-6 py-3 rounded-lg border border-current hover:opacity-70 transition-opacity"
        >
          다시 시도
        </button>
        <Link
          href="/"
          className="px-6 py-3 rounded-lg border border-current hover:opacity-70 transition-opacity"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
