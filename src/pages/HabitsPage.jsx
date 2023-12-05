import React from "react";
import Header from "../layouts/Header";
import HabitsList from "../layouts/HabitsList";

export default function HabitsPage() {
    return (
        <div className="bg-blue-100 shadow-lg shadow-gray-800/100 w-11/12 h-wrapper-height rounded-3xl px-5 py-3 md:px-2 md:mt-0 md:h-min">
            <Header />
            <div className="flex justify-center gap-x-6">
                <button className="bg-blue-400 w-1/5 h-12 text-3xl font-Tsukimi rounded-3xl text-white md:w-2/5 md:text-xl"> Habits List </button>
                <button className="bg-blue-400 w-1/5 h-12 text-3xl font-Tsukimi rounded-3xl text-white md:w-2/5 md:text-xl"> Your habits </button>
            </div>
            <HabitsList />
        </div>
    )
}