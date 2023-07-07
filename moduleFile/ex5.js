//5. Use the path module to join two file paths.
const path =require('path')
//console.log(__filename);
//console.log(__dirname);

//console.log(path.basename(__filename));
//console.log(path.basename(__dirname));

//console.log(path.extname(__filename));

//console.log(path.parse(__filename));
//console.log(path.parse(__dirname));

//console.log(path.format(path.parse(__dirname)));

//console.log(path.isAbsolute('./data.json'));

const path1 = "./path/to/file1"
const path2 = "./path/to/file2"

console.log(path.join(path1,path2))
