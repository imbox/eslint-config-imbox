module.exports = {
  rules: {
    "@typescript-eslint/no-explicit-any": ["off"],
    "no-prototype-builtins": ["off"],
    semi: ["error", "never"]
  },
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["prettier", "@typescript-eslint"]
}
