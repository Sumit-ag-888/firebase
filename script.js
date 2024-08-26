import { auth, createUserWithEmailAndPassword } from "/firebase.js"



let singUp = (e)=> {
    e.preventDefault()
let email = document.getElementById("email")
let password = document.getElementById("password")
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((res) => {
             console.log(res.user) 
        })
        .catch((error) => {
          console.log(error)
        });
}

let signupBtn = document.getElementById("singupBtn")
signupBtn.addEventListener("click", singUp)

