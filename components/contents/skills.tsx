// /* https://github.com/tandpfun/skill-icons#readme */
"use client";
import { useTheme } from "@/components/common/themeContext";

interface SkillItemProps {
  name: string;
  icon: string;
  theme: string;
}

// 개별 스킬 아이콘 컴포넌트
const SkillCard = ({ name, icon, theme }: SkillItemProps) => (
  <div className="group flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1">
    <img
      src={`https://skillicons.dev/icons?i=${icon}&theme=${theme}`}
      alt={name}
      className="w-10 h-10 md:w-12 md:h-12 drop-shadow-md group-hover:drop-shadow-xl transition-all"
    />
    <span className="text-[10px] md:text-xs font-medium text-slate-500 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity tracking-tighter">
      {name}
    </span>
  </div>
);

export default function Skills() {
  const { theme } = useTheme();

  const skillGroups = [
    {
      title: "Main Stack",
      description: "가장 능숙하게 다루며 주력으로 사용하는 기술입니다.",
      skills: [
        { name: "Vue.js", id: "vue" },
        { name: "JavaScript", id: "js" },
        { name: "TypeScript", id: "ts" },
        { name: "HTML5", id: "html" },
        { name: "CSS3", id: "css" },
        { name: "Vuetify", id: "vuetify" },
        { name: "Pinia", id: "pinia" },
        { name: "Vite", id: "vite" },
      ],
    },
    {
      title: "Sub Stack",
      description: "프로젝트 경험이 있으며 협업이 가능한 기술입니다.",
      skills: [
        { name: "React", id: "react" },
        { name: "Nextjs", id: "nextjs" },
        { name: "Tailwind", id: "tailwind" },
        { name: "PHP", id: "php" },
        { name: "Laravel", id: "laravel" },
        { name: "Spring", id: "spring" },
        { name: "Python", id: "py" },
      ],
    },
    {
      title: "Tools",
      description: "생산성을 높이기 위해 활용하는 도구들입니다.",
      skills: [
        { name: "GitHub", id: "github" },
        { name: "GitLab", id: "gitlab" },
        { name: "VS Code", id: "vscode" },
        { name: "WebStorm", id: "webstorm" },
        { name: "Docker", id: "docker" },
        { name: "NPM", id: "npm" },
        { name: "Postman", id: "postman" },
      ],
    },
  ];

  return (
    <div className="p-6 md:p-8 font-mono">
      <div className="flex flex-col gap-6">
        {skillGroups.map((group, idx) => (
          <section key={idx} className="relative">
            {/* 그룹 헤더 */}
            <div className="flex items-baseline gap-3 mb-6 border-b dark:border-slate-800 pb-2">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span className="text-blue-500">{`>`}</span>
                {group.title}
              </h2>
              <span className="text-[10px] text-slate-400 italic font-sans hidden md:inline">
                {`// ${group.description}`}
              </span>
            </div>

            {/* 아이콘 그리드 갤러리 */}
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2 md:gap-4">
              {group.skills.map((skill) => (
                <SkillCard
                  key={skill.id}
                  name={skill.name}
                  icon={skill.id}
                  theme={theme}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
