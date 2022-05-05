const bar = require("./bar");
console.log(bar.name);

setTimeout(() => {
    console.log("main的延时函数", bar.name);
}, 2000);
