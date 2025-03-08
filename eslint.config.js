import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  js.configs.recommended,  // ✅ JavaScript recommended rules
  tseslint.configs.recommended,  // ✅ TypeScript recommended rules
  react.configs.recommended, // ✅ React recommended rules
  reactHooks.configs.recommended, // ✅ React Hooks recommended rules
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsparser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error", // ✅ Ensures correct React Hook usage
      "react-hooks/exhaustive-deps": "warn", // ✅ Warns about missing dependencies
      "@typescript-eslint/no-unused-vars": "off",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
];