import { useState } from "react";
import Image from "next/image";

interface FAQEntry {
	q: any,
	a: any
}
const faq: FAQEntry[] = [
	{
		q: "How many columns are there for frequently asked questions?",
		a: "Two, one on smaller screen widths. You can test this by resizing the window."
	},
	{
		q: "What is a hackathon?",
		a: "An event where participants, or \"Hackers\" work on and try to create products using technology. Usually hackathons require you to create these products to solve a particular problem or according to a specific theme; however, you can create whatever you want, however you want in this one. Anything could have a shot at winning; last year some of the winners included an AI Cataloguing tool, a vector art tool made in GameMaker Studio, and Tetris in VR! So go wild, young grasshoppers, and be free!"
	},
	{
		q: "What happens if there are an odd number of Q/A pairs?",
		a: "It gets cut off at the halfway mark for consistency with word wrapping, like this."
	}
]

function FAQEntry({entry}: {entry: FAQEntry}) {
	const [open, setOpen] = useState(false);
	let desc = "w-full whitespace-normal overflow-hidden transition-all answer text-left";
	return (<>
		<div className="h-auto w-full border-2 border-black p-2 rounded-md answer-box bg-white" style={{"minHeight": 0}}>
			<div className="w-full cursor-pointer text-lg font-bold flex flex-row justify-between" onClick={() => {setOpen(!open);}}>
				<div className="text-left">{entry.q}</div>
				<div className="w-4 t-0 b-0 my-auto">{open ? "-" : "+"}</div>
			</div>
			{ open ? (
				<div className={desc}>
					{entry.a}
				</div>
			): null }
		</div>
	</>)
}

export default function FAQSection() {
	let entries: any[] = [];
	for (let i = 0; i < faq.length; i++) {
		entries.push(
			<FAQEntry key={"q"+String(i)} entry={faq[i]} />
		)
	}
	return (<>
		<section id="faq" className="bg-slate-100 text-center">
			<h1 className="text-3xl font-bold m-5">
				Frequently asked Questions
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-1 l-0 r-0 w-auto px-24 py-4">
				{ entries }
			</div>
		</section>
	</>);
}