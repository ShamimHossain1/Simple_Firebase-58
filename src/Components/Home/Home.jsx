import React from 'react';
import app from '../../Firebase/Firebase.init';
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const Home = () => {
    
    return (
        <div className='text-center'>
            <h2>This is home</h2>
        </div>
    );
};

export default Home;