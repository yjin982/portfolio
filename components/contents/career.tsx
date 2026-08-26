import { ExternalLink } from "lucide-react";

export default function Career() {
  const projects = [
    {
      hash: "ec98606",
      title: "B2B OCR 전자 문서 관리 시스템(Mingo) 구축 및 최적화",
      period: "2023.03 - 2025.06",
      summary:
        "기존 서비스를 대체하기 위해 새롭게 개발된 B2B 전자문서 관리 서비스입니다. 신규 서비스의 초기 런칭 과정에서 프론트엔드 개발을 주 담당했습니다.",
      text: `• 전자문서 폴더/파일 트리 UI 구현
      • 사용자별 문서 열람 권한 UI 및 기능 구현
      • 문서 이미지 확대·축소·회전 기능 구현
      • OCR 텍스트와 원본 이미지 위치 매핑 및 시각화
      • OCR 텍스트 복사 기능 구현
      • 문서 제목 및 OCR 텍스트 기반 검색 및 미리보기 구현
      • Keycloak 로그인 테마 구성
      `,
      tags: ["Vue.js", "TypeScript", "Pinia", "Vite", "Vuetify", "REST API"],
      link: "https://mingo.ai/",
    },
    {
      hash: "ee07771",
      title: "타임스탬프 메일 서비스(Stii timeStamp)",
      period: "2024.04 - 2024.12",
      summary:
        "일본 전자장부 보존법 개정 대응을 위해 개발된 타임스탬프 메일 서비스입니다. Mingo를 주 담당으로 개발하면서 프론트엔드 개발을 지원했습니다.",
      text: `• 송·수신 메일 이력 조회 화면 구현
      • 관련 REST API 연동`,
      tags: ["Vue.js", "TypeScript", "Pinia", "Vite", "Vuetify", "REST API"],
      link: "https://stii.com/timestamp-service/",
    },
    {
      hash: "0e9cd49",
      title: "기존 B2B 서비스 및 사내 시스템 유지보수",
      period: "2022.01 - 2024.01",
      summary:
        "운영 중인 기존 B2B 서비스와 사내 시스템의 유지보수 및 기능 개선을 담당했습니다.",
      text: `• 로그인 연속 실패 시 접속 제한 기능 구현
      • 운영팀을 위한 내부 편의 기능 개발
      • OCR 서버와 연동한 전자 바인더 이미지 전송 기능 개발
      • 기존 서비스 영업 시연을 위한 데모 페이지 개발`,
      tags: ["React", "Redux", "Laravel", "PHP"],
    },
    {
      hash: "23eeeb4",
      title: "Python 기반 RPA 프로그램 개발",
      period: "2021.01 - 2022.01",
      summary:
        "고객사가 지정한 웹사이트에 자동 로그인하여 필요한 데이터를 수집하고, 수집한 데이터를 Excel 파일로 생성하는 RPA 프로그램을 개발했습니다.",
      text: `• Python 기반 EXE 프로그램 개발
      • Selenium을 활용한 웹사이트 탐색 및 데이터 수집
      • 수집 데이터를 기반으로 Excel 파일 생성`,
      tags: ["Python", "Selenium"],
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
        <div className="relative flex flex-col gap-12 ml-2">
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
                <h3 className="text-lg font-bold flex items-center gap-1.5">
                  <span className="text-pink-500">feat: </span>
                  {project.title}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} 바로가기`}
                      className="text-slate-400 hover:text-blue-500 transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl whitespace-pre-line">
                  {project.summary}
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-normal text-sm max-w-2xl whitespace-pre-line">
                  {project.text}
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
              initial commit: Joined the AKUO Digital.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
