import React, { useRef } from "react";
import axios from "axios";
import '../index.css';
import fbPic from '../images/fb-pic.png';
import googlePic from '../images/google-pic.png';
import applePic from '../images/apple-pic.png';
import { Link } from "react-router-dom";
import Logo from "./Logo";
import loginPic from '../images/login-pic.png';

export default function Login() {
    return (
        <section className="absolute top-0 left-0 bg-white w-full h-wrapper-login rounded-3xl md:w-full md:h-screen"> 
            <div className="bg-blue-200 rounded-3xl h-full w-3/5">
                <Logo />
                <div className="flex justify-center items-center h-5/6 ">
                    <div className="w-full h-3.6 flex justify-center items-center">
                        <img src = {loginPic} className="w-4/5"/>
                    </div>
                </div>
                <LoginCard />
            </div>
            <LoginCard />
        </section>
    )
}

function LoginCard(props) {
    return (
        <div className="absolute right-0 top-0 w-2/5 h-full py-24 text-center">
            <h1 className="font-Tsukimi text-6xl"> SIGN IN </h1>
            <div className="h-5/6 mt-12 py-5 flex justify-center items-center flex-col gap-y-4">
                <input type = 'text' className="w-1/2 h-16 rounded-3xl text-2xl px-5 bg-slate-200" placeholder="Enter your nickname"/>
                <input type = 'text' className="w-1/2 h-16 rounded-3xl text-2xl px-5 bg-slate-200" placeholder="Enter your password"/>
                <button className="bg-blue-300 w-1/2 h-12 text-3xl rounded-3xl hover:bg-blue-400"> Login </button>
                <h1> ------------------------------------ or ------------------------------------ </h1>
                <div className="flex gap-x-5">
                    <img src = {fbPic} className="h-3/6 bg-blue-200 px-8 py-2 rounded-full cursor-pointer hover:bg-blue-300"/>
                    <img src = {googlePic}  className="h-3/6 bg-blue-200 px-8 py-2 rounded-full cursor-pointer hover:bg-blue-300"/>
                    <img src = {applePic} className="h-3/6 bg-blue-200 px-8 py-2 rounded-full cursor-pointer hover:bg-blue-300"/>
                </div>
                <h1 className="flex gap-x-2 text-2xl font-Tsukimi"> New to LifeTracker? <Link to='/register' className="text-blue-300 underline cursor-pointer hover:text-blue-400"> Register Here </Link></h1>
            </div>
            
        </div>
    )
}