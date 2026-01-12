export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="absolute top-0 left-5 right-5 bottom-0 inset-0">
        {children}
      </div>
    </>
  );
}
