module.exports = {
  rules: {
    "no-var": require("./src/rules/no-var"),
    "strict-equality": require("./src/rules/strict-equality"),
  },
  configs: {
    recommended: {
      rules: {
        "custom/no-var": "warn",
        "custom/strict-equality": "warn",
      },
    },
  },
};
