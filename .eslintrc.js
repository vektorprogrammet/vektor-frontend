module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint"],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  ignorePatterns: ["/*", "!/src"],

  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    quotes: [
      "warn",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    "react/require-default-props": "off",
    "linebreak-style": "off",
    "@typescript-eslint/quotes": "off",
    "arrow-body-style": "off",
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.test.{ts,tsx,js}", "src/setupTests.ts"] },
    ],
    "max-len": "off", // Disable max-len rule
    "jsx-a11y/alt-text": "off", // Disable alt-text rule
  },
};
