import React, { useState } from 'react'
import "./SignUp.css"
import {app} from "./firebase";
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const auth = getAuth(app)

const SignUp = () => {

const [email, setEmail] = useState("")
const [pass , setPass] = useState("")

let signUpUser = () =>{
   createUserWithEmailAndPassword(
      auth, email, pass
      ).then((res) => alert("User created successfully!!"))

      setEmail("")
      setPass("")
      
}

  return (
     <>
     <h2>Sign Up</h2><br/>
      <div className='signup-page'>
      
         <label>Email</label>
         <input type="email" required placeholder='Enter your email' 
          onChange={(e) => setEmail(e.target.value)} value={email}></input>

         <label>Password</label>
         <input type="password" required placeholder='Enter your password'
         onChange={(e) => setPass(e.target.value)} value={pass}></input>

         <button onClick={signUpUser} className='signup'>Sign Up</button><br/>
         
      </div> <br/>
     
     </>
  )
}

export default SignUp;

