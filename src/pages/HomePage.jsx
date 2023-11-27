import React from "react";
import '../index.css';
import Header from "../layouts/Header";
import Menu from "../components/Menu";
import Main from "../layouts/Main";

export default function HomePage() {
    console.log(window.innerWidth)
    return (
        <div className="bg-amber-100 shadow-lg shadow-gray-800/100 w-11/12 h-wrapper-height rounded-3xl px-5 py-3">
            <Header />
            <section className="h-5/6 flex">
                <Menu />
                <Main />
            </section>
        </div>
    )
}