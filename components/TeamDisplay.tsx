import { useState } from "react";



export default function TeamDisplay({fn, ln, title, img, hl}: {fn: string, ln: string, title: string, hl: boolean}) {
	const firstn = fn ? fn.toUpperCase() : "UNDEFINED";
	const lastn = ln ? ln.toUpperCase() : "UNDEFINED";
	var cns = "h-auto m-5 p-5 overflow-hidden text-left rounded-md";
	var fns = "mx-2 my-0 py-0 font-bold text-xl";
	var lns = "mx-2 my-0 py-0 font-bold";
	var ts = "ml-2 w-44 whitespace-normal"
	if (hl) {
		cns += " bg-[#283678]";
		fns += " text-white";
		lns += " text-[#33ffc5]"
		ts += " text-white"

	} else {
		fns += " text-sky-800"
		lns += " text-slate-400"
	}
	return (<>
		<div className={cns}>
			<img className="w-48 h-48 rounded-md mb-2" src={img ? img : ""}/>
			<div className={fns} >{firstn}</div>
			<div className={lns}>{lastn}</div>
			<div className={ts} >{title}</div>
		</div>
	</>)
}