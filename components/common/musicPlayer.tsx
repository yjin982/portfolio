"use client";

import { CircleSmall, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

export default function MusicPlayer() {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;
  return (
    <div className="absolute top-0 left-5 rounded-xl max-w-60 w-50 h-60 overflow-hidden border bg-gray-100 dark:bg-slate-600 z-50">
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 w-full py-2 px-2 flex gap-2 justify-start items-center text-xs border-b bg-white dark:bg-black">
          <button onClick={() => setIsVisible(false)}>
            <CircleSmall
              color="red"
              fill="red"
              className="flex-none"
              size={14}
            ></CircleSmall>
          </button>

          <span className="font-black-han grow dark:text-white">Lofi Girl</span>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="text-slate-900 hover:text-cyan-700 dark:text-gray-100 flex-none"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
        <iframe
          width="100%"
          src={`https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=${
            isMuted ? 1 : 0
          }&controls=0`}
          title="Lofi Girl"
          allow="autoplay; encrypted-media"
          className="absolute top-15 left-0"
        />
      </div>
    </div>
  );
}
