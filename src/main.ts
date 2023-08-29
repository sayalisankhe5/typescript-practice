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
