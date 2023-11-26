import React from "react";
import '../index.css';
import logoPic from '../images/logo-pic.png'

export default function Logo() {
    return (
        <section className="flex items-center justify-center text-med-1 w-96 h-32 gap-4 font-Ubuntu">
            <img src = {logoPic} className="w-16"/>
            <h1> LifeTracker </h1>
        </section>
    )
}