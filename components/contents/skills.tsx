/* https://github.com/tandpfun/skill-icons#readme */
"use client";
import { useTheme } from "@/components/common/themeContext";

export default function Skills() {
  const { theme } = useTheme();
  return (
    <>
      <div className="w-full flex flex-col">
        <div className="py-6 px-4">
          <p className="font-black-han pb-2 text-xl">{`Main Stack \>`}</p>
          <img
            src={`https://skillicons.dev/icons?i=vue,js,ts,html,css,vuetify,pinia,vite&theme=${theme}`}
            alt="vue,js,ts,html,css,vuetify,pinia,vite"
          />
        </div>
        <div className="py-6 px-4">
          <p className="font-black-han pb-2 text-xl">{`Sub Stack \>`}</p>
          <img
            src={`https://skillicons.dev/icons?i=php,laravel,react,tailwind,spring,py,dotnet,docker,github,gitlab&theme=${theme}`}
            alt="php,laravel,react,tailwind,spring,py,dotnet,docker,github,gitlab"
          />
        </div>
        <div className="py-6 px-4">
          <p className="font-black-han pb-2 text-xl">{`Tools \>`}</p>
          <img
            src={`https://skillicons.dev/icons?i=vscode,webstorm,phpstorm,npm,pnpm,yarn,postman&theme=${theme}`}
            alt="vscode,webstorm,phpstorm,npm,pnpm,yarn,postman"
          />
        </div>
      </div>
    </>
  );
}
