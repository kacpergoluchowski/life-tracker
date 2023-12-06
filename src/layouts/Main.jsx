import React, { useEffect, useState } from "react";
import '../index.css';
import HabitsCard from "../components/HabitsCard";
import StatsCard from "../components/StatsCard";
import GoalsCard from "../components/GoalsCard";
import EventsCard from "../components/Events";
import NotesCard from "../components/Notes";
import getActivities from "../utilities/getActivities";
import ActivitiesContext from "../contexts/ActivitiesContext";

export default function Main() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const mainVisibility = localStorage.getItem('nickname') || false;
    const [activitiesData, setActivitiesData] = useState(null)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
    }, []);
    
    useEffect(() => {
        if(localStorage.getItem('nickname'))
            getActivities()
            .then((data) => { setActivitiesData(data); })
            .catch((err) => {
                console.log(err)
            });
      }, []); 

    return (
        <ActivitiesContext.Provider value = {activitiesData}>
        { windowWidth > 1525 && (
            <DesktopViev mainVisibility = {mainVisibility} activitiesData = {activitiesData}/>
        )}
        { windowWidth <= 769 && (
            <MobileViev activitiesData = {activitiesData}/>
        )}
        </ActivitiesContext.Provider>
    )
}

const MobileViev = (props) => {
    return (
        <>
            <main className="md:flex md:flex-wrap md:w-full md:gap-1 md:ml-0">
                    <HabitsCard />
                    <GoalsCard />
                    <StatsCard />
                    <EventsCard />
                    <NotesCard />
            </main>
            { !props.activitiesData && (
                <h1> LOADING </h1>
            )}
        </>
            
    )
}

const DesktopViev = (props) => {
    return (
        <>
            { !props.mainVisibility && <h1 className="font-Tsukimi m-auto text-6xl"> Login to access your bookmarks... </h1> }
            { props.mainVisibility && props.activitiesData && (
                <main className="ml-5 w-4/5 flex justify-around gap-4 flex-wrap">
                <HabitsCard />
                <StatsCard />
                <GoalsCard />
                <NotesCard />
                <EventsCard />
                </main>
            )}
            { !props.activitiesData && (
                <h1> LOADING </h1>
            )}
        </>
    )
}