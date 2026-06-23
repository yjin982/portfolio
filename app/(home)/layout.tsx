import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import ScrollToTop from "@/components/common/scroll-to-top";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="px-4 mt-10 mb-4 min-h-screen relative">
      <Header />
      <div>{children}</div>
      <ScrollToTop />
      <Footer />
    </main>
  );
}
