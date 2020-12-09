module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:json/recommended",
    "plugin:security/recommended",
  ],
  plugins: ["prettier", "import", "json", "security"],
  rules: {
    "no-console": ["off"],
    "prettier/prettier": ["error"],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "next",
      },
    ],
    "no-underscore-dangle": [
      "error",
      {
        allow: ["_id", "_startTime", "__v"],
      },
    ],
  },
};
