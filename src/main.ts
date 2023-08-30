let username = "SAS";
console.log(username);
let p;
let a: number = 10;
let b = 2;
let c = 4;
let someData: any;
someData = "Name";
someData = 42;
let id: string | number;
id = 10;
id = "15";
id = "first";

console.log(a * b);
console.log(b + c);
console.log(c - b);
console.log(b * c);
console.log(someData);
let ans: string;

const sum = (a: number, b: string) => {
  //   return a + b;
  return a + b;
};

ans = sum(5, "10");
console.log("ans", ans);

let myData: [string, number, boolean, string] = ["SS", 10, true, "SAS"];
myData.push(false);
console.log(myData);

let myObj: object;
myObj = [1, 2, "SS"];

myObj = {};

let anotherObj = { key1: "value1", key2: "value2", key3: 45 };

type People = {
  name?: string;
  age: number;
  active: boolean | number;
};

let ab: People = {
  name: "Pet",
  age: 10,
  active: false,
};
let pq = {
  name: "Kate",
  active: 1,
};

//ab = pq;

const greetings = (inputdata: People) => {
  //return `helloo ${inputdata.name?.toUpperCase()}`; OR
  if (inputdata.name) {
    return `helloo ${inputdata.name.toUpperCase()}`;
  }
  return "hello";
};

console.log(greetings(ab));

interface Humans {
  name: string;
  age: number;
  gender: string;
  active: boolean;
}

let jk: Humans = {
  name: "Dav",
  age: 20,
  gender: "M",
  active: true,
};

enum fontSize {
  small,
  medium,
  large,
  extraLarge,
}

console.log(fontSize[2]);

console.log(fontSize.small);

type stringORnumber = string | number;
type userId = stringORnumber;
type Entities = {
  name: string;
  id: stringORnumber;
};
let myName: "SS";
let Colors: "Blue" | "Red" | "Green";
Colors = "Blue";
const add = (a: number, b: number): number => {
  return a + b;
};
const displayMsg = (msg: any): void => {
  console.log(msg);
};
displayMsg(add(2, 5));

function add1(a: number, b: number): number {
  return a + b;
}
displayMsg(add1(10, 2));

type mathFunc = (a: number, b: number) => number;

let multiply: mathFunc = function (c, d) {
  return c * d;
};
displayMsg(multiply(10, 2));

interface mathsFunc {
  (a: number, b: number): number;
}
let mul: mathsFunc = function (c, d) {
  return c * d;
};
displayMsg(mul(10, 20));

const add2 = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
displayMsg(add2(10, 20));
const add3 = (a: number = 5, b: number, c: number = 1): number => {
  return a + b + c;
};
displayMsg(add3(10, 20, 50));
displayMsg(add3(10, 50));
displayMsg(add3(undefined, 20));

const sum1 = (b: number, ...nums: number[]): number => {
  return b + nums.reduce((prev, curr) => prev + curr);
};

displayMsg(sum1(10, 2, 3));
