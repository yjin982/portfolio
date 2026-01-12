import Link from "next/link";
export default function Page() {
  return (
    <div className="absolute top-0 left-5 right-5 bottom-0 inset-0">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link href="/portfolio">
          <h1 className="animate-typing1 overflow-hidden whitespace-nowrap text-5xl text-black dark:text-white font-bold">
            안녕하세요,
          </h1>
          <h1 className="animate-typing2 overflow-hidden w-0 whitespace-nowrap text-5xl text-black dark:text-white font-bold">
            프론트엔드 개발자
          </h1>
          <h1 className="animate-typing3 overflow-hidden w-0 whitespace-nowrap text-5xl text-black dark:text-white font-bold">
            정유진입니다.
          </h1>
        </Link>
      </div>
    </div>
  );
}
