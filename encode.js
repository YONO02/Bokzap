const bokzap = require("./bokzap.js");
const fs = require('fs');

var data = fs.readFileSync("input.txt", "utf8");
fs.writeFileSync("output.txt", bokzap.encode(data));