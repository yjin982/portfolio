"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full">
      <section id="home" className="h-[calc(100svh-5rem)]">
        <div className="flex w-full h-svh items-center justify-center">
          <Link href="#contact">
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
      </section>
      <section id="contact" className="h-svh scroll-mt-30">
        <div className="flex flex-col items-center justify-start justify-self-center w-full md:w-[70%] h-svh mt-40"></div>
      </section>
    </div>
  );
}
