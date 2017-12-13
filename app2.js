const fs = require("fs"),
    fileName = "data/test.txt";

fs.mkdir("data", (err)=>{
    if(err){
        if(err.code != "EEXIST"){
            console.error("Couldn't Create Directory" + err.message);
        }
    }else{
        console.log("Created directory");
    }
});

fs.writeFile(fileName, "Hello, World!", (err)=>{
    if(err){
        console.error(err.message);
    }else{
        console.log("Success");
    }
});

console.log("Finished");