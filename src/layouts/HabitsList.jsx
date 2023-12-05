import React, { useEffect, useState } from "react";
import ActivityCard from "../components/ActivityCard";
import Message from '../components/Message'

import habitsData from '../data/habitsData.json'
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

export default function HabitsList() {
    const iconArr = [goodMorning, timePlanning, diet, read, thoughts, newSkill, rest, multitasking, gratitude, shield, procrastination, drinkingWater, meditation, thought, friendship];
    const [messageVisible, setMessageVisible] = useState(false);

    let index = -1;
    return (
        <div className="flex flex-wrap gap-x-3 gap-y-3 h-med-1 justify-center items-center overflow-y-auto mt-5 px-2">
        { messageVisible && (
            <Message title = {"The habit has been added!"} content = {'The habit will be available in the "your habits" tab'} button = {"Close"}/>
        )}
        { habitsData && (
            habitsData.map(habit => {
                index++;
                return (
                    <ActivityCard data = {habit} icon = {iconArr[index]} key = {habit.id} type = {'habit'} setVisible = {() => setMessageVisible(true)}/>
                )
            })
        )}
        </div>
    )
}