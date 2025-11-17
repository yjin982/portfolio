"use client";

export default function About() {
  return (
    <div>
      {/* 메인 콘텐츠 */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">페이지 제목</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">섹션 1</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            여기에 본문 내용이 들어갑니다. 좌우 여백이 있고 중앙에 정렬되어
            있습니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            스크롤을 내려보세요. 네비게이션 바가 사라지고, 상단에 마우스를
            올리면 다시 나타납니다.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">섹션 2</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            더 많은 콘텐츠를 추가하여 스크롤이 생기도록 합니다.
          </p>
          {[...Array(10)].map((_, i) => (
            <p key={i} className="text-gray-600 mb-3">
              예시 단락 {i + 1}: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          ))}
        </section>
      </main>
    </div>
  );
}
