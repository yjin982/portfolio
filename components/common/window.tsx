import { CircleAlert, CircleMinus, CircleX } from "lucide-react";
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
      className="z-40 absolute w-[60%] h-[80%] border rounded-xl bg-white dark:bg-slate-800 flex flex-col"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="border-b flex justify-start items-center p-2 shrink-0 cursor-move"
        onMouseDown={handleMouseDown}
      >
        <button onClick={onClose}>
          <CircleX color="white" fill="red" size={20} />
        </button>
        <button onClick={onMinimize}>
          <CircleMinus color="white" fill="orange" size={20} />
        </button>
        <button className="mr-6">
          <CircleAlert color="white" fill="green" size={20} />
        </button>
        <span className="text-sm font-semibold grow">{label}</span>
      </div>
      <div className="p-2 overflow-y-scroll flex-1 scrollbar">
        <Component />
      </div>
    </div>
  );
}
