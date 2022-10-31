import { useState, useEffect } from "react";
import useInterval from "../util/chooks.js";
// import Logo from "../public/images/logo.png";
import { v4 } from "uuid"

const digits: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function strmap(str, cb) {
  return Array.prototype.map.call(str, cb);
}
function RollingNumber({ num }: { num: number }) {
  return (
    <div
      className="relative left-0 transition ease-in-out duration-500"
      style={{ transform: `translateY(${-5 * num}em)` }}
    >
      {digits.map((num) => (
        <div key={Number(`${Math.floor(Math.random() * 1000)}${num}`)} className="h-20 w-16 flex justify-center items-center font-bold text-5xl">
          {num}
        </div>
      ))}
    </div>
  );
}
export default function SpinDial({
  num,
  digits,
  descriptor,
}: {
  num: number;
  digits: number;
  descriptor: string;
}) {
  const strnum: string = String(num);
  const display: string = strnum.padStart(digits, "0");

  let displays: any[] = [];

  for (let i = 0; i < display.length; i++) {
    displays.push(
      <div key={descriptor + String(i)} className="float-left h-20 w-16 bg-gradient-to-b from-slate-200 via-transparent to-slate-200 place-content-center text-center overflow-hidden">
        <RollingNumber num={Number(display[i])} />
      </div>
    )
  }
  return (
    <div className="mx-2 flex flex-col">
      <div className="flex">
        {displays}
      </div>
      <p className="text-xl text-center">{descriptor}</p>
    </div>
  );
}
