import React, { useEffect, useState } from "react";
import '../index.css';
import HabitsCard from "../components/HabitsCard";
import StatsCard from "../components/StatsCard";
import GoalsCard from "../components/GoalsCard";
import EventsCard from "../components/Events";
import NotesCard from "../components/Notes";

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
    return (
        <>
            <main className="md:flex md:flex-wrap md:w-full md:gap-1 md:ml-0">
                <HabitsCard />
                <GoalsCard />
                <StatsCard />
                <EventsCard />
                <NotesCard />
            </main>
        </>
        
    )
}

const DesktopViev = () => {
    const mainVisibility = localStorage.getItem('nickname') || false;

    return (
        <>
            { !mainVisibility && <h1 className="font-Tsukimi m-auto text-6xl"> Login to access your bookmarks... </h1> }
            { mainVisibility && (
                <main className="ml-5 w-4/5 flex justify-around gap-4 flex-wrap">
                <HabitsCard />
                <StatsCard />
                <GoalsCard />
                <NotesCard />
                <EventsCard />
                </main>
            )}
        </>
        
    )
}