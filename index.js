// var - global, let, const - local

if (true) {
  var a = 1;
  const b = 2; //not change
  let c = 3; // change

  //   b = 6; // returns a err
  //   c = 4;

  console.log(a);
  console.log(b);
  console.log(c);
}

// console.log("outer scope");
// console.log(a);
// console.log(b);
// console.log(c);
