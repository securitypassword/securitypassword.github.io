import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Outlet />
        </>
    );
};

export default Home;
