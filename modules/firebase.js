import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'

const firebaseConfig = {
  apiKey: "AIzaSyA8tnQJisBPVaEw5sHLeydEEN4wifGca8g",
  authDomain: "fire-ee471.firebaseapp.com",
  projectId: "fire-ee471",
  storageBucket: "fire-ee471.appspot.com",
  messagingSenderId: "934512131840",
  appId: "1:934512131840:web:2af404255af678139abde5",
  measurementId: "G-Z52X2Z6TDD"
};

initializeApp(firebaseConfig);
const auth = getAuth()

export const signin = async ({email, password})=>{
    try {
        const {user} = await signInWithEmailAndPassword(auth,email,password)
        const token = await user.getIdToken()
        return {
            success: true,
            token
        }
    }
    catch(error)
    {
        return {
            success: false,
            error
        }
    }
}

export const guard = (callback)=>{
    onAuthStateChanged(auth,(user)=>{
        if(user) return true
        location.href = callback
    })
}

export const logout = async ()=>{
    try {
        await signOut(auth)
        return {
            success: true
        }
    }
    catch(error)
    {
        return {
            success: false,
            error
        }
    }
}

export const signup = async (user)=>{
    try {
        const {user: {uid}} = await createUserWithEmailAndPassword(auth,user.email,user.password)
        return {
            success: true,
            user: {
                id: uid
            }
        }
    }
    catch(error)
    {
        return {
            success: false,
            error
        }
    }
}