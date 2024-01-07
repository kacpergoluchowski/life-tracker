import React, { useContext, useEffect, useState } from "react";
import '../index.css';
import findActivities from "../utilities/findActivities";
import ActivitiesContext from "../contexts/ActivitiesContext";

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

export default function GoalsCard() {
    const activitiesData = useContext(ActivitiesContext);
    const [goals, setGoals] = useState([])
    const iconArr = [loseWeight, qualityService, onlineCourse, invest, communication, hobby, groups, travelling, limited, leadership, programming, personalBrand, writtingSkills, healthlyLifestyle, sports];

    useEffect(() => {
        setGoals(findActivities('goal', activitiesData));
    }, [])

    return (
        <section className="bg-blue-300 w-med-1 h-72 rounded-3xl font-Tsukimi p-5 md:w-med-2 md:h-48"> 
            <h1 className="text-4xl md:text-xl"> Your Goals </h1>
            <div className="h-5/6 flex flex-col">
                { goals.length == 0 &&
                    <h2 className="text-5xl md:text-2xl my-auto"> NO HABITS... </h2>
                }
                { goals.length == 1 &&  
                    <li className="text-2xl flex gap-3 my-6 items-center md:text-sml-2 md:my-2"> <img src = {iconArr[goals[0]-1]} className="w-8" /> {goalsData[goals[0]-1].name} </li>
                }
                { goals.length > 1 && goals.length !== 1 && 
                    <ul className="mt-2">
                        <li className="text-2xl flex gap-3 my-6 items-center md:text-sm md:my-2"> <img src = {iconArr[goals[0]-1]} className="w-8 md:w-7" /> {goalsData[goals[0]-1].name} </li>
                        <li className="text-2xl flex gap-3 my-6 items-center md:text-sm md:my-2"> <img src = {iconArr[goals[1]-1]} className="w-8 md:w-7" /> {goalsData[goals[1]-1].name} </li>
                    </ul>
                }
                { goals.length > 2 &&
                    <span className="text-xl mt-auto text-slate-500 mb-2 md:text-sm"> + {goals.length-2} habits more...  </span>
                }
            </div>
        </section>
    )
}