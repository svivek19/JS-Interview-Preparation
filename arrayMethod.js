//forEach()

const fruits = ["apple", "banana", "orange"];

fruits.forEach((fruit) => {
  //   console.log(fruit.toLocaleUpperCase());
});

//map()

const modifyData = fruits.map((fruit) => fruit.toUpperCase());

// console.log(modifyData);

const number = [1, 2, 3, 4, 5];

const result = number.map((val) => val * 2);

// console.log(result);

//at()

const characters = ["a", "b", "c"];

// console.log(characters[1]);
// console.log(characters.at(-2));

//copyWithin()

const fruitss = ["apple", "banana", "orange"];

// console.log(fruitss.copyWithin(0, 1, 2));

// console.log(fruitss.copyWithin(1, 2));

//entries()

const tools = ["vscode", "pycompiler", "photoshop"];

const toolsEntries = tools.entries();

for (let [tools, index] of toolsEntries) {
  //   console.log(tools, index);
}

//values()

const skills = ["JS", "Java", "Python"];

const skillValues = skills.values();

// console.log(skillValues.next().value);

//every()

const marks = [34, 54, 65, 76, 87];

const res = marks.every((mark) => {
  return mark > 50;
});

// console.log(res);

//fill()

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 4];
const arr4 = [1, 2, 3, 4];

// console.log(arr1.fill(0, 2, 3)); // 1,2,0,4
// console.log(arr2.fill(5, 1)); //1,5,5,5
// console.log(arr3.fill(8)); // 8,8,8,8
// console.log(arr4.fill("hello")); // hello,hello,hello,hello

//filter()

const humanNames = ["John", "Juli", "Anu", "Joe", "Harry", "Pottor"];

const value = humanNames.filter((names) => names.length > 3);

// console.log(value);

const users = [
  { id: 1, name: "juli", active: true },
  { id: 2, name: "John", active: false },
  { id: 3, name: "benny", active: true },
];

const activeUsers = users.filter((user) => user.active);

// console.log(activeUsers[1].name);

//find()

const num = [1, 2, 33, 65, 87, 98];

const nums = num.find((res) => res > 30);

// console.log(nums);

//findLast()

const num1 = [1, 2, 33, 65, 87, 98];

const num2 = num1.findLast((res) => res > 60);

// console.log(num2);

//findIndex()

const numIndex = [1, 2, 33, 65, 87, 98];

const index = numIndex.findIndex((res) => res > 60);

// console.log(index);

//findLastIndex()

const fineLastIndex = [1, 2, 33, 65, 87, 8];

const val = fineLastIndex.findLastIndex((res) => res > 10);

// console.log(val);

//flat()

const matrix = [
  [1, 2, 3],
  [4, [55, 555, 5555], 6],
  [7, 8, 9],
];

const flatArr = [].concat(...matrix);

const flatArrES6 = matrix.flat(2);

// console.log(flatArrES6);

//flatMap()

const arr = [1, 2, 3];

const flatMap = arr.flatMap((num) => (num === 2 ? [22, 222] : 0));

// console.log(flatMap);

//from()

const name = "Joe";

const from = Array.from(name);

// console.log(from); //['J','o','e']

//of()

const converedArr = Array.of("John", 3, true);

// console.log(converedArr);

//join()

const days = ["sun", "mon"];

// console.log(days.join(" -"));

//keys()

const demo = ["hi", "hello", "hru", "wru"];

const keys = demo.keys();

for (let kys of keys) {
  //   console.log(demo[kys]);
}

//reduce()

const spendAmount = [343, 565, 76, 87, 984];

const total = spendAmount.reduce((prev, curr) => {
  //   console.log(prev, curr);
  return prev + curr;
}, 0);

// console.log(total);

//reduceRight()

const reduceright = [343, 565, 76, 87, 984];

const final = spendAmount.reduceRight((prev, curr) => {
  //   console.log(prev, curr);
  return prev + curr;
}, 0);

// console.log(final);

//includes()

const numers = [1, 2, 3, 4, 5];

// console.log(numers.includes(5));

const pets = ["cats", "dogs", "fish"];

// console.log(pets.includes("cats"));

//indexOf()

const pet = ["cats", "dogs", "fish"];

// console.log(pet.indexOf("dogs"));

//lastIndexOf()

const petLast = ["cats", "dogs", "fish", "cats"];

// console.log(petLast.lastIndexOf("cats"));

//Array.isArray()

const arrMine = [1, 2, 3, 4];

const variable = "demo";

// console.log(Array.isArray(variable));

//reverse(), toReverse()

const dummy = ["apple", "lemon", "tomato"];
// console.log("original", dummy);

let dummyReverse = dummy.reverse();
let dummyToReverse = dummy.toReversed();

// console.log("reverse", dummyReverse);
// console.log("toReverse", dummyToReverse);

//some()

const user = [
  { id: 1, name: "juli", isAllowToParty: true },
  { id: 2, name: "John", isAllowToParty: true },
  { id: 3, name: "benny", isAllowToParty: false },
  { id: 4, name: "rohan", isAllowToParty: true },
  { id: 5, name: "lisha", isAllowToParty: true },
];

const finalValue = user.some((emp) => emp.isAllowToParty === false);

// console.log(finalValue);

//sort(), toSorted()

const sortNum = [23, 54, 756, 12, 1, 45, 76];

// const sortvalNum = sortNum.sort((a, b) => b - a);
const sorttovalNum = sortNum.toSorted((a, b) => b - a);

// console.log(sortvalNum, sortNum);
// console.log(sorttovalNum, sortNum);

//toLocaleString()

const myDate = new Date("23 Aug 2003 14:10:00 UTC");

let resFinal = myDate.toLocaleString("hi-IN", { timeZone: "Asia/Dubai" });

// console.log(resFinal);

const amount = 273974;

let finalamt = amount.toLocaleString("en", {
  currency: "INR",
  style: "currency",
});

// console.log(finalamt);

//toString()

const data = ["a", "b", "r", "z", 234, true];

// console.log(data.toString().replaceAll(",", " "));

//with()

const dataVals = [1, 2, 3, 4, 5];

dataVals[3] = "four";

console.log(dataVals.with(2, "Three"));
