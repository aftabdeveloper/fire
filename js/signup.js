//Config

axios.defaults.baseURL = "http://localhost:8080";

// Modules
import {signup} from '../modules/firebase.js'
// Selectors
const signupForm = document.querySelector("#signup-form")
const result = document.querySelector("#result")
const password_generator_btn = document.querySelector("#password_generator");
const passwordField = document.querySelector("#password_field");
const loader = document.querySelector("#loader");
// Functions
signupForm.onsubmit = async (e)=>{
    e.preventDefault()
    const user = {
        email: e.target[0].value.trim(),
        password: e.target[1].value.trim()
    }
    const {success} = await signup(user)
    if(success) return location.href = "admin.html"

    result.innerHTML = "Registration failed !"
    result.className = "text-rose-500 font-semibold"
}

password_generator_btn.onclick = async ()=>{
    try {
        loader.style.display = "block"
        const {data:{password}} = await axios.get("/password-generator");
        passwordField.value = password
        passwordField.type = "text"
    } catch(err){
        alert(err.message)
    }
    finally{
        loader.style.display = "none"
    }
}