"use client";
import { Info } from "lucide-react";
import Image from "next/image";

import pic from "@/assets/images/sample.png";

export default function Profile() {
  return (
    <div className="p-8 h-full flex flex-col gap-10">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* 이미지 섹션: 사진첩에서 꺼낸 듯한 프레임 */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-liner-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative h-40 w-40 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-white">
            <Image src={pic} alt="sample" className="object-cover" fill />
          </div>
          <div
            className="absolute -bottom-2 -right-2 bg-green-500 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 shadow-sm"
            title="Active Now"
          ></div>
        </div>

        {/* 텍스트 섹션: 시스템 정보 스타일 */}
        <div className="flex-1 space-y-4 w-full">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              정유진{" "}
              <span className="text-lg font-normal text-slate-400 ml-2">
                Yujin Jeong
              </span>
            </h1>
            <p className="mt-2 text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Info size={16} /> 4년 6개월차 프론트엔드 개발자 | 사용자 경험
              최적화 지향
            </p>
          </div>

          <div className="h-px w-full bg-slate-100 dark:bg-slate-800" />

          <p className="text-md leading-relaxed text-slate-600 dark:text-slate-300">
            &quot;4년차 프론트엔드 개발자로, B2B 신규 서비스의 초기 런칭과 운영
            중인 시스템의 기능 개선을 경험하며 사용자 경험 중심의 UI/UX 설계와
            안정적인 서비스 구현에 집중해 왔습니다. Vue 기반의 신규
            프로젝트에서는 핵심 기능을 주도적으로 구현했으며, React/Laravel 기반
            레거시 서비스에서는 운영 효율과 서비스 품질 개선에 기여했습니다.
            <br />더 좋은 코드 품질을 위해 동료들과 솔직하고 발전적인 리뷰를
            주고 받는 것을 선호합니다. 유관부서와도 원활하게 소통하며, 비즈니스
            목표와 사용자 경험을 동시에 고려한 코드를 작성하려 노력하고
            있습니다.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
