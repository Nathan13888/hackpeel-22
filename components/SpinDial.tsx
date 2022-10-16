import { useState, useEffect } from "react";
import useInterval from "../utilities/chooks.js";
// import Logo from "../public/images/logo.png";

const digits: Array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function strmap(str, cb) { return Array.prototype.map.call(str, cb); }
function RollingNumber({num}: {num: int}) {
    return (<>
        <div className="relative left-0 transition ease-in-out duration-500" style={{transform: `translateY(${-5 * num}em)`}}>
            {
                digits.map(num => (<>
                    <div className="h-20 w-16 flex justify-center items-center font-bold text-5xl">
                        {num}
                    </div>
                </>))
            }
        </div>
    </>)
}
export default function SpinDial({num, digits, descriptor}: {num: int, digits: int, descriptor: string}) {
    let strnum = String(num);
    const display: string = strnum.padStart(digits, "0");

    return (<div className="mx-2">
        {
            strmap(display, digit => (
                <div className="float-left h-20 w-16 bg-slate-200 place-content-center text-center overflow-hidden">
                    <RollingNumber num={Number(digit)} />
                </div>
            ))
        }
        </div>
    )
}