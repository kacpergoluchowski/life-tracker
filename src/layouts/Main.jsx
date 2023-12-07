import React, { useEffect, useState } from "react";
import '../index.css';
import HabitsCard from "../components/HabitsCard";
import StatsCard from "../components/StatsCard";
import GoalsCard from "../components/GoalsCard";
import EventsCard from "../components/Events";
import NotesCard from "../components/Notes";
import getActivities from "../utilities/getActivities";
import ActivitiesContext from "../contexts/ActivitiesContext";
import BlockAccess from "../components/BlockAccess";
import Loader from "../components/Loader";

export default function Main() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
            <DesktopViev activitiesData = {activitiesData}/>
        )}
        { windowWidth <= 1023 && (
            <MobileViev activitiesData = {activitiesData}/>
        )}
        </ActivitiesContext.Provider>
    )
}

const MobileViev = (props) => {
    return (
        <>
            { !localStorage.getItem('nickname') && <BlockAccess /> }
            { localStorage.getItem('nickname') && props.activitiesData && (
            <main className="w-full flex flex-wrap justify-between gap-y-1 mt-3">
                <HabitsCard />
                <GoalsCard />
                <StatsCard />
                <NotesCard />
                <EventsCard />
            </main>
            )}
            { !props.activitiesData && localStorage.getItem('nickname') && (
                <Loader />
            )}
        </>  
    )
}

const DesktopViev = (props) => {
    return (
        <>
            { !localStorage.getItem('nickname') && <BlockAccess /> }
            { localStorage.getItem('nickname') && props.activitiesData && (
                <main className="ml-5 w-4/5 flex justify-around gap-4 flex-wrap">
                <HabitsCard />
                <StatsCard />
                <GoalsCard />
                <NotesCard />
                <EventsCard />
                </main>
            )}
            { !props.activitiesData && localStorage.getItem('nickname') && (
                <Loader />
            )}
        </>
    )
}