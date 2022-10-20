import { useState } from "react";
import TeamDisplay from "./TeamDisplay";
import bungus from "../assets/icon.png";

const styleTrapezoid = {clipPath: "polygon(21% 0, 79% 0, 100% 100%, 0 100%)"};

const staff = {
	finance: [
		{
			first: "Pranav",
			last: "Tripathi",
			img: null,
			title: "Co-president and Head of Finance",
			highlight: true
		}
	],
	technology: [
		{
			first: "Aayush",
			last: "Panda",
			img: null,
			title: "Co-president and Head of Technology",
			highlight: true
		},
		{
			first: "Ike",
			last: "Yang",
			img: null,
			title: "Frontend Developer and Designer"
		},
		{
			first: "Aritro",
			last: "Saha",
			img: null,
			title: "Backend/Frontend Developer"
		}
	],
	marketing: [
		{
			first: "Catherine",
			last: "Zhang",
			img: null,
			title: "Head of Marketing and Design",
			highlight: true
		},
		{
			first: "Yibo",
			last: "S",
			img: null,
			title: "Marketing Designer"
		}
	],
	logistics: [
		{
			first: "Marcus",
			last: "Chong",
			img: null,
			title: "Head of Logistics",
			highlight: true
		},
		{
			first: "E.J.",
			last: "Ramas",
			img: null,
			title: "Logistics Staff"
		},
		{
			first: "Grant",
			last: "Ren",
			img: null,
			title: "Logistics Staff"
		},
		{
			first: "Khalil",
			last: "R",
			img: null,
			title: "Logistics Staff"
		},
		{
			first: "Ramen",
			last: "XB",
			img: null,
			title: "Logistics Staff"
		}
	],
	outreach: [
		{
			first: "Vishnu",
			last: "Satish",
			img: null,
			title: "Co-lead Organizer and Head of Outreach",
			highlight: true
		},
		{
			first: "Aarav",
			last: "M"
		},
		{
			first: "Chinmayi",
			last: "A"
		},
		{
			first: "Jacob",
			last: "Park"
		}
	]
}

function SectionDisp({arr}: {arr: Array}) {
	return arr.map(member => <TeamDisplay fn={member.first} ln={member.last} img={member.image} title={member.title} hl={member.highlight}/>);
}

export default function TeamSection() {
	const flexcls = "flex flex-col md:flex-row mx-0 w-auto justify-center items-center md:items-start"
	return (<>
		<section id="team" className="text-center m-0 w-auto">
			<h1 className="text-4xl font-bold m-5 w-auto"> Meet the teams! </h1>
			<div className="w-1/2 p-2 text-xl font-bold m-auto bg-gray-100" style={styleTrapezoid}>Finance</div>
			<div className="w-screen bg-gray-100">
				<div className={flexcls}>
					<SectionDisp arr={staff.finance} />
				</div>
				<div className="w-1/2 p-2 text-xl font-bold m-auto bg-blue-100" style={styleTrapezoid}>Logistics</div>
			</div>
			<div className="w-screen bg-blue-100">
				<div className={flexcls}>
					<SectionDisp arr={staff.logistics.slice(0,3)} />
				</div>
				<div className={flexcls}>
					<SectionDisp arr={staff.logistics.slice(3)} />
				</div>
				<div className="w-1/2 p-2 text-xl font-bold m-auto bg-gray-100" style={styleTrapezoid}>Marketing</div>
			</div>
			<div className="w-screen bg-gray-100">
				<div className={flexcls}>
					<SectionDisp arr={staff.marketing} />
				</div>
				<div className="w-1/2 p-2 text-xl font-bold m-auto bg-blue-100" style={styleTrapezoid}>Technology</div>
			</div>
			<div className="w-screen bg-blue-100">
				<div className={flexcls}>
					<SectionDisp arr={staff.technology} />
				</div>
				<div className="w-1/2 p-2 text-xl font-bold m-auto bg-gray-100" style={styleTrapezoid}>Outreach</div>
			</div>
			<div className="w-screen bg-gray-100">
				<div className={flexcls}>
					<SectionDisp arr={staff.outreach.slice(0,3)} />
				</div>
				<div className={flexcls}>
					<SectionDisp arr={staff.outreach.slice(3)} />
				</div>
			</div>
		</section>
	</>)
}