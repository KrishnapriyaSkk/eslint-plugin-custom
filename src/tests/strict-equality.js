const ruleTester = require("./testUtils");

const rule = require("../rules/strict-equality");

ruleTester.run("strict-equality", rule, {
  valid: [
    "if (a === b) {}",
    "if (a === b) alert(1)",
    "if (a === b) { alert(1) }",
  ],
  invalid: [
    {
      code: "if (a == b) {}",
      errors: [{ message: "Use strict equality instead of loose equality." }],
      output: "if (a === b) {}",
    },
  ],
});

console.log("Completed all tests for strict-equality rule");
