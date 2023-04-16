import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' text-lg font-semibold mb-10 mt-56 flex gap-10 justify-center'>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
        </div>
    );
};

export default Header;