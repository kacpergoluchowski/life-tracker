import React from "react";
import '../index.css';

export default function Message(props) {
    return (
        <div className="absolute top-0 h-56 left-0 right-0 w-1/3 mx-auto bg-blue-300/80 rounded-3xl p-5 z-40 md:w-11/12 md:bg-blue-300 md:h-64" style={ {animation: 'fadeDown 1s'} }>
            <h1 className="font-Tsukimi text-3xl mb-4 md:text-2xl"> Thanks for register! </h1>
            <span className="text-xl md:text-base md:text-justify"> An email confirming your registration in our application has been sent to your email address! </span>
            <button className="bg-blue-400 block ml-auto mt-10 w-1/3 h-10 text-xl rounded-3xl hover:bg-blue-500 md:text-lg" onClick={() => props.redirect()}> Home </button>
        </div>
    )
}