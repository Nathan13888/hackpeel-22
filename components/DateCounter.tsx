import { useState, useEffect } from "react";
import useInterval from "../utilities/chooks.js";
import SpinDial from "./SpinDial"
// import Logo from "../public/images/logo.png";

const evtStart: Date = Date.parse("2022-12-16T18:00:00.0000");
export default function DateCounter() {
    const [ remaining, setRemaining ] = useState(0);
    useInterval(() => setRemaining(Math.max(evtStart - Date.now(), 0)), 100);
    const days = Math.floor( remaining / 86400000 )
    const hours = Math.floor( remaining / 3600000 ) % 24
    const minutes = Math.floor( remaining / 60000 ) % 60
    const seconds = Math.floor( remaining / 1000 ) % 60
    console.log(remaining);
    return (
        <div className="flex justify-center h-20 w-auto mx-10">
            <SpinDial num={days} digits={2} descriptor="Days" />
            <SpinDial num={hours} digits={2} descriptor="Hours" />
            <SpinDial num={minutes} digits={2} descriptor="Minutes" />
            <SpinDial num={seconds} digits={2} descriptor="Seconds" />
        </div>
    )
}