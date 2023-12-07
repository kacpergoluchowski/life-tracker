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
import getActivities from "../utilities/getActivities";
import findActivities from "../utilities/findActivities";

export default function UserHabits() {
    const iconArr = [goodMorning, timePlanning, diet, read, thoughts, newSkill, rest, multitasking, gratitude, shield, procrastination, drinkingWater, meditation, thought, friendship];
    const [messageVisible, setMessageVisible] = useState(false);
    const [activitiesData, setActivitiesData] = useState(null);
    const [habits, setHabits] = useState([]);
    const [habitsVisible, setHabitsVisible] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('nickname'))
            getActivities()
            .then((data) => { setActivitiesData(data); })
            .catch((err) => {
                console.log(err)
            });
      }, []); 

    useEffect(() => {
        setHabits(findActivities(activitiesData))
    }, [activitiesData])

    useEffect(() => {
        for(let i = 0; i < habits.length; i++) {
            habits[i] = {
                id: habitsData[habits[i]-1].id,
                name: habitsData[habits[i]-1].name,
                adventage1: habitsData[habits[i]-1].adventage1, 
                adventage2: habitsData[habits[i]-1].adventage2, 
                adventage3: habitsData[habits[i]-1].adventage3, 
            } 
        }

    }, [habits])

    setTimeout(() => {
        setHabitsVisible(true);
    }, 1000);

    return (
        <div className="flex flex-wrap gap-x-3 gap-y-3 h-screen overflow-y-auto mt-5 px-2 md:justify-center">
        { habitsVisible && (
            habits.map(habit => {
                return (
                    <ActivityCard data = {habit} icon = {iconArr[habit.id-1]} key = {habit.id} type = {'habit'} setVisible = {() => setMessageVisible(true)}/>
                )
            })
        )}
        </div>
        
    )
}