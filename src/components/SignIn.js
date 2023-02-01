import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from "./firebase"
import "./SignIn.css"

const auth = getAuth(app)

const SignIn = () => {

  const [email, setEmail] = useState()
  const [pass , setPass] = useState()

  let signIn = () =>{
     signInWithEmailAndPassword(
                      auth, email, pass
                      ).then((res) => alert("Sign In Successfully!!"))
                      .catch((error) => {
                        const errorMessage = error.message
                        console.log(errorMessage)
                      })
  
    setEmail("")
    setPass("")
  }

  return (
     <>
     <h2>Sign In</h2>
      <div className='signin-page'>
      
         <label>Email</label>
         <input type="email" required placeholder='Enter your email' 
         onChange={(e) => setEmail(e.target.value)} value={email}></input>

         <label>Password</label>
         <input type="password" required placeholder='Enter your password'
          onChange={(e) => setPass(e.target.value)} value={pass}></input>

         <button onClick={signIn} className='signin'>Log In</button>
 
      </div>

     </>
  )
}

export default SignIn;