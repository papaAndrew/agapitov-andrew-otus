// const fs = require('fs');
// const path = require('path');
const lib = require("./module1.js");

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

console.log(myObject.name);
lib.buildTree(myObject.items);
/* 
function printDir(path) {
  
  const dir = fs.Dir.apply(path);
  for (const dirent of dir) {
    console.log(dirent.name);
  }
}
const path = "D:\JavaScript\otus";
printDir(path);
 */
