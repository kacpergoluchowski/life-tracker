import React  from "react";
import '../index.css';
import dashboardPic from '../images/dashboard-pic.png';
import habitsPic from '../images/habits-pic.png';
import goalsPic from '../images/goals-pic.png';
import eventsPic from '../images/events-pic.png';
import moneyPic from '../images/money-pic.png'
import emailPic from '../images/email-pic.png';
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <ul className="text-3xl pl-12 box-border my-5 w-1/5 font-Tsukimi flex flex-col justify-between md:hidden">
                <div>
                    <li className="flex my-5 gap-5 cursor-pointer"> <img src = {dashboardPic} className="w-9 h-9"/> Dashboard </li>
                    <Link to = '/habits'> <li className="flex my-5 gap-5 cursor-pointer"> <img src = {habitsPic} className="w-9 h-9"/> Habits </li> </Link>
                    <li className="flex my-5 gap-5 cursor-pointer"> <img src = {goalsPic} className="w-9 h-9"/> Goals </li>
                    <li className="flex my-5 gap-5 cursor-pointer"> <img src = {eventsPic} className="w-9 h-9"/> Events </li>
                    <li className="flex my-5 gap-5 cursor-pointer"> <img src = {moneyPic} className="w-9 h-9"/> Money </li>
                </div>
            <button className="bg-blue-400 w-5/6 rounded-3xl p-2 flex justify-center items-center gap-4"> <img src = {emailPic} className="w-1/5"/> NEWS </button>          
        </ul>
    )
}