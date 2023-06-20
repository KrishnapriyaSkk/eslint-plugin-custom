const ruleTester = require("./testUtils");

const rule = require("../rules/no-var");

ruleTester.run("no-var", rule, {
  valid: ["let x = 10;", "const x = 10;"],
  invalid: [
    {
      code: "var x = 10;",
      errors: [{ message: "Using var is not allowed." }],
    },
  ],
});

console.log("Completed all tests for no-var rule");
