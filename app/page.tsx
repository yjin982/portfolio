import Career from "@/components/common/career";
import Certificate from "@/components/common/certificate";
import Education from "@/components/common/education";
import Profile from "@/components/common/profile";
import Projects from "@/components/common/projects";
import Skills from "@/components/common/skills";

export default function Page() {
  const sections = [
    { component: Profile, name: "profile" },
    { component: Skills, name: "skills" },
    { component: Career, name: "career" },
    { component: Projects, name: "projects" },
    { component: Education, name: "education" },
    { component: Certificate, name: "certificate" },
  ];

  return (
    <>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </>
  );

  // return (
  //   <main className="w-full max-w-7xl mx-auto">
  //     {sections.map(({ component: Component, name }, index) => {
  //       return (
  //         <section key={name} className="w-full h-full max-h-screen">
  //           <Component />
  //         </section>
  //       );
  //     })}
  //   </main>
  // );
}
