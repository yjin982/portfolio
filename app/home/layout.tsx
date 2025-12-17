import MusicPlayer from "@/components/common/musicPlayer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MusicPlayer />
      <div className="absolute top-0 left-55 inset-0">{children}</div>
    </>
  );
}
