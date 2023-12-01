import React, { useRef } from "react";
import axios from "axios";
import '../index.css';
import fbPic from '../images/fb-pic.png';
import googlePic from '../images/google-pic.png';
import applePic from '../images/apple-pic.png';

export default function Login() {
    const nicknameRef = useRef(0);
    const passwordRef = useRef(0);

    function loginUser() {
        const postData = {
            nickname: nicknameRef.current.value,
            password: passwordRef.current.value
        }
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/addUser`, postData);
    }

    return (
        <section className="bg-gradient-to-br from-amber-200 to-amber-300 w-1/3 h-4/6 py-5 px-5 rounded-3xl md:w-full md:h-screen"> 
            <h1 className="text-4xl mb-4 font-Ubuntu md:text-center"> SIGN IN </h1>
            <span className="text-2xl font-Tsukimi md:hidden"> Welcome onboard with us! </span>
            <div className="mt-10">
                <div className="flex flex-col">
                    <span className="text-2xl ml-4 font-Tsukimi"> Username </span>
                    <input type = 'text' placeholder="Enter your username" className="w-5/6 h-12 rounded-3xl px-5 font-Tsukimi md:w-full" ref={nicknameRef}/>
                </div>
                <div className="flex flex-col mt-5">
                    <span className="text-2xl ml-4 font-Tsukimi"> Password </span>
                    <input type = 'password' placeholder="Enter your password" className="w-5/6 h-12 rounded-3xl px-5 font-Tsukimi md:w-full" ref={passwordRef}/>
                    <span className="text-xl ml-auto mr-24 text-slate-500 cursor-pointer hover:text-slate-800 font-Tsukimi md:mr-0"> Forgot password? </span>
                </div>
                <div className="flex gap-6 mt-5 h-16 md:justify-around">
                    <LoginCard image = {fbPic}/>
                    <LoginCard image = {googlePic}/>
                    <LoginCard image = {applePic}/>
                </div>
                <button className="bg-amber-400 w-5/6 h-12 mt-5 text-2xl rounded-3xl font-Ubuntu hover:bg-amber-500 md:w-full" onClick={loginUser}> Login </button>
                <span className="block font-Tsukimi ml-5 mt-5"> New to LifeTracker? <p className="inline text-white cursor-pointer"> Register Here </p></span>
            </div>
        </section>
    )
}

function LoginCard(props) {
    return (
        <div className="w-1/4 bg-white/50 rounded-full flex items-center justify-center hover:bg-white/100 hover:cursor-pointer">
            <img src = {props.image} className="h-4/6"/>
        </div>
    )
}