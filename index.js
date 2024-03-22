// scope
// global, local

a = 1; //-> global scope

function b() {
  //function scope
  c = 1; //create
}

if (a) {
  // block scope
  //some logic
}

b(); //invoke
