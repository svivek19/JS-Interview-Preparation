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
