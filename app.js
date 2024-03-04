let email = document.querySelector("#email");
let emailDiv = document.querySelector(".email");
let subscribe = document.querySelector("header>p");
let emailRgx = /\w{2,}@\w{2,}.\w{2,}/;
document.addEventListener("click", function (e) {
  let target = e.target.innerText;
  let emailValue = email.value;
  if (target === "Notify Me") {
    if (emailRgx.test(emailValue)) {
      emailDiv.setAttribute("id", "done");
      subscribe.innerHTML = "Subscribed";
    } else {
      emailDiv.setAttribute("id", "err");
      email.value = "";
      email.setAttribute("placeholder", "example@email.com");
    }
  }
});
