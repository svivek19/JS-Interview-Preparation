let c = 0;

setTimeout(() => {
  console.log("hi");
  clearInterval(d);
}, 2000);

const d = setInterval(() => {
  console.log(c++);
}, 200);