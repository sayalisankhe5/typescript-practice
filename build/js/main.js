"use strict";
let username = "SAS";
console.log(username);
let p;
let a = 10;
let b = 2;
let c = 4;
let someData;
someData = "Name";
someData = 42;
let id;
id = 10;
id = "15";
id = "first";
console.log(a * b);
console.log(b + c);
console.log(c - b);
console.log(b * c);
console.log(someData);
let ans;
const sum = (a, b) => {
    //   return a + b;
    return a + b;
};
ans = sum(5, "10");
console.log("ans", ans);
let myData = ["SS", 10, true, "SAS"];
myData.push(false);
console.log(myData);
let myObj;
myObj = [1, 2, "SS"];
myObj = {};
let anotherObj = { key1: "value1", key2: "value2", key3: 45 };
let ab = {
    name: "Pet",
    age: 10,
    active: false,
};
let pq = {
    name: "Kate",
    active: 1,
};
//ab = pq;
const greetings = (inputdata) => {
    //return `helloo ${inputdata.name?.toUpperCase()}`; OR
    if (inputdata.name) {
        return `helloo ${inputdata.name.toUpperCase()}`;
    }
    return "hello";
};
console.log(greetings(ab));
let jk = {
    name: "Dav",
    age: 20,
    gender: "M",
    active: true,
};
var fontSize;
(function (fontSize) {
    fontSize[fontSize["small"] = 0] = "small";
    fontSize[fontSize["medium"] = 1] = "medium";
    fontSize[fontSize["large"] = 2] = "large";
    fontSize[fontSize["extraLarge"] = 3] = "extraLarge";
})(fontSize || (fontSize = {}));
console.log(fontSize[2]);
console.log(fontSize.small);
let myName;
let Colors;
Colors = "Blue";
const add = (a, b) => {
    return a + b;
};
const displayMsg = (msg) => {
    console.log(msg);
};
displayMsg(add(2, 5));
function add1(a, b) {
    return a + b;
}
displayMsg(add1(10, 2));
let multiply = function (c, d) {
    return c * d;
};
displayMsg(multiply(10, 2));
let mul = function (c, d) {
    return c * d;
};
displayMsg(mul(10, 20));
const add2 = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
displayMsg(add2(10, 20));
const add3 = (a = 5, b, c = 1) => {
    return a + b + c;
};
displayMsg(add3(10, 20, 50));
displayMsg(add3(10, 50));
displayMsg(add3(undefined, 20));
const sum1 = (b, ...nums) => {
    return b + nums.reduce((prev, curr) => prev + curr);
};
displayMsg(sum1(10, 2, 3));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const numOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
    //return "This cannot happen";
    return createError("This cannot happen");
};
const isNumber = (num) => {
    return typeof num == "number" ? true : false;
};
let a1 = "hello";
let b1 = a1;
let c1 = a1;
