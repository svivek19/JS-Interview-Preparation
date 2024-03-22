// closures

function one() {
  let person = "harry";
  let age = 22;
  console.log(person, age, "outside");
  return function two() {
    console.log(person, age, "inside");
  };
}

one();
const func2 = one();
func2();
