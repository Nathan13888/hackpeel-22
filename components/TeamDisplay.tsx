import SocialObject from "./SocialsDisplay";
import Image from "next/image";

export default function TeamDisplay({fn, ln, title, img, hl, scls}: {fn: string, ln: string, title: string, hl: boolean, scls: any, img: string, }) {

	const firstn = fn ? fn.toUpperCase() : "UNDEFINED";
	const lastn = ln ? ln.toUpperCase() : "UNDEFINED";
	var cns = "p-5 overflow-hidden text-left rounded-md team-card transition-all";
	var fns = "mx-2 my-0 py-0 font-bold text-xl";
	var lns = "mx-2 mb-0 py-0 font-bold";
	var ts = "ml-2 w-44 whitespace-normal h-20 transition-all overflow-hidden"
	if (scls) ts += " desc"
	if (hl) {
		cns += " bg-[#283678]";
		fns += " text-white";
		lns += " text-[#33ffc5]"
		ts += " text-white"

	} else {
		cns += " bg-slate-100"
		fns += " text-sky-800"
		lns += " text-slate-400"
	}

	return (<>
		<div className={cns}>
			<div className="relative w-48 h-48 rounded-md mb-2">
				<Image src={img} layout="fill" alt={fn + " " + ln}/>
			</div>
			<div className={fns} >{firstn}</div>
			<div className={lns}>{lastn}</div>
			<div className={ts} >{title}</div>
			{
				scls ? <SocialObject socials={scls}/> : (<></>)
			}
		</div>
	</>)
}