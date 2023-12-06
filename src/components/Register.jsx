import React from "react";
import { useSpring } from "react-spring";
import '../index.css';
import Logo from "./Logo";
import loginPic from '../images/login-pic.png';
import RegisterCard from "./RegisterCard";

export default function Register() {
    return (
        <section className="absolute top-0 left-0 bg-white w-full h-wrapper-login rounded-3xl md:w-full md:h-screen md:sticky md:bg-inherit"> 
            <div className="bg-blue-200 rounded-3xl h-full w-3/5 md:hidden">
                <Logo />
                <div className="flex justify-center items-center h-5/6 ">
                    <div className="w-full h-3.6 flex justify-center items-center">
                        <img src = {loginPic} className="w-4/5 md:hidden"/>
                    </div>
                </div>
            </div>
            <RegisterCard />
        </section>
    )
}

