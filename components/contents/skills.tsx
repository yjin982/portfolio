/* https://github.com/tandpfun/skill-icons#readme */

export default function Skills() {
  return (
    <>
      <div className="w-full">
        <div>
          익숙해요
          <img
            src={`https://skillicons.dev/icons?i=vue,js,ts,html,css,vuetify,pinia,vite&theme=light`}
          />
        </div>
        <div>
          사용해봤어요
          <img src="https://skillicons.dev/icons?i=php,laravel,react,tailwind,spring,py,dotnet,docker,github,gitlab" />
        </div>
        <div>
          Tools
          <img src="https://skillicons.dev/icons?i=vscode,webstorm,phpstorm,npm,pnpm,yarn,postman" />
        </div>
      </div>
    </>
  );
}
