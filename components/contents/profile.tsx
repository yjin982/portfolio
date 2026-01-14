import Image from "next/image";

import pic from "@/assets/images/sample.png";

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-dvh">
      {/* 프로필 사진영역 */}
      <div className="flex items-center justify-center py-5 w-full">
        <div className="w-1/3 flex items-center justify-center">
          <div className="h-32 w-32 rounded-full overflow-hidden border border-black/50 bg-white">
            <Image src={pic} alt="sample" />
          </div>
        </div>
        <div className="w-2/3 flex flex-col items-start justify-center gap-2">
          <div className="text-xl">
            <span className="font-bold low-highlight mr-4">name</span>
            000
          </div>
          <div>간단한 자기 소개</div>
        </div>
      </div>
      <div className="py-8 grid grid-cols-3 gap-4 w-full">
        <div className="border p-4 rounded-lg text-xl">
          <span className="font-bold low-highlight">Birth</span>
          <br />
          000
        </div>
        <div className="border p-4 rounded-lg text-xl">
          <span className="font-bold low-highlight">Email</span>
          <br />
          000
        </div>
        <div className="border p-4 rounded-lg text-xl">
          <span className="font-bold low-highlight">Phone</span>
          <br />
          000
        </div>
      </div>
    </div>
  );
}
