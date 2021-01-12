const lib = require("./module1.js");

/* const myObject = {
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
 */
const [anyPath, keyName, keyValue] = process.argv.slice(2, 5);
// let [anyPath, keyName, keyValue] = [".", "--depth", "2"];

try {
  //  расшифровка параметров
  const [rootPath, depth] = lib.parseCLI([anyPath, keyName, keyValue]);
  if (rootPath) {
    // строим дерево
    const tree = lib.buildTree(rootPath, depth);
    // печать
    lib.drawTree(tree);
  }
} catch (err) {
  console.error(err);
}
