import React from 'react';
import Navbar from '../Navbar/Navbar';
import LoginForm from './LoginForm';
import image from '../../imag/backg1.jpg';

const Login = () => {
    return (
        <>
        <Navbar />
        <div style={{ backgroundImage:`url(${image})`, width:'100%', height:'100%'}}>
            <LoginForm />
        </div>
        </>        
    )
}
export default Login