import React from "react";
import '../index.css';

export default function NotesCard() {
    return (
        <section className="bg-blue-300 w-med-1 h-72 rounded-3xl font-Tsukimi p-5 md:w-med-2 md:h-48"> 
            <h1 className="text-4xl md:text-xl"> Your notes </h1>
            <div className="h-5/6 flex items-center">
                <h2 className="text-5xl md:text-2xl"> NO NOTES... </h2>
            </div>
        </section>
    )
}