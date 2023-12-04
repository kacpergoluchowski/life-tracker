import React, { useState } from "react";
import '../index.css';
import guestPic from '../images/guest-pic.png'
import arrow from '../images/down-arrow-pic.png'
import { Link } from "react-router-dom";
import closePic from '../images/close (5).png'

export default function Account() {
    const [optionsVisible, setOptionsVisible] = useState(false);
    const userNickname = localStorage.getItem('nickname') || "Guest";
    
    function handleArrow() {
        setOptionsVisible(prevVisible => !prevVisible);
    }
    
    return (
        <section className="w-1/6 flex items-center justify-end gap-4 mr-20 md:w-full md:justify-start md:pl-4 md:py-5">
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

function AccountOptions(props) {
    return (
        <section className="absolute top-0 right-0 bg-black/70 w-1/4 h-screen flex text-white items-center justify-center text-center text-6xl md:w-3/5 md:text-4xl">
            <img src = {closePic} className="absolute right-5 top-5 w-20 cursor-pointer " onClick={() => props.setVisible()}/>
            <ul> 
                <Link to='/login'> <li className="py-5"> LOGIN </li> </Link>
                <Link to='/register'> <li className="py-5"> REGISTER </li> </Link>
            </ul>
        </section>
    )
}