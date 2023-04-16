import { Button } from 'flowbite-react';
import React, { useState } from 'react';
import app from '../../Firebase/Firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';


const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    // console.log(app)
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn= () =>{
        signInWithPopup(auth, provider)
        .then(result =>{
            const LoggedInUser = result.user;
            setUser(LoggedInUser);
            console.log(LoggedInUser);
        })
        .catch(error => {
            console.log('error:', error.message )
        })
    }
    const handleGoogleSignOut= () =>{
        signOut(auth)
        .then(result=>{
            console.log(result);
            setUser(null)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className='flex items-center flex-col gap-5'>
            {/* user ? signOut : sign In */}
          { user ?  <Button className='96' onClick={handleGoogleSignOut}>Sign Out</Button> :
            <Button className='96' onClick={handleGoogleSignIn}>Google Login</Button>}
            { user && <div>
                <h3>User : {user.displayName}</h3>
                <h3>User Email : {user.email}</h3>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;