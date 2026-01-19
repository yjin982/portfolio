export default function Education() {
  const data = {
    Education: [
      { Date: "2011.03 ~ 2017.02", name: "단국대학교 소프트웨어학과" },
      { Date: "2008.03 ~ 2011.02", name: "오상고등학교" },
    ],
    Study: [
      {
        Date: "2020.01 ~ 2020.07",
        Title: "클라우드 기반의 자바 응용 및 빅데이터 분석 ",
        Desc: "Java Spring Framework 기반의 웹 개발과 R, Python을 이용한 데이터 분석 기초",
      },
    ],
  };
  const jsonString = JSON.stringify(data, null, 2);
  const lines = jsonString.split("\n");

  const highlightJson = (line: string) => {
    const indent = line.match(/^\s*/)?.[0].length || 0;

    // 들여쓰기가 2칸이면 최상위 키, 4칸 이상이면 하위 키
    const isTopLevel = indent === 0;
    const keyColor = indent === 2 ? "text-gray-300" : "text-yellow-400";
    const bracketColor = isTopLevel
      ? "text-gray-300"
      : indent === 4
      ? "text-cyan-400"
      : "text-pink-400";

    return (
      line
        // 키 (따옴표로 감싼 문자열 뒤에 콜론)
        .replace(/"([^"]+)":/g, `<span class="${keyColor}">"$1"</span>:`)
        // 문자열 값
        .replace(/: "([^"]*)"/g, ': <span class="text-green-400">"$1"</span>')
        // 숫자
        .replace(/: (\d+)/g, ': <span class="text-orange-400">$1</span>')
        // boolean
        .replace(/: (true|false)/g, ': <span class="text-purple-400">$1</span>')
        // null
        .replace(/: (null)/g, ': <span class="text-gray-500">$1</span>')
        // 중괄호
        .replace(/([{}\[\]])/g, `<span class="${bracketColor}">$1</span>`)
        // 대괄호,
        .replace(/([\[\]])/g, `<span class="text-purple-400">$1</span>`)
    );
  };

  return (
    <div className="bg-[#1e1e1e] rounded-lg overflow-hidden font-mono text-sm">
      <div className="flex">
        {/* 라인 넘버 */}
        <div className="bg-[#252526] text-gray-300 py-4 px-3 select-none border-r border-gray-700">
          {lines.map((_, i) => (
            <div key={i} className="text-right leading-6">
              {i + 1}
            </div>
          ))}
        </div>
        {/* 코드 */}
        <pre className="flex-1 p-4 overflow-x-auto text-gray-300">
          {lines.map((line, i) => (
            <div
              key={i}
              className="leading-6"
              dangerouslySetInnerHTML={{ __html: highlightJson(line) }}
            />
          ))}
        </pre>
      </div>
    </div>
  );
}
