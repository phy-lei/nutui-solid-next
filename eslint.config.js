import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from 'eslint-plugin-astro';
import solid from "eslint-plugin-solid/configs/recommended.js";
import * as tsParser from "@typescript-eslint/parser";

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  eslint.configs.recommended,
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: [
      "packages/nutui-solid/dist",
      "packages/nutui-solid-site/.astro",
      "packages/nutui-solid/scripts"
    ],
  },
  {
    files: ["packages/**/*.{ts,tsx}"],
    ...solid,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json",
      },
    },

    rules: {
      // The following two are for debug use. Should fix before release.
      "@typescript-eslint/no-unused-vars": "warn",
      "prefer-const": "warn",
      // NDNts style class & namespace combination requires turning off the following
      "@typescript-eslint/no-namespace": "off",
      // Some cannot be fixed due to dependency issue
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-var-requires": "off",
    },
  },
];
