module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Enforce the use of strict equality over loose equality",
      category: "Best Practices",
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
          const leftNode = context.getSourceCode().getText(node.left);
          const rightNode = context.getSourceCode().getText(node.right);

          return fixer.replaceText(node, `${leftNode} === ${rightNode}`);
        },
      });
    },
  }),
};
