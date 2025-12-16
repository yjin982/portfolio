import Image from "next/image";

import pic from "@/assets/images/sample.png";

export default function Profile() {
  //bg-blue-500 mix-blend-multiply
  const itemClass = `text-xl inline-block px-1 shadow-[0_0.5em_0_rgba(255,255,50,0.7)]`;
  return (
    <div className="w-full h-full py-10 flex">
      <div className="w-1/6 flex items-center justify-center">
        <div className="h-32 w-32 rounded-full overflow-hidden border border-black/50 bg-white">
          <Image src={pic} alt="sample" />
        </div>
      </div>
      <div className="w-5/6 flex flex-col items-start justify-center">
        <div className="flex flex-col gap-2">
          <div className={itemClass}>정유진</div>
          <div className={itemClass}>92.08.02</div>
          <div className={itemClass}>yjin.jeong982@gmail.com</div>
        </div>
      </div>
    </div>
  );
}
