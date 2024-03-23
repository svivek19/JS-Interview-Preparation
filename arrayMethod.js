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
