import React from 'react';
import Navbar from '../Navbar/Navbar';
import LoginForm from './LoginForm';
import image from '../../imag/backg1.jpg';

const Login = () => {
    return (
        <>
        <div 
            style={{background: `linear-gradient(to bottom right, #212139, #45189f, #212139)`}}>
            <Navbar />
            <LoginForm />
        </div>
        
        </>        
    )
}
export default Login