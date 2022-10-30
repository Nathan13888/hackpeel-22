import { useState } from "react";
import TeamDisplay from "./TeamDisplay";

const styleTrapezoid: React.CSSProperties = {
	"clipPath" : "polygon(21% 0, 79% 0, 100% 100%, 0 100%)"
};

// Structure:
/*
 entry - {
	first: first name (string),
	last: last name (string),
	img: profile photo (image object {} or object with "src" property),
	title: title (string),
	highlight: whether or not to apply executive colour schemes to this person (bool),
	socials: [
		entry - {
			img: social icon (image object or {} or object with "src" property),
			col: background color (string or hex),
			href: social link (string)
		}
	]

 }
*/
interface socialsEntry {
	img: string,
	col: string,
	href: string
}

interface staffEntry {
	first: string,
	last: string,
	img?: string,
	title: string,
	highlight?: boolean,
	socials?: socialsEntry[]
}

const staff: staffEntry[] = [
	{
		first: "Pranav",
		last: "Tripathi",
		title: "Co-president and Head of Finance",
		highlight: true
	},
	{
		first: "Aayush",
		last: "Panda",
		title: "Co-president and Head of Technology",
		highlight: true
	},
	{
		first: "Vishnu",
		last: "Satish",
		title: "Co-president and Head of Sponsorships and Outreach",
		highlight: true
	},

	{
		first: "Catherine",
		last: "Zhang",
		title: "Head of Marketing and Design",
		highlight: true
	},
	{
		first: "Marcus",
		last: "Chong",
		title: "Head of Logistics",
		highlight: true
	},
	{
		first: "Ike",
		last: "Yang",
		title: "Frontend Developer and Designer",
	},
	{
		first: "Aritro",
		last: "Saha",
		title: "Backend/Frontend Developer"
	},
	{
		first: "Yibo",
		last: "Sun",
		title: "Marketing Designer"
	}
	,
	{
		first: "E.J.",
		last: "Ramas",
		title: "Logistics Staff"
	},
	{
		first: "Grant",
		last: "Ren",
		title: "Logistics Staff"
	},
	{
		first: "Khalil",
		last: "Ramzi",
		title: "Logistics Staff"
	},
	{
		first: "Ashley",
		last: "",
		title: "Logistics Staff"
	},
	{
		first: "Aarav",
		last: "Modi",
		title: "Sponsorships and Outreach Staff"
	},
	{
		first: "Chinmayi",
		last: "Gannamaraju",
		title: "Sponsorships and Outreach Staff"
	},
	{
		first: "Jacob",
		last: "Park",
		title: "Sponsorships and Outreach Staff"
	},
	{
		first: "Rohith",
		last: "Rajmohan",
		title: "Marketing and Design Staff"
	}
]

function SectionDisp({arr}: {arr: staffEntry[]}) {
	return <>{arr.map(member => <TeamDisplay fn={member.first} ln={member.last} img={member.img ? member.img : null} title={member.title} hl={member.highlight} scls={member.socials} key={member.first} />)}</>;
}

export default function TeamSection() {
	const flexcls: string = "flex flex-wrap mx-16 pt-10 gap-10 justify-around w-auto";
	return (<>
		<section id="team" className="text-center m-0 w-auto">
			<div className="m-0 p-0 l-0 r-0 bg-slate-100">
				<div className="w-1/2 p-2 text-xl font-bold m-auto bg-gray-200" style={styleTrapezoid}>‎</div>
			</div>
			<div className="w-screen bg-gray-200">
				<h1 className="text-4xl font-bold mx-0 py-4 w-auto"> Meet the team! </h1>
				<h3 className="text-gray-500 italic">A lot of people's hard work went into this event. Check them out!</h3> 
				<div className={flexcls}>
					<SectionDisp arr={staff} />
				</div>
				<br/>
				<div className="w-1/2 p-2  text-xl font-bold m-auto bg-white" style={styleTrapezoid}>‎</div>
			</div>
		</section>
	</>)
}