import React from "react";
import '../index.css';
import calendarPic from '../images/calendar-pic.png'

export default function EventsCard() {
    return (
        <section className="bg-amber-300 w-med-1 h-72 rounded-3xl font-Tsukimi p-5 md:w-med-2 md:h-48"> 
            <h1 className="text-4xl md:text-xs"> Upcoming events </h1>
            <span className="text-gray-500 ml-2"> and dates </span>
            <ul className="mt-5">
                <li className="text-2xl flex gap-3 my-6 md:text-xs"> <img src = {calendarPic} className="w-8 md:w-2" /> Job interviev </li>
                <li className="text-2xl flex gap-3 my-6 md:text-xs"> <img src = {calendarPic} className="w-8 md:w-2" /> Family meeting </li>
                <li className="text-2xl flex gap-3 my-6 md-text-xs"> <img src = {calendarPic} className="w-8 md:w-2" /> Bob's wed</li>
            </ul>
        </section>
    )
}