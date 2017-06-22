 var fs = require('fs')  
 
var buf = fs.readFileSync(process.argv[2], "utf8");
 
var string = buf.toString();

var split = string.split("\n");
  

var count = split.length;

console.log(count - 1);


learn 