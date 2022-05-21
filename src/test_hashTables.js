const myHashTable = require('./hashTables');

const myHashes = new myHashTable(50);
myHashes.set("Gustavo", 1995);
myHashes.set("Eduardo", 1995);

console.log(myHashes);
console.log(myHashes.get("Eduardo"));