import React from "react";
import '../index.css';
import calendarPic from '../images/calendar-pic.png'

export default function EventsCard() {
    return (
        <section className="bg-blue-300 w-med-1 h-72 rounded-3xl font-Tsukimi p-5 md:w-med-2 md:h-48"> 
            <h1 className="text-4xl md:text-xl"> Your events </h1>
            <div className="h-5/6 flex items-center">
                <h2 className="text-5xl"> NO EVENTS... </h2>
            </div>
        </section>
    )
}

<ul className="mt-5"> 
    <li className="text-2xl flex gap-3 my-6 items-center md:text-sml-1 md:my-1"> <img src = {calendarPic} className="w-8" /> Job interviev </li>
    <li className="text-2xl flex gap-3 my-6 items-center md:text-sml-1 md:my-1"> <img src = {calendarPic} className="w-8" /> Family meet </li>
</ul>