import React from "react";
import '../index.css';
import calendarPic from '../images/calendar-pic.png'

export default function EventsCard() {
    return (
        <section className="bg-amber-300 w-med-1 h-72 rounded-3xl font-Tsukimi p-5"> 
            <h1 className="text-4xl"> Upcoming events </h1>
            <span className="text-gray-500 ml-2"> and dates </span>
            <ul className="mt-5">
                <li className="text-2xl flex gap-3 my-6"> <img src = {calendarPic} className="w-8" /> Job interviev </li>
                <li className="text-2xl flex gap-3 my-6"> <img src = {calendarPic} className="w-8" /> Family meeting </li>
                <li className="text-2xl flex gap-3 my-6"> <img src = {calendarPic} className="w-8" /> Bob's wedding </li>
            </ul>
        </section>
    )
}