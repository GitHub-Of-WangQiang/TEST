const name = "PengSir";
setTimeout(() => {
    module.exports.name = "hahaha";
    console.log("bar的延时函数", exports.name);
}, 1000);
exports.name = name;

console.log("bar这里的代码也会被运行吗？");
