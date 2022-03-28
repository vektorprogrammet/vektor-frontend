module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks"
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  parser: "@typescript-eslint/parser",
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
  "ignorePatterns": [
    "/*",
    "!/src",
  ],

  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
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
    "linebreak-style": "off",
    "@typescript-eslint/quotes": "off",
    "arrow-body-style": "off",
    "import/no-extraneous-dependencies": [
      "error",
      { "devDependencies": ["**/*.test.{ts,tsx,js}", "src/setupTests.ts"] }
    ]
  },
};
