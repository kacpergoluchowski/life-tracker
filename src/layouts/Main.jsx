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

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
    }, []);

    return (
        <>
        { windowWidth > 1525 && (
            <DesktopViev />
        )}
        { windowWidth <= 769 && (
            <MobileViev />
        )}
        </>
    )
}

const MobileViev = () => {
    const mainVisibility = localStorage.getItem('nickname') || false;
    const [activitiesData, setActivitiesData] = useState(null)
    
    useEffect(() => {
        getActivities()
           .then((data) => { setActivitiesData(data); })
            .catch((err) => {
                console.log(err)
            });
      }, []); 

    return (
        <ActivitiesContext.Provider value = {activitiesData}>
            <main className="md:flex md:flex-wrap md:w-full md:gap-1 md:ml-0">
                    <HabitsCard />
                    <GoalsCard />
                    <StatsCard />
                    <EventsCard />
                    <NotesCard />
            </main>
            { !activitiesData && (
                <h1> LOADING </h1>
            )}
        </ActivitiesContext.Provider>
    )
}

const DesktopViev = () => {
    const mainVisibility = localStorage.getItem('nickname') || false;
    const [activitiesData, setActivitiesData] = useState(null)
    
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
            { !mainVisibility && <h1 className="font-Tsukimi m-auto text-6xl"> Login to access your bookmarks... </h1> }
            { mainVisibility && activitiesData && (
                <main className="ml-5 w-4/5 flex justify-around gap-4 flex-wrap">
                <HabitsCard />
                <StatsCard />
                <GoalsCard />
                <NotesCard />
                <EventsCard />
                </main>
            )}
            { !activitiesData && (
                <h1> LOADING </h1>
            )}
        </ActivitiesContext.Provider>
        
    )
}