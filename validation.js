const email = document.querySelector(".email-form input")
const password = document.querySelector(".password-form input")
const info = document.querySelector(".password-validation-form")

const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[^\w\d\s:])([^\s]){8,12}$/

password.addEventListener("keyup", event => {
  const inputValue = event.target.value

  passwordRegex.test(inputValue) 
  ? info.classList.remove("show-validation") 
  : info.classList.add("show-validation")

  if(!inputValue){
    info.classList.remove("show-validation")
  }

})