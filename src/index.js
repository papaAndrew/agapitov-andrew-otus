const myObject = {
  name: 1,
  items: [
    {
      name: 2,
      items: [{ name: 3 }, { name: 4 }],
    },
    {
      name: 5,
      items: [{ name: 6 }],
    },
  ],
};

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

console.log(myObject.name);
buildTree(myObject.items);
