import React, { useState } from "react";
import Header from "../layouts/Header";
import HabitsList from "../layouts/HabitsList";
import UserHabits from "../layouts/UserHabits";

export default function HabitsPage() {
    const [habitsListVisible, setHabitsListVisible] = useState(true);
    const [userHabitsVisible, setUserHabitsVisible] = useState(false);

    function showHabitsList(e) {
        setHabitsListVisible(true);
        setUserHabitsVisible(false);
    }

    function showUserHabits(e) {
        setHabitsListVisible(false);
        setUserHabitsVisible(true);
    }

    return (
        <div className="bg-blue-100 shadow-lg shadow-gray-800/100 w-11/12 h-wrapper-height rounded-3xl px-5 py-3 md:px-2 md:mt-0 md:h-min">
            <Header />
            <div className="flex justify-center gap-x-6">
                <button className="bg-blue-400 w-1/5 h-12 text-3xl font-Tsukimi rounded-3xl text-white md:w-2/5 md:text-xl" onClick={item => showHabitsList(item)}> Habits List </button>
                <button className="bg-blue-400 w-1/5 h-12 text-3xl font-Tsukimi rounded-3xl text-white md:w-2/5 md:text-xl" onClick={item => showUserHabits(item)}> Your habits </button>
            </div>
            { habitsListVisible && (
                <HabitsList />
            )}
            { userHabitsVisible && (
                <UserHabits />
            )}
        </div>
    )
}