// async & await

const loginForm = document.getElementById("loginForm");
const response = document.getElementById("response");

let userData = null;

const showResponse = (userData) => {
  response.innerHTML = userData;
};

const verifyLogin = (name, pass) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name == "vivek" && pass == "vivek") {
        userData = "login success";
        resolve(userData);
      } else {
        error = "incorrect details";
        reject(error);
      }
    }, 2000);
  });
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const pass = document.getElementById("pass").value;

  async function login() {
    try {
      await verifyLogin(name, pass);
      showResponse(userData);
    } catch {
      showResponse(error);
    }
  }
  login();
});
