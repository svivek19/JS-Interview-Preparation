//window & this

a = 1;

//global access of value

// console.log(c);
console.log(this.c);
console.log(window.c);

function b() {
  c = 2;
  console.log(c);
  console.log(this.c);
  console.log(window.c);
}

b();
