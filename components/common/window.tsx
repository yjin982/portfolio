"use client";
interface WindowProps {
  name: string;
  component: React.ComponentType;
}

export default function Window({ name, component: Component }: WindowProps) {
  return (
    <div className=" w-full max-h-[80vh] border dark:border-slate-500 rounded-xl bg-white dark:bg-slate-900 flex flex-col">
      <div className="border-b dark:border-b-slate-500 flex items-center py-1 px-2 shrink-0">
        <div className="flex justify-center items-center gap-1">
          <div className="rounded-full h-3 w-3 bg-red-500"></div>
          <div className="rounded-full h-3 w-3 bg-orange-400"></div>
          <div className="rounded-full h-3 w-3 bg-green-400"></div>
        </div>
        <div className="flex justify-center text-sm font-semibold grow">
          {name}
        </div>
      </div>
      <div className="p-2 overflow-y-auto flex-1 scrollbar min-h-0">
        <Component />
      </div>
    </div>
  );
}
