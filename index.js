//callback, async & await, promises

const id1 = setTimeout(() => {
  console.log("hi exec after five sec");
}, 5000);

no = 1;
const id2 = setInterval(() => {
  console.log(no++);
}, 1000);

clearTimeout(id2);
console.log("hi suddenly");
