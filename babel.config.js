// babel.config.js

module.exports = (api) => ({
  plugins: [
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-transform-arrow-functions",
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        // 2, 3 or { version: 2 | 3, proposals: boolean }, defaults to 2.
        corejs: 2,
        // caller.target will be the same as the target option from webpack
        targets: api.caller((caller) => caller && caller.target === "node")
          ? { node: "current" }
          : { chrome: "58", ie: "11" },
      },
    ],
  ],
});
