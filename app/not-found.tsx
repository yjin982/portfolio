import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-4 min-h-screen relative flex flex-col items-center justify-center">
      <h1 className="text-8xl font-bold">404</h1>
      <p className="mt-4 text-xl">페이지를 찾을 수 없어요.</p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-lg border border-current hover:opacity-70 transition-opacity"
      >
        돌아가기
      </Link>
    </main>
  );
}
