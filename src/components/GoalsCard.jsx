import React from "react";
import '../index.css';
import engBookPic from '../images/eng-book-pic.png'
import drivingLicensePic from '../images/driving-license-pic.png';

export default function GoalsCard() {
    return (
        <section className="bg-blue-300 w-med-1 h-72 rounded-3xl font-Tsukimi p-5 md:w-med-2 md:h-48"> 
            <h1 className="text-4xl md:text-xl"> Your goals </h1>
            <div className="h-5/6 flex items-center">
                <h2 className="text-5xl md:text-2xl"> NO GOALS... </h2>
            </div>
        </section>
    )
}

{/* <span className="text-gray-500 ml-2 md:text-sml-1 md:ml-0"> and progress </span>
<ul className="mt-5">
    <li className="text-2xl flex gap-3 my-6 items-center md:text-sml-2 md:my-3"> <img src = {engBookPic} className="w-8" /> Learn english </li>
    <li className="text-2xl flex gap-3 my-6 items-center md:text-sml-2 md:my-3"> <img src = {drivingLicensePic} className="w-8" /> Get a license </li>
</ul> */}