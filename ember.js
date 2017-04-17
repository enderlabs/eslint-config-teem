module.exports = {
  extends: 'eslint:recommended',
  rules: {
    'eol-last': 'warn',
    'no-case-declarations': 'off',
    'no-extra-boolean-cast': 'off',
    'no-unused-vars': 'warn',
  },
  globals: {
    'autosize':   false,
    'jstz':       false,
    'Modernizr':  false,
    'moment':     false,
    'noUiSlider': false,
    'server':     false,
    'Set':        false,
    'toastr':     false,
    'wNumb':      false,
    'zxcvbn':     false,
  }
};
