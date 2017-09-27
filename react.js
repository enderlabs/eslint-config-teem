module.exports = {
  "extends": "teem",
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    // REACT
    "react/display-name": "off",
    "react/forbid-component-props": "error",
    "react/forbid-prop-types": "off",
    "react/no-children-prop": "error",
    "react/no-danger": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-multi-comp": ["error", { "ignoreStateless": true }],
    "react/no-render-return-value": "error",
    "react/no-set-state": "off",
    "react/no-string-refs": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/no-unused-prop-types": "error",
    "react/prefer-es6-class": "error",
    "react/prefer-stateless-function": "error",
    "react/prop-types": ["error", { "ignore": ["style", "children"] }],
    "react/react-in-jsx-scope": "error",
    "react/require-optimization": "off",
    "react/require-render-return": "error",
    "react/self-closing-comp": "error",
    "react/sort-comp": ["error", {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        'style',
        'rendering',
      ],
      groups: {
        rendering: [
          '/^render.+$/',
          'render'
        ],
        responsive: [
          'breakpoints',
          'offsets',
          'orders',
          'spans'
        ],
        style: [
          'styles'
        ]
      }
    }],
    "react/style-prop-object": "error",

    // REACT JSX
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-curly-spacing": "error",
    "react/jsx-equals-spacing": "error",
    "react/jsx-filename-extension": ["error", { "extensions": [".js"] }],
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-key": "error",
    "react/jsx-max-props-per-line": ["error", { "maximum": 3 }],
    "react/jsx-no-bind": "off",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-literals": "off",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-sort-props": ["error", { "ignoreCase": true }],
    "react/jsx-space-before-closing": "error",
    "react/jsx-tag-spacing": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": "off"
  }
};
