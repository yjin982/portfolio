export default function Career() {
  // 피드백 내용을 반영하여 수치화 및 기술적 도전을 강조한 진짜 프로젝트 데이터입니다.
  const projects = [
    {
      hash: "a3f9b2c",
      title: "B2B OCR 전자 문서 관리 시스템(Mingo) 구축 및 최적화",
      period: "2023.03 - 2025.06",
      summary:
        "10만 건 이상의 대용량 문서 메타데이터를 효율적으로 렌더링하기 위해 가상 스크롤(Virtual Scroll)을 도입하여 초기 로딩 속도를 40% 개선했습니다. 또한, 다양한 해상도에서 OCR 좌표 정밀도를 유지하기 위한 좌표 변환 로직을 자체 설계하고, Canvas API를 활용하여 수천 개의 텍스트 객체 렌더링 성능을 최적화했습니다. 복잡한 권한 체계는 Pinia로 중앙 집중 관리하여 데이터 정합성 문제를 해결했습니다.",
      tags: ["Vue.js", "TypeScript", "Pinia", "Vite", "Rest API", "Axios"],
    },
    {
      hash: "e7d4c1b",
      title: "글로벌 전자문서 타임스탬프 메일 서비스(Stii timeStamp) 개발",
      period: "2024.04 - 2024.12",
      summary:
        "일본 현지 사용자의 메일 사용 패턴을 분석하여 조회 필터를 고도화하고 다국어 처리를 안정화했습니다. 타임스탬프 발급 프로세스를 기존 3단계에서 1단계로 직관적으로 단축함으로써 서비스 편의성을 극대화하고 사용자 이탈률을 15% 감소시키는 임팩트를 냈습니다.",
      tags: ["Vue.js", "TypeScript", "Vuetify", "Rest API", "Axios"],
    },
    {
      hash: "5f2e8d1",
      title: "사내 공정관리 시스템 및 B2B 서비스 운영 안정화",
      period: "2022.01 - 2024.01",
      summary:
        "반복적인 수동 OCR 검수 프로세스를 자동화하여 운영팀의 업무 시간을 주당 10시간 이상 절감했습니다. 연속 로그인 실패 시 보안 접속 제한 기능을 추가하여 시스템 보안성을 강화했으며, 기존 서비스 영업 시연을 위한 데모 페이지를 신속히 구현하여 계약 수주 환경을 지원했습니다.",
      tags: ["React", "Redux", "Laravel", "PHP"],
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
                <span className="text-slate-400 text-xs">
                  Date: {project.period}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold">
                  <span className="text-pink-500">feat: </span>
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl whitespace-pre-line">
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
