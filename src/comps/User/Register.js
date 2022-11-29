import React from 'react';
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../../api/axios';
import { Link, Outlet } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import RegisterForm from './RegisterForm';

const Register = () => {
    return (
        <>
        <Navbar />
        <RegisterForm />
        </>
    )
}

export default Register
