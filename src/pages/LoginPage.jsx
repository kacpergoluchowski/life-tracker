import React from "react";
import '../index.css';
import Logo from "../components/Logo";
import Login from "../components/Login";
import loginPic from '../images/login-pic.png';

export default function LoginPage() {
    return (
       <div className="bg-amber-100 shadow-lg shadow-gray-800/100 w-11/12 h-wrapper-height rounded-3xl px-5 py-3 md:px-2 md:mt-0 md:h-min">
            <Logo />
            <div className="flex items-center justify-around md:flex-col">
                <img src = {loginPic} className="w-med-3 md:hidden"/>
                <Login />
            </div>
        </div>
    )
}