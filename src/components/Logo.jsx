import React, { useState } from "react";
import '../index.css';
import logoPic from '../images/logo-pic.png';
import menuPic from '../images/menu-pic.png';
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

export default function Logo(props) {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    const handleMenuBtn = () => {
        setMobileMenuVisible(prevCheck => !prevCheck);
        console.log(mobileMenuVisible);
    }

    return (
        <section className="flex justify-between items-center md:w-full md:px-3">
            <div className="flex items-center justify-center text-med-1 w-96 h-32 gap-4 font-Ubuntu md:text-3xl md:h-16 md:gap-2 md:w-56 md:my-2">
                <Link to='/' className="flex items-center justify-around">
                    <img src = {logoPic} className="w-16 md:w-12"/>
                    <h1> LifeTracker </h1>
                </Link>
            </div>
            <img src = {menuPic} className="h-16 desktop:hidden" onClick={handleMenuBtn}/>
            { mobileMenuVisible && (
                <MobileMenu setVisible = {() => setMobileMenuVisible(false)}/>
            )}
        </section>
    )
}