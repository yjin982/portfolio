"use client";

import { Volume2, VolumeX, X } from "lucide-react";
import { useState } from "react";

export default function MusicPlayer() {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;
  return (
    <div className="fixed top-20 right-8 rounded-xl w-50 overflow-hidden border dark:border-slate-500 bg-gray-100 dark:bg-slate-600">
      <div className="relative w-full h-auto">
        <div className="w-full p-2 flex gap-2 justify-start items-center text-xs border-b dark:border-b-slate-500 bg-white dark:bg-black">
          {/* close button  */}
          <button
            className="rounded-full h-4 w-4 bg-red-500 flex justify-center items-center"
            onClick={() => setIsVisible(false)}
          >
            <X color="white" className="flex-none" size={12} strokeWidth={3} />
          </button>
          {/* title */}
          <span className="font-bold grow dark:text-white">Lofi Girl</span>
          {/* mute on/off */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="text-slate-900 hover:text-cyan-700 dark:text-gray-100 flex-none"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
        {/* live video */}
        <div className="w-full aspect-video hidden md:block">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=${
              isMuted ? 1 : 0
            }&controls=0`}
            title="Lofi Girl"
            allow="autoplay; encrypted-media"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
