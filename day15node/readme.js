const fs = require("fs")
fs.readFile("readme.txt", "utf-8", function(error, res) {
    console.log(res);

})