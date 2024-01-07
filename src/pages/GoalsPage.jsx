import React, { useState } from "react";
import Header from "../layouts/Header";
import GoalsList from "../layouts/GoalsList";
import BlockAccess from "../components/BlockAccess";
import UserGoals from "../layouts/UserGoals";

export default function GoalsPage() {
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
        <div className="bg-blue-100 shadow-lg shadow-gray-800/100 w-11/12 h-wrapper-height rounded-3xl px-5 py-3 md:px-2 md:mt-0 md:h-min desktop:overflow-hidden">
            <Header />
            { localStorage.getItem('nickname') && 
            <>
                <div className="flex justify-center gap-x-6 md:mt-10">
                    <button className="bg-blue-400 w-1/5 h-12 text-3xl font-Tsukimi rounded-3xl text-white md:w-2/5 md:text-xl" onClick={item => showHabitsList(item)}> Goals List </button>
                    <button className="bg-blue-400 w-1/5 h-12 text-3xl font-Tsukimi rounded-3xl text-white md:w-2/5 md:text-xl" onClick={item => showUserHabits(item)}> Your goals </button>
                </div>
                { habitsListVisible && (
                    <GoalsList />
                )}
                { userHabitsVisible && (
                    <UserGoals />
                )}
            </>
            }
            { !localStorage.getItem('nickname') && <BlockAccess /> }
            
        </div>
    )
}