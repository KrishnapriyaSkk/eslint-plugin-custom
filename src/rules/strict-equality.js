module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow the use of var',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: "code",
  },
  create: context => ({
    BinaryExpression(node) {
      if (node.operator !== "==") return;
      context.report({
        node,
        message: "Use strict equality instead of loose equality.",
        fix: fixer => fixer.replaceText(
          node,
          `${context.getSourceCode().getText(node.left)} === ${context
            .getSourceCode()
            .getText(node.right)}`
        ),
      });
    },
  }),
};
