export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <div>this is layout</div>
    </div>
  );
}
