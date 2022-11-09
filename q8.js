var fs = require("fs");
var writeStream = fs.createWriteStream("./myFile.txt");
writeStream.write("Hi, JournalDEV Users. ");
writeStream.end();