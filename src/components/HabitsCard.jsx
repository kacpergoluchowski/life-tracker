import React, { useContext, useEffect, useState } from "react";
import '../index.css';
import bookPic from '../images/book-pic.png'
import salaryPic from '../images/salary-pic.png';
import ActivitiesContext from '../contexts/ActivitiesContext'
import habitsData from '../data/habitsData.json';
import findActivities from "../utilities/findActivities";
import goodMorning from '../images/good-morning 1.png';
import timePlanning from '../images/time-planning 1.png';
import diet from '../images/diet 1.png';
import read from '../images/read 1.png';
import thoughts from '../images/thought-bubble 1.png'
import newSkill from '../images/self-improvement 1.png'
import rest from '../images/clock 1.png'
import multitasking from '../images/multitasking.png'
import gratitude from '../images/gratitude 1.png'
import shield from '../images/shield 1.png'
import procrastination from '../images/procrastination 1.png'
import drinkingWater from '../images/drink-water 1.png'
import meditation from '../images/meditation 1.png'
import thought from '../images/thought 1.png'
import friendship from '../images/friendship 1.png'


export default function HabitsCard() {
    const activitiesData = useContext(ActivitiesContext);
    const [habits, setHabits] = useState([])
    const iconArr = [goodMorning, timePlanning, diet, read, thoughts, newSkill, rest, multitasking, gratitude, shield, procrastination, drinkingWater, meditation, thought, friendship];

    useEffect(() => {
        setHabits(findActivities(activitiesData));
    }, [])

    return (
        <section className="bg-blue-300 w-med-1 h-72 rounded-3xl font-Tsukimi p-5 md:w-med-2 md:h-48"> 
            <h1 className="text-4xl md:text-xl"> Your habits </h1>
            <div className="h-5/6 flex flex-col">
                { habits.length == 0 && (
                    <h2 className="text-5xl md:text-2xl"> NO HABITS... </h2>
                )}
                { habits.length == 1 &&  
                    <li className="text-2xl flex gap-3 my-6 items-center md:text-sml-2 md:my-2"> <img src = {iconArr[habits[0]]} className="w-8" /> {habitsData[habits[0]-1].name} </li>
                }
                { habits.length > 1 && habits.length !== 1 && 
                    <ul className="mt-2">
                        <li className="text-2xl flex gap-3 my-6 items-center md:text-sm md:my-2"> <img src = {iconArr[habits[0]-1]} className="w-8 md:w-7" /> {habitsData[habits[0]-1].name} </li>
                        <li className="text-2xl flex gap-3 my-6 items-center md:text-sm md:my-2"> <img src = {iconArr[habits[1]-1]} className="w-8 md:w-7" /> {habitsData[habits[1]-1].name} </li>
                    </ul>
                }
                { habits.length > 2 &&
                    <span className="text-xl mt-auto text-slate-500 mb-2 md:text-sm"> + {habits.length-2} habits more...  </span>

                }
            </div>
        </section>
    )
}