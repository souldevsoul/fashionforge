import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "eslint-plugin-product-quality/**",
  ]),
  {
    rules: {
      // Relax some rules
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }],
      "react/no-unescaped-entities": "error",
      "@next/next/no-img-element": "warn",
      "@next/next/no-html-link-for-pages": "error",
      "react-hooks/exhaustive-deps": "warn",
    }
  }
]);

export default eslintConfig;
