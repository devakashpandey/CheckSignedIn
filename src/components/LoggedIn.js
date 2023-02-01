import React from 'react'
import "./LoggedIn.css"
import { getAuth, signOut } from "firebase/auth"
import { app } from "./firebase"

const auth = getAuth(app)

function LoggedIn({user}) {
  return (
      <>
       <h1>Hey!, {user.email}</h1>
       <button onClick={() => signOut(auth) } className='logout'>Log Out</button>
      </>
  )
}

export default LoggedIn;
