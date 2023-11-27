import React from "react";
import '../index.css';
import notesPic from '../images/copy-writing.png'

export default function NotesCard() {
    return (
        <section className="bg-amber-300 w-med-1 h-72 rounded-3xl font-Tsukimi p-5"> 
            <h1 className="text-4xl"> Your notes </h1>
            <ul className="mt-5">
                <li className="text-2xl flex gap-3 my-6"> <img src = {notesPic} className="w-8" /> shopping list </li>
                <li className="text-2xl flex gap-3 my-6"> <img src = {notesPic} className="w-8" /> to complete </li>
            </ul>
        </section>
    )
}