import React from 'react';
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../../api/axios';
import { Link, Outlet } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import RegisterForm from './RegisterForm';
import image from '../../imag/backg1.jpg';

const Register = () => {
    return (
        <>
        <Navbar />
        <div style={{ backgroundImage:`url(${image})`, width:'100%', height:'100%'}}>
            <RegisterForm />
        </div>
        
        </>
    )
}

export default Register
