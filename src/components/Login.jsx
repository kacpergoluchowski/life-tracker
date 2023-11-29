import React from "react";
import '../index.css';
import fbPic from '../images/fb-pic.png';
import googlePic from '../images/google-pic.png';
import applePic from '../images/apple-pic.png';

export default function Login() {
    return (
        <section className="bg-gradient-to-br from-amber-200 to-amber-300 w-1/3 h-4/6 py-5 px-5 rounded-3xl md:w-full"> 
            <h1 className="text-4xl mb-4 font-Ubuntu md:text-center"> Login </h1>
            <span className="text-2xl font-Tsukimi md:hidden"> Welcome onboard with us! </span>
            <div className="mt-10">
                <div className="flex flex-col">
                    <span className="text-2xl ml-4 font-Tsukimi"> Username </span>
                    <input type = 'text' placeholder="Enter your username" className="w-5/6 h-12 rounded-3xl px-5 font-Tsukimi"/>
                </div>
                <div className="flex flex-col mt-5">
                    <span className="text-2xl ml-4 font-Tsukimi"> Password </span>
                    <input type = 'password' placeholder="Enter your password" className="w-5/6 h-12 rounded-3xl px-5 font-Tsukimi"/>
                    <span className="text-xl ml-auto mr-24 text-slate-500 cursor-pointer hover:text-slate-800 font-Tsukimi md:mr-14"> Forgot password? </span>
                </div>
                <div className="flex gap-6 mt-5 h-16">
                    <LoginCard image = {fbPic}/>
                    <LoginCard image = {googlePic}/>
                    <LoginCard image = {applePic}/>
                </div>
                <button className="bg-amber-400 w-5/6 h-12 mt-5 text-2xl rounded-3xl font-Ubuntu hover:bg-amber-500"> Login </button>
                <span className="block font-Tsukimi ml-5 mt-5 cursor-pointer"> New to LifeTracker? <p className="inline text-white"> Register Here </p></span>
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