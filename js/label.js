const inputs = document.querySelectorAll(".input-text input")

inputs.forEach(input => {
  input.addEventListener("focus", event => {
    const previousSibling = event.target.previousElementSibling
    const nextSibling = event.target.nextElementSibling
    if(event.target.value){
      return
    }
    previousSibling.classList.add("active")
    nextSibling.classList.add("active-svg")
  })

  input.addEventListener("blur", event => { 
    const previousSibling = event.target.previousElementSibling
    const nextSibling = event.target.nextElementSibling
    if(event.target.value){
      return
    }
    previousSibling.classList.remove("active")
    nextSibling.classList.remove("active-svg")
  })
})
