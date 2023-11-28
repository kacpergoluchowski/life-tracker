import React from "react";
import '../index.css';
import bookPic from '../images/book-pic.png'
import salaryPic from '../images/salary-pic.png';

export default function HabitsCard() {
    return (
        <section className="bg-amber-300 w-med-1 h-72 rounded-3xl font-Tsukimi p-5 md:w-med-2 md:h-48"> 
            <h1 className="text-4xl md:text-xl"> Your habits </h1>
            <span className="text-gray-500 ml-2 md:ml-0 md:text-sml-1"> and progress </span>
            <ul className="mt-5">
                <li className="text-2xl flex gap-3 my-6 items-center md:text-sml-2 md:my-3"> <img src = {bookPic} className="w-8" /> Reading book </li>
                <li className="text-2xl flex gap-3 my-6 items-center md:text-sml-2 md:my-3"> <img src = {salaryPic} className="w-8" /> Save money </li>
            </ul>
        </section>
    )
}