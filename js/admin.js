// Modules
import { guard, logout } from "../modules/firebase.js"

// Protector
guard("login.html")

// Selectors
const logoutBtn = document.querySelector("#logout")

// Functions
logoutBtn.onclick = async ()=>{
    await logout()
}