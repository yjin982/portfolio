import type { Metadata } from "next";
import { Black_Han_Sans, Moirai_One, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/nav-bar";
import ScrollToTop from "@/components/common/scroll-to-top";
import Footer from "@/components/common/footer";

const blackHanSans = Black_Han_Sans({
  variable: "--font-black-han-sans",
  weight: ["400"],
  subsets: ["latin"],
});

const moiraiOne = Moirai_One({
  variable: "--font-moirai-one",
  weight: ["400"],
  subsets: ["latin"],
});

const notoSans = Noto_Sans_KR({
  variable: "--font-noto-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
        className={`${notoSans.className} ${moiraiOne.className} ${blackHanSans.variable} antialiased`}
      >
        <NavBar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
