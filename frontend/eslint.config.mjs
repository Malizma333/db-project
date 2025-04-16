import { defineConfig } from "eslint/config";
import ts from "typescript-eslint";
import globals from "globals";

export default defineConfig([
  {
    ignores: ["dist", "*.config.*"]
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    }
  },
  ts.configs.recommendedTypeChecked,
]);