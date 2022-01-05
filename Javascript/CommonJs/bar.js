// const getFullName = require("./foo");

// const foo = require("./foo");
// console.log("getFullName", foo.getFullName("monster", "lessons"));

const {getFullName, getSurName} = require("./foo");

console.log(
    "getFullName", 
    getFullName("monster", "lessons"),
    getSurName("foo", "bar")
);