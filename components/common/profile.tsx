export default function Profile() {
  return (
    <div className="w-full bg-lime-100">
      <div className="m-2 p-5">title</div>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-3 bg-blue-500 rounded-4xl">이름</div>
        <div className="p-3 bg-blue-500 rounded-4xl">생년월일</div>
        <div className="p-3 bg-blue-500 rounded-4xl">주소</div>
        <div className="p-3 bg-blue-500 rounded-4xl">전화</div>
        <div className="p-3 bg-blue-500 rounded-4xl">이메일</div>
        <div className="p-3 bg-blue-500 rounded-4xl">학력</div>
      </div>
    </div>
  );
}
