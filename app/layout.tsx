import "./globals.css";

import type { Metadata } from "next";
import {
  Bagel_Fat_One,
  Black_Han_Sans,
  Do_Hyeon,
  Noto_Sans_KR,
} from "next/font/google";
import Script from "next/script";

import { themeScript } from "@/assets/scripts/theme";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import MusicPlayer from "@/components/common/musicPlayer";
import ScrollToTop from "@/components/common/scroll-to-top";
// import MusicPlayer from "@/components/common/musicPlayer";
import { getServerTheme } from "@/utils/theme";

const notoSans = Noto_Sans_KR({
  variable: "--font-noto-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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

export default async function RootLayout(props: { children: React.ReactNode }) {
  const defaultTheme = await getServerTheme();
  // const defaultTheme = "light"; // 또는 cookies로 저장된 값

  return (
    <html lang="en" data-theme={defaultTheme} className="scroll-smooth">
      <body
        className={`${notoSans.variable} ${doHyeon.variable} ${blackHanSans.variable} ${bagelFatOne.variable} antialiased w-full p-5`}
      >
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <main className="px-4 mt-10 mb-4 min-h-screen relative">
          <Header />
          <div>
            <MusicPlayer />
            {props.children}
          </div>
          <Footer />
          <ScrollToTop />
        </main>
      </body>
    </html>
  );
}
