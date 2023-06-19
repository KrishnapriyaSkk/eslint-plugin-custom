module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow the use of var',
      category: 'Best Practices',
    },
  },
  create: context => ({
    VariableDeclaration(node) {
      if (node.kind !== 'var') return;

      context.report({
        node,
        message: 'Using var is not allowed.',
      });
    }
  }),
};
