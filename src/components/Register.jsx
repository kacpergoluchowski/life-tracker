import React, { useRef } from "react";
import axios from "axios";
import '../index.css';
import fbPic from '../images/fb-pic.png';
import googlePic from '../images/google-pic.png';
import applePic from '../images/apple-pic.png';
import { Link } from "react-router-dom";
import Logo from "./Logo";
import loginPic from '../images/login-pic.png';

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

function RegisterCard(props) {
    const emailRef = useRef(0);
    const nicknameRef = useRef(0);
    const passwordRef = useRef(0);

    function registerUser() {
        const postData = {
            email: emailRef.current.value,
            nickname: nicknameRef.current.value,
            password: passwordRef.current.value
        }

        const query = fetch(`${process.env.REACT_APP_BACKEND_URL}/addUser`, {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-type":"application/json"
            }
        })
    }

    return (
        <div className="absolute right-0 top-0 w-2/5 h-full py-24 text-center md:sticky md:w-full md:py-10 md:pb-1">
            <h1 className="font-Tsukimi text-6xl"> SIGN UP </h1>
            <div className="h-5/6 mt-12 py-5 flex justify-center items-center flex-col gap-y-4 md:mt-2">
                <input type = 'text' className="w-1/2 h-16 rounded-3xl text-2xl px-5 bg-slate-200 md:w-4/5 md:bg-white focus:py-3" placeholder="Enter your email" ref={emailRef}/>
                <input type = 'text' className="w-1/2 h-16 rounded-3xl text-2xl px-5 bg-slate-200 md:w-4/5 md:bg-white focus:py-3" placeholder="Enter your nickname" ref={nicknameRef}/>
                <input type = 'password' className="w-1/2 h-16 rounded-3xl text-2xl px-5 bg-slate-200 md:w-4/5 md:bg-white focus:py-3" placeholder="Enter your password" ref={passwordRef}/>
                <input type = 'password' className="w-1/2 h-16 rounded-3xl text-2xl px-5 bg-slate-200 md:w-4/5 md:bg-white focus:py-3" placeholder="Enter your password again"/>
                <button className="bg-blue-300 w-1/2 h-12 text-3xl rounded-3xl hover:bg-blue-400 md:w-4/5" onClick={registerUser}> Register </button>
                <h1> ----------------------- or ----------------------- </h1>
                <div className="flex gap-x-5 justify-center">
                    <img src = {fbPic} className="w-med-4 bg-blue-200 px-8 py-2 rounded-full cursor-pointer hover:bg-blue-300 md:w-med-5"/>
                    <img src = {googlePic}  className="w-med-4 bg-blue-200 px-8 py-2 rounded-full cursor-pointer hover:bg-blue-300 md:w-med-5"/>
                    <img src = {applePic} className="w-med-4 bg-blue-200 px-8 py-2 rounded-full cursor-pointer hover:bg-blue-300 md:w-med-5"/>
                </div>
                <h1 className="flex gap-x-2 text-2xl font-Tsukimi md:text-sm">  Have you an account on LifeTracker? <Link to='/login' className="text-blue-300 underline cursor-pointer hover:text-blue-400"> Login here </Link></h1>
            </div>
            
        </div>
    )
}