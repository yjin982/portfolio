import Link from "next/link";
export default function Page() {
  return (
    <div className="absolute top-0 left-5 right-5 bottom-0 inset-0">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link href="/home">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-(--cursor-color) pr-5 text-5xl text-black dark:text-white font-bold">
            Hello World
          </h1>
        </Link>
      </div>
    </div>
  );
}
