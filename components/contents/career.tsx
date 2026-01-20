export default function Career() {
  // 4년 6개월간의 주요 프로젝트나 성과를 커밋 단위로 구성하세요.
  const projects = [
    {
      hash: "8a1b2c3",
      title: "메인 서비스 리뉴얼 및 성능 최적화",
      period: "2023.01 - 2024.06",
      summary: "기존 레거시 코드를 현대화하고 웹 성능을 개선했습니다.",
      tags: ["React", "Next.js", "Optimization"],
    },
    {
      hash: "4d5e6f7",
      title: "전사 공통 디자인 시스템 구축",
      period: "2021.06 - 2022.12",
      summary:
        "효율적인 협업을 위해 재사용 가능한 컴포넌트 라이브러리를 구축했습니다.",
      tags: ["Storybook", "TailwindCSS", "TypeScript"],
    },
    {
      hash: "9g8h7i6",
      title: "신규 서비스 A 런칭 및 운영",
      period: "2020.01 - 2021.05",
      summary: "기획 단계부터 참여하여 MVP 모델을 성공적으로 런칭했습니다.",
      tags: ["Vue.js", "State Management"],
    },
  ];
  return (
    <>
      <div className="bg-[#f6f8fa] dark:bg-[#1e1e1e] rounded-lg p-6 font-mono text-sm leading-relaxed">
        {/* 1. Terminal Header with Cursor Animation */}
        <div className="mb-10 flex flex-wrap items-center gap-1 text-base">
          <span className="text-green-500 font-bold">yujin@portfolio</span>
          <span className="text-slate-400">:</span>
          <span className="text-blue-500 font-bold">~/career</span>
          <span className="text-slate-500">$</span>
          <div className="flex items-center">
            <span>git log</span>
            <span className="ml-1 w-2 h-5 bg-black dark:bg-white"></span>
          </div>
        </div>

        {/* 2. Company Info (The "Main Branch") */}
        <div className="mb-12 p-4 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg">
          <div className="text-xs text-slate-500 mb-1 uppercase tracking-widest">
            Main Branch
          </div>
          <h2 className="text-2xl font-bold text-black dark:text-white mb-1">
            주식회사 악어디지털
          </h2>
          <p className="text-blue-500 font-bold italic text-base">
            Frontend Developer | 2021. 01 ~ 2025. 06 (4년 6개월)
          </p>
        </div>

        {/* 3. Project Commits */}
        <div className="relative space-y-12 ml-2">
          {/* 수직선 (Branch Line) */}
          <div className="absolute left-[7px] top-2 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>

          {projects.map((project, idx) => (
            <div key={idx} className="relative pl-8">
              {/* 커밋 노드 */}
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-yellow-500 border-4 border-white dark:border-slate-900 z-10"></div>

              <div className="flex flex-wrap items-center gap-x-2 mb-2">
                <span className="text-yellow-600 dark:text-yellow-400 font-bold">
                  commit {project.hash}
                </span>
                <span className="text-slate-400 font-xs">
                  Date: {project.period}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold">
                  <span className="text-pink-500">feat: </span>
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded border border-slate-300 dark:border-slate-600 text-slate-500"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Initial Commit (Entry) */}
          <div className="relative pl-8">
            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-600 border-4 border-white dark:border-slate-900 z-10"></div>
            <div className="text-slate-400 italic">
              initial commit: Joined the company as a Frontend Developer
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
