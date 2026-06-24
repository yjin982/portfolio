export default function Career() {
  const projects = [
    {
      hash: "a3f9b2c",
      title: "B2B OCR 전자 문서 관리 시스템(Mingo) 구축 및 최적화",
      period: "2023.03 - 2025.06",
      summary:
        "OCR 처리된 전자 문서를 조회·관리하는 신규 서비스로, 초기 런칭을 위해 필요한 기본 기능(전자 문서 조회, 검색, 다운로드)를 구현했습니다. 또한, OCR 처리된 문서를 조회 시, OCR 텍스트를 이미지 위에 매핑하여 시각화하고, OCR 텍스트 복사가 가능하며, 관리자가 유저 그룹별로 문서 열람 권한을 설정할 수 있는 기능을 개발했습니다.",
      tags: ["Vue.js", "TypeScript", "Pinia", "Vite", "Vuetify", "Rest API"],
    },
    {
      hash: "e7d4c1b",
      title: "타임스탬프 메일 서비스(Stii timeStamp)",
      period: "2024.04 - 2024.12",
      summary:
        "일본 전자장부 보존법 개정 대응으로 개발된 서비스로 청구서, 영수증 등에 필요한 타임스탬프를 메일로 발행할 수 있는 서비스로, 타임스탬프를 발급하기 위해 송·수신된 메일 이력을 조회하는 기능 개발했습니다.",
      tags: ["Vue.js", "TypeScript", "Pinia", "Vite", "Vuetify", "Rest API"],
    },
    {
      hash: "5f2e8d1",
      title: "Pineworks 사내 공정관리 시스템 운영 및 유지보수",
      period: "2022.01 - 2024.01",
      summary:
        "연속 로그인 실패 시 보안 접속 제한 기능을 추가하여 시스템 보안성을 강화했으며, 레거시 프로젝트로 운영 종료 전까지 유지보수를 수행했습니다.",
      tags: ["React", "Redux", "Laravel", "PHP"],
    },
    {
      hash: "5f2e8d1",
      title: "RPA-BPO-DASHBOARD B2B 서비스 운영 및 유지보수",
      period: "2022.01 - 2024.01",
      summary:
        "문서 처리 건별 비용 정산 데이터를 시각화하는 전용 어드민 페이지 구축하여 운영 편의성 개선하고, 기존 서비스 영업 시연을 위한 데모 페이지를 신속히 구현하여 계약 수주 환경을 지원했습니다. 레거시 프로젝트로 운영 종료 전까지 유지보수를 수행했습니다.",
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
