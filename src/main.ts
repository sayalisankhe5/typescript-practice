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

const createError = (errMsg: string) => {
  throw new Error(errMsg);
};

const numOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  //return "This cannot happen";
  return createError("This cannot happen");
};
const isNumber = (num: number): boolean => {
  return typeof num == "number" ? true : false;
};

type One = string;
type Two = string | number;
type Three = "hello";

let a1: One = "hello";
let b1 = a1 as Two;
let c1 = <Three>a1;

const addORconcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): string | number => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let firstValue: number = addORconcat(2, 5, "add") as number;
let secondValue = addORconcat(2, 5, "concat");
console.log(firstValue, secondValue);

10 as unknown as string;

let img = document.getElementById("imgId") as HTMLImageElement;
let nextImg = document.querySelector("img")!;
// img.src;
// nextImg.src;

class Coder {
  //gender!: string;
  constructor(
    public readonly name: string,
    private age: number,
    protected codingLang: string = "Typescript"
  ) {
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
  constructor(public computer: string, name: string, age: number) {
    super(name, age);
    this.computer = computer;
  }

  getLang() {
    return `I write in ${this.codingLang}`;
  }
}

const JJ = new WebDev("Windows", "JJ", 20);
console.log(JJ.getAge(), JJ.getLang(), JJ.name, JJ.computer);

interface Musician {
  name: string;
  instrument: string;
  plays(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    (this.name = name), (this.instrument = instrument);
  }

  plays(action: string) {
    return `${this.name} ${action} ${this.instrument}`;
  }
}

const Sara = new Guitarist("Sara", "Guitar");
console.log(Sara.instrument, Sara.name, Sara.plays("strums"));

class Peoples {
  static count: number = 0;
  getCount() {
    return Peoples.count;
  }
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peoples.count;
  }
}

const Jam = new Peoples("jam");
const Peter = new Peoples("peter");

console.log(Jam.getCount(), "count of jam");
console.log(Jam.id);
console.log(Peter.id);
console.log(Peoples.count);

class Data {
  private dataValues: string[];

  constructor() {
    this.dataValues = [];
  }

  public get data(): string[] {
    return this.dataValues;
  }

  public set data(values: string[]) {
    if (Array.isArray(values) && values.every((el) => typeof el == "string")) {
      this.dataValues = values;
    } else {
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
//ex1.data = [...ex1.data, 123, 145];

interface TransactionsObj {
  readonly [index: string]: number;

  food: number;
  books: number;
  work: number;
}

// interface TransactionsObj {
//   readonly [index: string]: number;
// }

let todaysTransactions: TransactionsObj = {
  food: -10,
  books: -5,
  work: 50,
};

console.log(todaysTransactions.books);
console.log(todaysTransactions["work"]);
let myProp: string = "food";
console.log(todaysTransactions[myProp]);
//todaysTransactions.food = -15;

const todaysTotal = (transactions: TransactionsObj): number => {
  let sum = 0;
  for (const tr in transactions) {
    sum = sum + transactions[tr];
  }
  return sum;
};
console.log(todaysTotal(todaysTransactions));
console.log(todaysTransactions["bills"]);
interface Student {
  name: string;
  GPA: number;
  courses: string[];
}
let student1: Student = {
  name: "Patr",
  GPA: 8.25,
  courses: ["maths", "science"],
};

for (const st in student1) {
  console.log(`${st} = ${student1[st as keyof Student]}`);
}
for (const st in student1) {
  console.log(`${st} == ${student1[st as keyof typeof student1]}`);
}

const studentsLogger = (student: Student, key: keyof Student): void => {
  console.log(`${key} is ${student1[key]}`);
};
studentsLogger(student1, "name");

type Streams = "salary" | "bonus" | "sidehustle";
type Incomes = Record<Streams, number | string>;

let myIncome: Incomes = {
  salary: 1000,
  sidehustle: "20",
  bonus: 100,
};

for (const i in myIncome) {
  //   console.log(myIncome[i as keyof Incomes]);
  console.log(myIncome[i as keyof typeof myIncome]);
}
