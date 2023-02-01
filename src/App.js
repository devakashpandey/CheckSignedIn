import { useEffect, useState } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { app } from "./components/firebase"
import LoggedIn from './components/LoggedIn';


const auth = getAuth(app)

function App() {

  const [user, setUser] = useState("")

  useEffect(() => {
     onAuthStateChanged(auth, (user) => {
          if(user){
            setUser(user)
          }else{
           setUser(null)
          }
     })
  }, [])

  return (
     <>
     <div className='main-div'>
    
    { !user ? <><SignUp />
      <SignIn /></> :
      <LoggedIn user={user} />
      
    }
       

      </div>
     </>
  );
}

export default App;
