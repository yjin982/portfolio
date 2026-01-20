export default function Certificate() {
  const data = {
    Certification: [
      { Date: "2014.11", name: "정보처리기사" },
      { Date: "2019.10", name: "컴퓨터활용능력 1급" },
      { Date: "2020.07", name: "데이터분석 준전문가" },
    ],
  };
  const jsonString = JSON.stringify(data, null, 2);
  const lines = jsonString.split("\n");

  const highlightJson = (line: string) => {
    const indent = line.match(/^\s*/)?.[0].length || 0;

    // 들여쓰기가 2칸이면 최상위 키, 4칸 이상이면 하위 키
    const isTopLevel = indent === 0;
    const keyColor =
      indent === 2
        ? "font-bold text-black dark:text-white"
        : "text-yellow-600 dark:text-yellow-400";
    const bracketColor = isTopLevel
      ? "text-pink-500"
      : indent === 4
        ? "text-blue-500"
        : "text-pink-500";

    return (
      line
        // 키 (따옴표로 감싼 문자열 뒤에 콜론)
        .replace(/"([^"]+)":/g, `<span class="${keyColor}">"$1"</span>:`)
        // 문자열 값
        .replace(/: "([^"]*)"/g, ': <span class="text-green-500">"$1"</span>')
        // 숫자
        .replace(
          /: (\d+)/g,
          ': <span class="text-yellow-600 dark:text-yellow-400">$1</span>',
        )
        // boolean
        .replace(/: (true|false)/g, ': <span class="text-purple-500">$1</span>')
        // null
        .replace(/: (null)/g, ': <span class="text-gray-500">$1</span>')
        // 중괄호
        .replace(/([{}\[\]])/g, `<span class="${bracketColor}">$1</span>`)
        // 대괄호,
        .replace(/([\[\]])/g, `<span class="text-purple-500">$1</span>`)
    );
  };

  return (
    <div className="bg-[#f6f8fa] dark:bg-[#1e1e1e] rounded-lg overflow-hidden font-mono text-sm">
      <div className="flex">
        {/* 라인 넘버 */}
        <div className="bg-[#f1f3f5] dark:bg-[#252526] text-slate-700 dark:text-slate-300 py-4 px-3 select-none border-r border-gray-700">
          {lines.map((_, i) => (
            <div key={i} className="text-right leading-6">
              {i + 1}
            </div>
          ))}
        </div>
        {/* 코드 */}
        <pre className="flex-1 p-4 overflow-x-auto text-slate-500">
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
