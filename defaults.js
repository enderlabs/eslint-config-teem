module.exports = {
  //extends: 'eslint:recommended',
  rules: {
    "no-cond-assign": [2,"always"],
    "no-console": 1,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty": 2,
    "no-ex-assign": 2,
    "no-extra-parens": [1,"all"],
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-invalid-regexp": 2,
    "no-negated-in-lhs": 1,
    "no-unreachable": 2,
    "use-isnan": 1,
    "valid-typeof": 2,
    "accessor-pairs": [2,{"setWithoutGet":true}],
    "block-scoped-var": 2,
    "curly": [2,"all"],
    "default-case": 1,
    "dot-location": [1,"property"],
    "eqeqeq": [2,"smart"],
    "no-alert": 2,
    "no-div-regex": 1,
    "no-else-return": 1,
    "no-floating-decimal": 2,
    "no-loop-func": 1,
    "no-catch-shadow": 2,
    "array-bracket-spacing": [2,"never"],
    "brace-style": [2,"1tbs",{"allowSingleLine":true}],
    "comma-spacing": [2,{"after":true}],
    "eol-last": 2,
    // "key-spacing": [
    //   "error",
    //   {
    //     "singleLine": {
    //         "beforeColon": false,
    //         "afterColon" : true,
    //         //"align"      : "colon"
    //     },
    //     "multiLine": {
    //         "beforeColon": false,
    //         "afterColon" : true,
    //     },
    //     "align": {
    //       "beforeColon": false,
    //       "afterColon" : true,
    //       "on": "value"
    //     }
    //   }
    // ],
    "new-parens": 1,
    "no-inline-comments": 1,
    "no-multiple-empty-lines": [2,{"max":1}],
    "no-nested-ternary": 1,
    "no-trailing-spaces": 2,
    "object-curly-spacing": [2,"always",{"arraysInObjects":true,"objectsInObjects":true}],
    "quotes": [2,"single","avoid-escape"],
    "semi-spacing": [2,{"after":true}],
    "semi": [2,"always"],
    "sort-vars": 1,
    //"space-after-keywords": [2,"always"],
    "space-before-blocks": [2,"always"],
    "space-before-function-paren": [2,{"anonymous":"never","named":"never"}],
    "space-in-parens": [2,"never"],
    "space-infix-ops": [2,{"int32Hint":true}],
    //"space-return-throw-case": 2,
    "arrow-parens": [2,"as-needed"],
    "arrow-spacing": [2,{"before":true,"after":true}],
    "generator-star-spacing": [2,"after"],
    "no-const-assign": 2,
    "no-var": 1,
    "prefer-const": 1,
    "prefer-spread": 1,
    "require-yield": 1
  },
};