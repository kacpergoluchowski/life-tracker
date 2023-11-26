import React from "react";
import '../index.css';
import guestPic from '../images/guest-pic.png'
import arrow from '../images/down-arrow-pic.png'

export default function Account() {
    return (
        <section className="w-1/6 flex items-center justify-end gap-4 mr-20">
            <img src = {guestPic} />
            <div className="h-4/5 flex flex-col justify-center gap-y-2">
                <h1 className="text-3xl"> Guest </h1>
                <span> No-role </span>
            </div>
            <img src = {arrow} />
        </section>
    )
}