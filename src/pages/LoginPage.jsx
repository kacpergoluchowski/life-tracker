import React from "react";
import '../index.css';
import Logo from "../components/Logo";
import Login from "../components/Login";
import loginPic from '../images/login-pic.png';

export default function LoginPage() {
    return (
       <div className="relative bg-blue-100 shadow-lg shadow-gray-800/100 w-11/12 h-[90%] rounded-3xl px-5 py-3">
            <Logo />
            <div className="flex items-center justify-around md:flex-col">
                <Login />
            </div>
        </div>
    )
}