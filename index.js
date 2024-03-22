//callback, async & await, promises

const loginForm = document.getElementById("loginForm");
const response = document.getElementById("response");

let userData = null;

const showResponse = (userData) => {
  response.innerHTML = userData;
};

const verifyLogin = (name, pass) => {
  if (name == "vivek" && pass == "vivek") {
    userData = "login success";
    return userData;
  } else {
    userData = "incorrect details";
    return userData;
  }
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const pass = document.getElementById("pass").value;

  let res = verifyLogin(name, pass);
  showResponse(res);
});
