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
    <html lang="en" data-theme={defaultTheme}>
      <body
        className={`${notoSans.variable} ${doHyeon.variable} ${blackHanSans.variable} ${bagelFatOne.variable} antialiased
          h-dvh w-dvw p-8`}
      >
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <main className="border-2 rounded-xl border-slate-950 w-full h-full px-4 pb-2 relative">
          <Header />
          <div className="absolute top-20 left-0 bottom-0 inset-0 px-4 w-full">
            {/* <MusicPlayer /> */}
            {props.children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
