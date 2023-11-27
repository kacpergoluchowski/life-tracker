import React from "react";
import '../index.css';
import engBookPic from '../images/eng-book-pic.png'
import drivingLicensePic from '../images/driving-license-pic.png';

export default function GoalsCard() {
    return (
        <section className="bg-amber-300 w-med-1 h-72 rounded-3xl font-Tsukimi p-5"> 
            <h1 className="text-4xl"> Your goals </h1>
            <span className="text-gray-500 ml-2"> and progress </span>
            <ul className="mt-5">
                <li className="text-2xl flex gap-3 my-6"> <img src = {engBookPic} className="w-8" /> Learn english B2 </li>
                <li className="text-2xl flex gap-3 my-6"> <img src = {drivingLicensePic} className="w-8" /> Get a driving license </li>
            </ul>
        </section>
    )
}