import React, { useEffect, useState } from "react";
import ActivityCard from "../components/ActivityCard";
import Message from '../components/Message'
import getActivities from '../utilities/getActivities'

import goalsData from '../data/goalsData.json'
import loseWeight from '../images/lose-weight 1.png';
import qualityService from '../images/quality-service 1.png';
import onlineCourse from '../images/online-course 1.png';
import invest from '../images/invest.png';
import communication from '../images/communication.png'
import hobby from '../images/hobby 1.png'
import groups from '../images/groups 1.png'
import travelling from '../images/travelling (1) 1.png'
import limited from '../images/limited 1.png'
import leadership from '../images/leadership 1.png'
import programming from '../images/programming 1.png'
import personalBrand from '../images/branding 1.png'
import writtingSkills from '../images/writing 1.png'
import healthlyLifestyle from '../images/healthly-lifestyle.png'
import sports from '../images/sports 1.png'
import findActivities from "../utilities/findActivities";
import Loader from '../components/Loader'

export default function UserGoals() {
    const iconArr = [loseWeight, qualityService, onlineCourse, invest, communication, hobby, groups, travelling, limited, leadership, programming, personalBrand, writtingSkills, healthlyLifestyle, sports];
    const [messageVisible, setMessageVisible] = useState(false);
    const [activitiesData, setActivitiesData] = useState(null);
    const [goals, setGoals] = useState([]);
    const [goalsVisible, setHabitsVisible] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('nickname'))
            getActivities()
            .then((data) => { setActivitiesData(data); })
            .catch((err) => {
                console.log(err)
            });
      }, []); 

    useEffect(() => {
        setGoals(findActivities('goal', activitiesData))
    }, [activitiesData])

    useEffect(() => {
        for(let i = 0; i < goals.length; i++) {
            goals[i] = {
                id: goalsData[goals[i]-1].id,
                name: goalsData[goals[i]-1].name,
                adventage1: goalsData[goals[i]-1].adventage1, 
                adventage2: goalsData[goals[i]-1].adventage2, 
                adventage3: goalsData[goals[i]-1].adventage3, 
            } 
        }

    }, [goals])

    setTimeout(() => {
        setHabitsVisible(true);
    }, 1000);

    return (
        <div className="flex flex-wrap gap-x-3 gap-y-3 h-screen overflow-y-auto mt-5 px-2 md:justify-center">
        { goalsVisible && (
            goals.map(goal => {
                return (
                    <ActivityCard data = {goal} icon = {iconArr[goal.id-1]} key = {goal.id} type = {'goal'} setVisible = {() => setMessageVisible(true)}/>
                )
            })
        )}
        { !goalsVisible && <Loader /> }
        </div>
        
    )
}