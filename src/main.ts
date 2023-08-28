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
let ans: number;

const sum = (a: number, b: string) => {
  //   return a + b;
  return a + b;
};

ans = sum(5, "10");
console.log("ans", ans);

let myData: [string, number, boolean, string] = ["SS", 10, true, "SAS"];
myData.push(false);
console.log(myData);
