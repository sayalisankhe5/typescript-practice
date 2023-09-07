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
class Data {
    constructor() {
        this.dataValues = [];
    }
    get data() {
        return this.dataValues;
    }
    set data(values) {
        if (Array.isArray(values) && values.every((el) => typeof el == "string")) {
            this.dataValues = values;
        }
        else {
            throw new Error("These are not string array values");
        }
    }
}
const ex1 = new Data();
console.log(ex1.data);
ex1.data = ["1", "2", "Three"];
console.log(ex1.data);
ex1.data = [...ex1.data, "Day"];
console.log(ex1.data);
// interface TransactionsObj {
//   readonly [index: string]: number;
// }
let todaysTransactions = {
    food: -10,
    books: -5,
    work: 50,
};
console.log(todaysTransactions.books);
console.log(todaysTransactions["work"]);
let myProp = "food";
console.log(todaysTransactions[myProp]);
//todaysTransactions.food = -15;
const todaysTotal = (transactions) => {
    let sum = 0;
    for (const tr in transactions) {
        sum = sum + transactions[tr];
    }
    return sum;
};
console.log(todaysTotal(todaysTransactions));
console.log(todaysTransactions["bills"]);
let student1 = {
    name: "Patr",
    GPA: 8.25,
    courses: ["maths", "science"],
};
for (const st in student1) {
    console.log(`${st} = ${student1[st]}`);
}
for (const st in student1) {
    console.log(`${st} == ${student1[st]}`);
}
const studentsLogger = (student, key) => {
    console.log(`${key} is ${student1[key]}`);
};
studentsLogger(student1, "name");
let myIncome = {
    salary: 1000,
    sidehustle: "20",
    bonus: 100,
};
for (const i in myIncome) {
    //   console.log(myIncome[i as keyof Incomes]);
    console.log(myIncome[i]);
}
const isObject = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg != null;
};
console.log(isObject(undefined));
console.log(isObject("a"));
console.log(isObject(2));
console.log(isObject(["a", 2]));
console.log(isObject({ name: "SS" }));
console.log(isObject(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObject(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); // modified
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([])); // modified
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const isItTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObject(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const myUser = (user) => {
    return user;
};
console.log(myUser({ id: 10, name: "Pate" }));
console.log(myUser({ name: "Jake", id: 11 }));
const getUsers = (users, key) => {
    return users.map((user) => user[key]);
};
const usersArray = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
    },
];
console.log(getUsers(usersArray, "email"));
console.log(getUsers(usersArray, "username"));
class StateObj {
    constructor(value) {
        this.data = value;
    }
    get dataState() {
        return this.data;
    }
    set dataState(inputdata) {
        this.data = inputdata;
    }
}
var obj1 = new StateObj("Jam");
console.log(obj1.dataState);
obj1.dataState = "Tim";
console.log(obj1.dataState);
const updateAssignment = (assignmentWork, propsToUpdate) => {
    return Object.assign(Object.assign({}, assignmentWork), propsToUpdate);
};
const grek = {
    title: "First Project",
    studentName: "Grek",
    grade: 0,
};
console.log(updateAssignment(grek, { studentName: "Greeek", grade: 90 }));
const createAssignment = (assignmentWork) => {
    return assignmentWork;
};
console.log(createAssignment({
    studentName: "Patt",
    title: "Project 2 ",
    grade: 90,
    verified: false,
}));
