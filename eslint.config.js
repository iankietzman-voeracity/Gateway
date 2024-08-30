const globals = require("globals");
const pluginJs = require("@eslint/js");

module.exports = [
  { files: ["**/*.js"] },
  { languageOptions: { sourceType: "commonjs", globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
        },
      ],
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];
