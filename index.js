//Event loops

const welcome = () => console.log("hello");
const load = () =>
  setTimeout(() => {
    console.log("load");
  }, 2000);
const one = () => console.log("one");

welcome();
load();
one();

// hello
// one
// load
