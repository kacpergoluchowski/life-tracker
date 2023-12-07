import React, { useRef, useState } from "react";
import '../index.css';
import guestPic from '../images/guest-pic.png'
import arrow from '../images/down-arrow-pic.png'
import closePic from '../images/close (5).png'
import { Link } from "react-router-dom";

export default function Account() {
    const [optionsVisible, setOptionsVisible] = useState(false);
    const userNickname = localStorage.getItem('nickname') || "Guest";

    const handleArrow = () => {
        setOptionsVisible(prevVisible => !prevVisible);
    }
    
    return (
        <section className="relative w-1/6 flex items-center justify-end gap-4 mr-20 md:w-full md:justify-start md:pl-4 md:py-5">
            <img src = {guestPic} />
            <div className="h-4/5 flex flex-col justify-center gap-y-2">
                <h1 className="text-3xl"> {userNickname} </h1>
                <span> No-role </span>
            </div>
            <img src = {arrow} onClick={handleArrow} className="cursor-pointer"/>
            { optionsVisible && <AccountOptions setVisible = {setOptionsVisible}/> }
        </section>
    )
}



function AccountOptions({ setVisible }) {
    function logoutUser() {
        const shouldLogout = window.confirm('czy na pewno chcesz się wylogować?')        

        if(shouldLogout) {
            localStorage.removeItem('nickname');
            window.location.reload();
        }
    }

    return (
        <section className="absolute bg-black/60 top-28 left-10 w-full h-32 flex p-2 rounded-xl md:w-72 md:left-4">
            <ul className="font-Tsukimi flex flex-col justify-center"> 
            { !localStorage.getItem('nickname') &&
            <>
                <Link to='/login'> <li className="py-1 text-white text-3xl"> LOGIN </li> </Link>
                <div className="border w-64 my-2"></div>
                <Link to='/register'> <li className="py-1 text-white text-3xl"> REGISTER </li> </Link>
            </>}
            { localStorage.getItem('nickname') && 
                <button className="text-red-400 text-3xl ml-4" onClick={logoutUser}> LOGOUT </button>
            }
            </ul>
        </section>
    )
}