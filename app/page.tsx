import Link from "next/link";

import Career from "@/components/contents/career";
import Certificate from "@/components/contents/certificate";
import Profile from "@/components/contents/profile";
import Skills from "@/components/contents/skills";
export default function Page() {
  return (
    <div className="w-full">
      <section id="home" className="h-[calc(100svh-5rem)]">
        <div className="flex w-full h-svh items-center justify-center">
          <Link href="#portfolio">
            <h1 className="animate-typing1 overflow-hidden whitespace-nowrap text-5xl text-black dark:text-white font-bold">
              안녕하세요,
            </h1>
            <h1 className="animate-typing2 overflow-hidden w-0 whitespace-nowrap text-5xl text-black dark:text-white font-bold">
              ------
            </h1>
            <h1 className="animate-typing3 overflow-hidden w-0 whitespace-nowrap text-5xl text-black dark:text-white font-bold">
              ---입니다.
            </h1>
          </Link>
        </div>
      </section>
      <section id="profile" className="h-svh">
        <Profile />
      </section>
      <section id="skills" className="h-svh scroll-m-20">
        <Skills />
      </section>
      <section id="career" className="h-svh scroll-m-20">
        <Career />
      </section>
      <section id="certification" className="h-svh scroll-m-20">
        <Certificate />
      </section>
      <section id="contact" className="h-svh scroll-m-20">
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </section>
    </div>
  );
}
