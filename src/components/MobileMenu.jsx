import React  from "react";
import '../index.css';
import dashboardPic from '../images/dashboard-pic.png';
import habitsPic from '../images/habits-pic.png';
import goalsPic from '../images/goals-pic.png';
import eventsPic from '../images/events-pic.png';
import moneyPic from '../images/money-pic.png'
import closePic from '../images/close (5).png'
import { Link } from "react-router-dom";

export default function MobileMenu(props) {
    return (
        <ul className="fixed top-0 left-0 w-screen h-screen bg-blue-300 flex flex-col justify-center items-center text-5xl z-50">
                <img src = {closePic} className="absolute w-20 top-5 right-5" onClick={props.setVisible} />
                <div>
                    <li className="flex my-5 gap-5 cursor-pointer"> <img src = {dashboardPic} className="w-9 h-9"/> Dashboard </li>
                    <Link to = '/habits'> <li className="flex my-5 gap-5 cursor-pointer"> <img src = {habitsPic} className="w-9 h-9"/> Habits </li> </Link>
                    <li className="flex my-5 gap-5 cursor-pointer"> <img src = {goalsPic} className="w-9 h-9"/> Goals </li>
                    <li className="flex my-5 gap-5 cursor-pointer"> <img src = {eventsPic} className="w-9 h-9"/> Events </li>
                    <li className="flex my-5 gap-5 cursor-pointer"> <img src = {moneyPic} className="w-9 h-9"/> Money </li>
                </div>
        </ul>
    )
}