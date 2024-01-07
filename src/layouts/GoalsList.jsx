import React, { useEffect, useState } from "react";
import ActivityCard from "../components/ActivityCard";
import Message from '../components/Message'

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

export default function GoalsList() {
    const iconArr = [loseWeight, qualityService, onlineCourse, invest, communication, hobby, groups, travelling, limited, leadership, programming, personalBrand, writtingSkills, healthlyLifestyle, sports];
    const [messageVisible, setMessageVisible] = useState(false);

    let index = -1;
    return (
        <div className="flex flex-wrap gap-x-3 gap-y-3 h-med-1 justify-center items-center overflow-y-auto mt-5 px-2">
        { messageVisible && (
            <Message title = {"The goals has been added!"} content = {'The goal will be available in the "your goals" tab'} button = {"Close"}/>
        )}
        { goalsData && (
            goalsData.map(goal => {
                index++;
                return (
                    <ActivityCard data = {goal} icon = {iconArr[index]} key = {goal.id} type = {'goal'} setVisible = {() => setMessageVisible(true)}/>
                )
            })
        )}
        </div>
    )
}