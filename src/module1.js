function buildTree(tree, prefix) {
  const shift = typeof prefix === "undefined" ? "" : prefix;

  tree.forEach((e, i) => {
    const lastNode = i === tree.length - 1;

    console.log(`${shift}${lastNode ? "└" : "├"} ${e.name}`);

    if (e.items) {
      buildTree(e.items, `${shift}${lastNode ? " " : "|"} `);
    }
  });
}

module.exports = {
  buildTree: (tree, prefix) => buildTree(tree, prefix),
};
