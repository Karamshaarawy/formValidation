const email=document.querySelector(".container-input-email")
const password=document.querySelector(".container-input-password")
const button=document.querySelector(".container-button button")

function validateEmail(email){
let emailRegex=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/
if(emailRegex.exec(email)==null){
    return false
} else{
    return true
}
}

function validatePassword(password){
    let passwordRegex=/^[A-Za-z]\w{8,50}$/
    if (passwordRegex.exec(password)==null){
        return false
    }else{
        return true
    }
}


let isValidateEmail
let isValidatePassword

email.addEventListener('input',(e)=>{
    isValidateEmail = validateEmail(e.target.value)
    

    if(isValidateEmail){
        e.target.classList.remove("error")
        e.target.classList.add("done")
    }else{
        e.target.classList.remove("done")
        e.target.classList.add("error")
    }


    if(e.target.value===""){
        e.target.classList.remove("error")
        e.target.classList.remove("done")
    }
    checkIsButtonDone()
})

password.addEventListener('input',(e)=>{
    isValidatePassword = validatePassword(e.target.value)
    

    if(isValidatePassword){
        e.target.classList.remove("error")
        e.target.classList.add("done")
    }else{
        e.target.classList.remove("done")
        e.target.classList.add("error")
    }
    checkIsButtonDone()

    if(e.target.value===""){
        e.target.classList.remove("error")
        e.target.classList.remove("done")
    }
})

function checkIsButtonDone() {
    if (isValidateEmail && isValidatePassword) {
      button.classList.add('correct')
    } else {
      button.classList.remove('correct')
    }
  }

window.addEventListener("mousemove",(e)=>{
button.addEventListener("mouseenter",()=>{
    if (!isValidateEmail || !isValidatePassword) {
        if (e.movementX > 0) {
          if (e.pageX < window.innerWidth / 2) {
            button.style.transform = `translateX(${e.pageX / 3}px)`
          } else {
            button.style.transform = `translateX(-${e.pageX / 3}px)`
          }
        } else {
          if (e.pageX < window.innerWidth / 2) {
            button.style.transform = `translateX(${e.pageX / 3}px)`
          } else {
            button.style.transform = `translateX(-${e.pageX / 3}px)`
          }
        }
      }})})

      button.addEventListener('click',(e)=>{e.preventDefault()
        
      })