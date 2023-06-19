module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow the use of var',
      category: 'Best Practices',
    },
    fixable: "code",
  },
  create: context => ({
    BinaryExpression(node) {
      if (node.operator !== "==") return;

      context.report({
        node,
        message: "Use strict equality instead of loose equality.",
        fix: fixer => {
          const leftOperand = context.getSourceCode().getText(node.left);
          const rightOperand = context.getSourceCode().getText(node.right);

          return fixer.replaceText(node, `${leftOperand} === ${rightOperand}`);
        }
      });
    },
  }),
};
