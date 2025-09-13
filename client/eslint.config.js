// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

const isProduction = process.env.NODE_ENV === "production";
const isRelease = process.env.RELEASE === "true";

export default [
  { ignores: ["dist", "node_modules", "coverage", "eslint.config.js"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.es2020, ...globals.node },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "detect" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      camelcase: ["error", { properties: "always" }],
      "comma-spacing": ["error", { before: false, after: true }],
      "space-infix-ops": "error",
      indent: ["error", 2],
      "max-statements-per-line": ["error", { max: 1 }],
      "new-cap": ["error", { capIsNewExceptions: ["Router"] }],
      "no-console": isRelease ? "error" : isProduction ? "warn" : "off",
      "no-debugger": isRelease ? "error" : "warn",
      "no-unused-vars": isProduction
        ? ["error", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }]
        : [
            "warn",
            {
              varsIgnorePattern: "^[A-Z_]|^(temp|test|dummy)",
              argsIgnorePattern: "^_",
            },
          ],
      ...(isProduction && {
        "prefer-const": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "no-multiple-empty-lines": ["error", { max: 2 }],
      }),
    },
  },
];
