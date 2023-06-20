const ruleTester = require("./testUtils");

const rule = require("../rules/strict-equality");

const message = "Use strict equality instead of loose equality.";

ruleTester.run("strict-equality", rule, {
  valid: [
    "if (a === b) {}",
    "if (a === b) alert(1)",
    "if (a === b) { alert(1) }",
  ],
  invalid: [
    {
      code: "if (a == b) {}",
      errors: [{ message }],
      output: "if (a === b) {}",
    },
    {
      code: "if (getUserRole(user) == Roles.DEFAULT) grantAccess(user);",
      errors: [{ message }],
      output: "if (getUserRole(user) === Roles.DEFAULT) grantAccess(user);",
    },
  ],
});

console.log("Completed all tests for strict-equality rule");
