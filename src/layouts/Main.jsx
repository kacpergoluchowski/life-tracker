import React from "react";
import '../index.css';
import HabitsCard from "../components/HabitsCard";
import StatsCard from "../components/StatsCard";
import GoalsCard from "../components/GoalsCard";
import EventsCard from "../components/Events";
import NotesCard from "../components/Notes";

export default function Main() {
    return (
        <main className="ml-5 w-4/5 flex justify-around gap-4 flex-wrap">
            <HabitsCard />
            <StatsCard />
            <GoalsCard />
            <NotesCard />
            <EventsCard />
        </main>
    )
}