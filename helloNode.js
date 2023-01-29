const fs = require("fs");

console.log("...starting");
fs.readFile("./welcome.txt", "utf8", function (err, data) {
  if (err) console.log(err);
  console.log(data);
});
console.log("...finish");

console.log("...starting");
const data = fs.readFileSync("./welcome.txt", "utf8");
console.log(data);
console.log("...finish");