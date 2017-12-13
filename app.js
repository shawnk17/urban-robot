const fs = require("fs");

for (let i = 0; i < 10; i++) {
    console.log(i);
    fs.appendFile("hello.txt", i + ": Hello, World!\n", (err) => {
        if (err) {
            console.error("Ack! There was an error! " + err);
        } else {
            console.log(i + " Success! File Written");
        }
    });
}

console.log("Done! The whole program is finished! NOTHING ELSE WILL HAPPEN!!!");