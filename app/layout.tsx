import type { Metadata } from "next";
import {
  Noto_Sans_KR,
  Do_Hyeon,
  Black_Han_Sans,
  Bagel_Fat_One,
} from "next/font/google";
import "./globals.css";
import ProgressBar from "@/components/common/scroll-progress-bar";
import ScrollToTop from "@/components/common/scroll-to-top";
import Footer from "@/components/common/footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${doHyeon.variable} ${blackHanSans.variable} ${bagelFatOne.variable} antialiased
          h-screen`}
      >
        <ProgressBar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
