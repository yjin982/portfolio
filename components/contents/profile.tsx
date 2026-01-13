import Image from "next/image";

import pic from "@/assets/images/sample.png";

export default function Profile() {
  return (
    <div className="inset-0 p-2 h-full">
      {/* 프로필 사진영역 */}
      <div className="flex items-center justify-center py-5">
        <div className="w-1/3 flex items-center justify-center">
          <div className="h-32 w-32 rounded-full overflow-hidden border border-black/50 bg-white">
            <Image src={pic} alt="sample" />
          </div>
        </div>
        <div className="w-2/3 flex flex-col items-start justify-center gap-2">
          <div className="text-xl font-bold">
            <span className="low-highlight mr-4">name</span> 000
          </div>
          <div>간단한 자기 소개</div>
        </div>
      </div>
      <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Birth</td>
              <td>00.00.00</td>
              <td>Email</td>
              <td>----@gmail.com</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
