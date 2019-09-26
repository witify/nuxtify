module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8,
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    indent: [
        "error",
        "tab"
    ],
    "linebreak-style": [
        "error",
        "windows"
    ],
    quotes: [
        "error",
        "double"
    ],
    semi: [
        "error",
        "always"
    ],
    "no-empty": 0,
    "no-unused-vars": 0,
    "no-undef": 0,
    "no-mixed-spaces-and-tabs": 0,
    "no-async-promise-executor": "off",
    "no-misleading-character-class": "off",
    "no-prototype-builtins": "off",
    "no-shadow-restricted-names": "off",
    "no-useless-catch": "off",
    "no-with": "off",
    "require-atomic-updates": "off",
  }
}
