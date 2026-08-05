interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function Label({ children, className = "" }: LabelProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:text-slate-300 ${className}`}
    >
      {children}
    </span>
  );
}
