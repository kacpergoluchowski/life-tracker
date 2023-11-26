import React from "react";
import '../index.css';
import logoPic from '../images/logo-pic.png';
import Logo from "../components/Logo";
import Account from "../components/Account";

export default function Header() {
    return (
        <header className="flex justify-between">
            <Logo />
            <SearchBar />
            <Account />
        </header>
    )
}

function SearchBar() {
    return (
        <section className="w-1/2 flex justify-center items-center">
            <input type = 'text' className="w-11/12 h-1/2 rounded-full text-3xl px-7 shadow-lg shadow-gray-600/100" placeholder="Search"/>
        </section>
    )
}