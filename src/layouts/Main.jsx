import React from "react";
import '../index.css';
import HabitsCard from "../components/HabitsCard";
import StatsCard from "../components/StatsCard";

export default function Main() {
    return (
        <main className="ml-5 w-4/5 flex justify-around gap-4 flex-wrap">
            <HabitsCard />
            <StatsCard />
            <HabitsCard />
            <HabitsCard />
            <HabitsCard />
        </main>
    )
}