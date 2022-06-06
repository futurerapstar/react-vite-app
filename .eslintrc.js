module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint/eslint-plugin",
    "prettier",
  ],
  extends: ["plugin:prettier/recommended"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
