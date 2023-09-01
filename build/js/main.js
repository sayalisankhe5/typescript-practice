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
const addORconcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let firstValue = addORconcat(2, 5, "add");
let secondValue = addORconcat(2, 5, "concat");
console.log(firstValue, secondValue);
10;
let img = document.getElementById("imgId");
let nextImg = document.querySelector("img");
// img.src;
// nextImg.src;
class Coder {
    //gender!: string;
    constructor(name, age, codingLang = "Typescript") {
        this.name = name;
        this.age = age;
        this.codingLang = codingLang;
        this.name = name;
        this.age = age;
        this.codingLang = codingLang;
    }
    getAge() {
        return `Hi, I'm ${this.age}`;
    }
}
const SS = new Coder("SS", 12, "Javascript");
console.log(SS.getAge());
console.log(SS.name);
//console.log(SS.age, SS.codingLang);
class WebDev extends Coder {
    constructor(computer, name, age) {
        super(name, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write in ${this.codingLang}`;
    }
}
const JJ = new WebDev("Windows", "JJ", 20);
console.log(JJ.getAge(), JJ.getLang(), JJ.name, JJ.computer);
class Guitarist {
    constructor(name, instrument) {
        (this.name = name), (this.instrument = instrument);
    }
    plays(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
const Sara = new Guitarist("Sara", "Guitar");
console.log(Sara.instrument, Sara.name, Sara.plays("strums"));
class Peoples {
    getCount() {
        return Peoples.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peoples.count;
    }
}
Peoples.count = 0;
const Jam = new Peoples("jam");
const Peter = new Peoples("peter");
console.log(Jam.getCount(), "count of jam");
console.log(Jam.id);
console.log(Peter.id);
console.log(Peoples.count);
