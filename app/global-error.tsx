"use client";
import "@/app/globals.css";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="ko" className="font-sans" suppressHydrationWarning>
      <body>
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
            <a
              className="px-6 py-3 rounded-lg border border-current hover:opacity-70 transition-opacity"
              href="/"
            >
              홈으로 돌아가기
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
