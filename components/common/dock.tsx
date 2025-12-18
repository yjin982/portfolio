interface DockProps {
  minimizedWindows: Array<{
    name: string;
    label: string;
    icon: React.ComponentType<{ size: number }>;
  }>;
  onRestore: (name: string) => void;
}

export default function Dock({ minimizedWindows, onRestore }: DockProps) {
  if (minimizedWindows.length === 0) return null;

  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-16 z-50 bg-white-900/10 rounded-xl border border-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm px-4 flex items-center gap-4">
      {minimizedWindows.map((window) => {
        const Icon = window.icon;
        return (
          <button
            key={window.name}
            onClick={() => onRestore(window.name)}
            className="flex flex-col items-center justify-center hover:scale-110 transition-transform cursor-pointer"
          >
            <Icon size={32} />
          </button>
        );
      })}
    </div>
  );
}
