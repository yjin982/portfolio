"use client";

export default function NavBar() {
  return (
    <nav className="fixed top-0 right-0 w-full bg-white/50 backdrop-blur-md">
      <div className="flex justify-start items-center px-6 py-4">
        <div className="px-4 text-xl font-bold">Title</div>
        <div className="flex gap-4">
          <button className="px-4 py-2 hover:bg-gray-200 rounded">About</button>
          <button className="px-4 py-2 hover:bg-gray-200 rounded">
            Portfolio
          </button>
          <button className="px-4 py-2 hover:bg-gray-200 rounded">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
