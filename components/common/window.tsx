import { CircleAlert, Minus, X } from "lucide-react";
import { useState } from "react";

interface WindowProps {
  name: string;
  label: string;
  icon: React.ComponentType<{ size: number }>;
  component: React.ComponentType;
  onClose: () => void;
  onMinimize: () => void;
  initialPosition: { x: number; y: number };
}

export default function Window({
  label,
  component: Component,
  onClose,
  onMinimize,
  initialPosition,
}: WindowProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="z-40 absolute w-[80%] h-[80%] border dark:border-slate-500 rounded-xl bg-white dark:bg-slate-900 flex flex-col"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="border-b dark:border-b-slate-500 flex items-center p-2 shrink-0 cursor-move"
        onMouseDown={handleMouseDown}
      >
        <div className="flex justify-center items-center gap-1">
          <button
            onClick={onClose}
            className="rounded-full h-4 w-4 bg-red-500 flex justify-center items-center"
          >
            <X color="white" strokeWidth={3} size={12} />
          </button>
          <button
            onClick={onMinimize}
            className="rounded-full h-4 w-4 bg-orange-400 flex justify-center items-center"
          >
            <Minus color="white" strokeWidth={4} size={12} />
          </button>
          {/* <button>
            <CircleAlert color="white" fill="green" size={20} />
          </button> */}
        </div>
        <div className="flex justify-center text-sm font-semibold grow">
          {label}
        </div>
      </div>
      <div className="p-2 overflow-y-scroll flex-1 scrollbar">
        <Component />
      </div>
    </div>
  );
}
