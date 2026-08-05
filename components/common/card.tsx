import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: string | StaticImageData;
  imageAlt: string;
  title: string;
  description: string;
  tags?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Card({
  image,
  imageAlt,
  title,
  description,
  tags,
  onClick,
  className = "",
}: CardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex flex-col h-72 w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-left shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      <div className="relative flex-2 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex-1 min-h-0 flex flex-col gap-1 p-3">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate">
          {title}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
          {description}
        </p>
        {tags && (
          <div className="mt-auto flex flex-wrap gap-1 pt-1">{tags}</div>
        )}
      </div>
    </button>
  );
}
