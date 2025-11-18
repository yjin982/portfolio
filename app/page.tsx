import Profile from "@/components/common/profile";
import Skills from "@/components/common/skills";
import Career from "@/components/common/career";
import Projects from "@/components/common/projects";
import Etc from "@/components/common/etc";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-32 px-5 bg-white dark:bg-black sm:items-start">
        <Profile />
        <Skills />
        <Career />
        <Projects />
        <Etc />
      </main>
    </div>
  );
}
