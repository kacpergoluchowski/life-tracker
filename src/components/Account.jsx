import React, { useState } from "react";
import '../index.css';
import guestPic from '../images/guest-pic.png'
import arrow from '../images/down-arrow-pic.png'
import { Link } from "react-router-dom";

export default function Account() {
    const [optionsVisible, setOptionsVisible] = useState(false);

    function handleArrow() {
        setOptionsVisible(prevVisible => !prevVisible);
    }
    
    return (
        <section className="relative w-1/6 flex items-center justify-end gap-4 mr-20 md:w-full md:justify-start md:pl-4 md:py-5">
            <img src = {guestPic} />
            <div className="h-4/5 flex flex-col justify-center gap-y-2">
                <h1 className="text-3xl"> Guest </h1>
                <span> No-role </span>
            </div>
            <img src = {arrow} onClick={handleArrow} className="cursor-pointer"/>
            { optionsVisible && <AccountOptions /> }
        </section>
    )
}

function AccountOptions() {
    return (
        <section className="bg-amber-300 absolute top-28 right-0 w-5/6 text-center text-2xl">
            <Link to = '/login'> <p className="hover:bg-amber-400 cursor-pointer"> LOGIN </p> </Link>
            <p className="hover:bg-amber-400 cursor-pointer"> REGISTER </p>
        </section>
    )
}