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
