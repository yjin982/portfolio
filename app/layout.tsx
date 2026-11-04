import "./globals.css";

import type { Metadata } from "next";
import {
  Bagel_Fat_One,
  Black_Han_Sans,
  Do_Hyeon,
  Noto_Sans_KR,
} from "next/font/google";

import { themeScript } from "@/assets/scripts/theme";
import { ThemeProvider } from "@/components/common/themeContext";

// weight 미지정 시 가변 폰트(100~900) 파일 하나만 로드
const notoSans = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const doHyeon = Do_Hyeon({
  variable: "--font-do-hyeon",
  weight: ["400"],
  subsets: ["latin"],
});

const blackHanSans = Black_Han_Sans({
  variable: "--font-black-han-sans",
  weight: ["400"],
  subsets: ["latin"],
});

const bagelFatOne = Bagel_Fat_One({
  variable: "--font-bagel-fat-one",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yujin's Portfolio",
  description: "for portfolio",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* 첫 페인트 전에 data-theme을 설정해 테마 깜빡임 방지 */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${notoSans.variable} ${doHyeon.variable} ${blackHanSans.variable} ${bagelFatOne.variable} antialiased w-full`}
      >
        <ThemeProvider>{props.children}</ThemeProvider>
      </body>
    </html>
  );
}
