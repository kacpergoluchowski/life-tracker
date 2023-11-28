import React from "react";
import '../index.css';
import logoPic from '../images/logo-pic.png';
import menuPic from '../images/menu-pic.png';

export default function Logo() {
    return (
        <section className="flex justify-between items-center md:w-full">
            <div className="flex items-center justify-center text-med-1 w-96 h-32 gap-4 font-Ubuntu md:text-3xl md:h-16 md:gap-2 md:w-64 md:my-2">
                <img src = {logoPic} className="w-16 md:w-12"/>
                <h1> LifeTracker </h1>
            </div>
            <img src = {menuPic} className="h-16 desktop:hidden" />
        </section>
    )
}