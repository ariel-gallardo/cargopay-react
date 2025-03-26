import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.config({
    extends: ['next'],
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "react-hooks/exhaustive-deps": "error",
      "import/no-anonymous-default-export": "error",
      "@typescript-eslint/no-wrapper-object-types": "error",
      "react/display-name": "error",
      "@next/next/no-img-element": "error",
      "jsx-a11y/alt-text": "error"
    }
  })
];

export default eslintConfig;
