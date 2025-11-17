import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      {children}
      <ScrollToTop />
      <Footer />
    </div>
  );
}
