import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Message from './Message'
import loginPic from '../images/login-pic.png';
import fbPic from '../images/fb-pic.png';
import googlePic from '../images/google-pic.png';
import applePic from '../images/apple-pic.png';
import loginUser from "../utilities/loginUser";

export default function Login() {
  const [registrationResponse, setRegistrationResponse] = useState({ success: false , error: null });
  const [messageVisible, setMessageVisible] = useState(false);
  const nicknameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = () => {
    loginUser(nicknameRef.current.value, passwordRef.current.value)
      .then(response => {
        setRegistrationResponse(response);
      });
  };

  useEffect(() => {
    if(registrationResponse.success === true) {
        window.location.href = '/';
        localStorage.setItem('nickname', nicknameRef.current.value)
    }
    else if(registrationResponse.error !== null)
        setMessageVisible(true);
  }, [registrationResponse]);

  return (
    <>
        { messageVisible && (
            <Message title = {"Login failed"} content = {registrationResponse.message} button = {"Close"}/>
        )}
        <section className="absolute top-0 left-0 bg-white w-full h-[100%] rounded-3xl md:sticky md:h-max md:bg-inherit"> 
            <div className="bg-blue-200 rounded-3xl h-full w-3/5 md:hidden">
                <Logo />
                <div className="flex justify-center items-center h-5/6 ">
                <div className="w-full h-3.6 flex justify-center items-center">
                    <img src={loginPic} className="w-4/5" alt="Login" />
                </div>
                </div>
            </div>
            <div className="absolute right-0 top-0 w-2/5 h-full py-24 text-center md:sticky md:w-full md:py-6">
                <h1 className="font-Tsukimi text-6xl"> SIGN IN </h1>
                <div className="h-5/6 mt-12 py-5 flex justify-center items-center flex-col gap-y-4">
                <input type="text" className="w-1/2 h-16 rounded-3xl text-2xl px-5 bg-slate-200 md:bg-white md:w-4/5 md:h-16" placeholder="Enter your nickname" ref={nicknameRef}/>
                <input type="password" className="w-1/2 h-16 rounded-3xl text-2xl px-5 bg-slate-200 md:bg-white md:w-4/5 md:h-16" placeholder="Enter your password" ref={passwordRef}/>
                <button className="bg-blue-300 w-1/2 h-12 text-3xl rounded-3xl hover:bg-blue-400 md:w-4/5" onClick={handleLogin}> Login </button>
                <h1 className="md:my-5"> --------------------- or --------------------- </h1>
                <div className="flex gap-x-5 justify-center">
                    <img src={fbPic} className="w-med-4 bg-blue-200 px-8 py-2 rounded-full cursor-pointer hover:bg-blue-300 md:w-med-5" alt="Facebook Login" />
                    <img src={googlePic} className="w-med-4 bg-blue-200 px-8 py-2 rounded-full cursor-pointer hover:bg-blue-300 md:w-med-5" alt="Google Login" />
                    <img src={applePic} className="w-med-4 bg-blue-200 px-8 py-2 rounded-full cursor-pointer hover:bg-blue-300 md:w-med-5" alt="Apple Login" />
                </div>
                <h1 className="flex gap-x-2 text-2xl font-Tsukimi md:text-lg"> New to LifeTracker? <Link to='/register' className="text-blue-300 underline cursor-pointer hover:text-blue-400"> Register Here </Link></h1>
                </div>
            </div>
        </section>
    </>
    
  );
}
 