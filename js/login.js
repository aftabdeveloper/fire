// Modules
import { signin } from "../modules/firebase.js"


// Selectors
const loginForm = document.querySelector("#login-form")
const result = document.querySelector("#result")

// Functions
loginForm.onsubmit = async (e)=>{
    e.preventDefault()
    const user = {
        email: e.target[0].value.trim(),
        password: e.target[1].value.trim()
    }
    const {success} = await signin(user)
    if(success) return location.href = "admin.html"

    result.style.color = "red"
    result.innerHTML = "Invalid credentials !"
}

