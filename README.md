# eslint-config-teem
Rules and styles used by the Teem javascript team.

### How to Use
- `npm install eslint-config-teem`
- Create a `.eslintrc.js` file in your project's root directory with the following content:

  ```javascript
    module.exports = {
      "extends": "teem"
    };
  ```
- If your project is a React app, then change `"teem"` to `"teem/react"`