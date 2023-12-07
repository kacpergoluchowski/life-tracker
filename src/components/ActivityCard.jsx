import React, { useEffect, useState } from "react";
import '../index.css';
import addActivities from "../utilities/addActivities";

export default function ActivityCard(props) {
    const [addActivityResponse, setAddActivityResponse] = useState({ success: false , error: null })

    const handleAddActivity = () => {
        addActivities(props.data.id, props.type)
            .then(response => { setAddActivityResponse(response) });
    };

    useEffect(() => {
        if(addActivityResponse.success)
            props.setVisible();
    }, [addActivityResponse]);



    return (
        <div className="bg-blue-300 w-med-6 h-wrapper-card rounded-2xl p-3">
            <span className="flex items-center gap-3"> 
                <img src = {props.icon} />
                <h1 className="font-Tsukimi text-xl"> {props.data.name} </h1>
            </span>
            <ul className="list-disc ml-5 mt-2">
                <li className="font-Tsukimi"> {props.data.adventage1} </li>
                <li className="font-Tsukimi"> {props.data.adventage2} </li>
                <li className="font-Tsukimi"> {props.data.adventage3} </li>    
            </ul>
            <button className="bg-blue-400 mt-3 text-sm px-5 py-1 rounded-3xl w-1/3 ml-auto md:w-2/5" onClick={handleAddActivity}> Add {props.type} </button>            
        </div>
    )
}