//callback, async & await, promises

const loginForm = document.getElementById("loginForm");
const response = document.getElementById("response");

let userData = null;

console.log("hi");

const showResponse = (userData) => {
  response.innerHTML = userData;
};

const verifyLogin = (name, pass, callback) => {
  setTimeout(() => {
    if (name == "vivek" && pass == "vivek") {
      userData = "login success";
      callback(userData);
    } else {
      userData = "incorrect details";
      callback(userData);
    }
  }, 2000);
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const pass = document.getElementById("pass").value;

  verifyLogin(name, pass, showResponse);
});
