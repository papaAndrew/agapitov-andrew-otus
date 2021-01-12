const fs = require("fs");
const path = require("path");

function drawNodes(nodes, prefix) {
  const shift = typeof prefix === "undefined" ? "" : prefix;

  nodes.forEach((e, i) => {
    const lastNode = i === nodes.length - 1;

    console.log(`${shift}${lastNode ? "└" : "├"} ${e.name}`);

    if (e.items) {
      drawNodes(e.items, `${shift}${lastNode ? " " : "|"} `);
    }
  });
}

function buildNode(node, nodePath, depth, level) {
  const isFolder = (fileName) => fs.lstatSync(fileName).isDirectory();

  node.items = [];
  const newLevel = (level === undefined ? 0 : level) + 1;
  if (depth !== undefined && newLevel > depth) {
    return;
  }

  fs.readdirSync(nodePath).forEach((itemName) => {
    const item = { name: `${itemName}` };
    const itemPath = path.join(nodePath, itemName);

    node.items.push(item);

    if (isFolder(itemPath)) {
      buildNode(item, itemPath, depth, newLevel);
    }
  });
}

function buildTree(rootPath, depth) {
  const tree = {
    name: `${path.basename(rootPath)}`,
  };

  buildNode(tree, rootPath, depth);
  return tree;
}

function drawTree(tree) {
  console.log(`${tree.name}`);

  if (tree.items !== undefined) {
    drawNodes(tree.items);
  }
}

/** Convert array of CLI params to array [rootPath, depth]
 *
 * @param {string}[] args
 */
function parseCLI(args) {
  const [anyPath, keyName, keyValue] = args;
  const [rootPath, depth] = [fs.realpathSync(anyPath), keyValue];

  if (keyName === undefined) {
    return [rootPath];
  }
  if (keyName === "-d" || keyName === "--depth") {
    return [rootPath, Number(depth)];
  }

  console.log(`Invalid CLI parameter: "${keyName}"`);
  return false;
}

module.exports = {
  drawTree: (tree) => drawTree(tree),
  buildTree: (rootPath, depth) => buildTree(rootPath, depth),
  parseCLI: (args) => parseCLI(args),
};
