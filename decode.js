const bokzap = require("./bokzap.js");
const fs = require('fs');

var data = fs.readFileSync("input.txt");
fs.writeFileSync("output.txt", bokzap.decode(data), "utf8");