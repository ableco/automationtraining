module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es6: true,
      jest: true,
    },
    extends: "plugin:testcafe/recommended",
    parser: "babel-eslint",
    parserOptions: {
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
      },
    },
    plugins: ["import", "prettier", "testcafe"],
    rules: {
      "no-dupe-keys": "error",
      "no-undef": "error",
      "no-unreachable": "error",
      "no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", ignoreRestSiblings: true },
      ],
      "no-useless-constructor": "error",
      "no-var": "error",
      "no-duplicate-imports": "error",
      "no-duplicate-case": "error",
      "prettier/prettier": "error",
      "no-console": "error",
      "no-debugger": "error",
      "import/no-unresolved": "error",
      "import/default": "error",
    },
  };