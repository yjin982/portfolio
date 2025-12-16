import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import prettierConfig from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Prettier 설정은 항상 마지막에 두어 다른 포매팅 규칙을 덮어써야 합니다.
  prettierConfig,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      // 2. console.log 경고 (warn/error는 허용하고 디버깅용 log만 경고)
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],

      // 3. 사용하지 않는 변수 에러 처리 (단, _로 시작하는 변수는 무시)
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // 4. React 컴포넌트 이름은 PascalCase 강제 (선택 사항이나 추천)
      "react/jsx-pascal-case": "warn",
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "dist/**", // 빌드 산출물 추가
    "next-env.d.ts",
    "*.config.js", // 설정 파일들 제외
    "*.config.mjs",
  ]),
]);

export default eslintConfig;
