import Image from "next/image"



// Sponsor object
// name: sponsor name (string) [used for alternate text]
// img: logo path
// col: hover color (string)
// href: sponsor link (if available)
interface sponsorEntry {
	name: string,
	img: any,
	col: string,
	href: string
}
const sponsors: sponsorEntry[] = [
	{
		name: "CGI",
		img: "../sponsor_logos/CGI.png",
		col: "#e35c22",
		href: "https://cgi.com/"
	},
	{
		name: "Wolfram",
		img: "../sponsor_logos/Wolfram.png",
		col: "#e35c22",
		href: "https://www.wolfram.com/"
	},
	{
		name: "Desmos",
		img: "../sponsor_logos/Desmos.png",
		col: "#e35c22",
		href: "https://www.desmos.com/"
	},
	{
		name: "taskade",
		img: "../sponsor_logos/taskade.png",
		col: "#e35c22",
		href: "https://www.taskade.com/"
	},
	{
		name: "axure",
		img: "../sponsor_logos/axure.png",
		col: "#e35c22",
		href: "https://www.axure.com/"
	},
	{
		name: "sashido",
		img: "../sponsor_logos/sashido.png",
		col: "#e35c22",
		href: "https://www.sashido.io/"
	},
	{
		name: "InterviewCake",
		img: "../sponsor_logos/InterviewCake.png",
		col: "#e35c22",
		href: "https://www.interviewcake.com/"
	},
	{
		name: "echo3d",
		img: "../sponsor_logos/echo3d.png",
		col: "#e35c22",
		href: "https://www.echo3d.com/"
	},

];

function Sponsor({entry}: {entry: sponsorEntry}) {
	const name: string = entry.name;
	const img: any = entry.img;
	const col: string = entry.col;
	const href: string = entry.href;

	const styling: React.CSSProperties = {
		"--sponsor-col": col
	} as React.CSSProperties;
	return (<>
		<a className="block w-72 h-40 m-5" href={href}>
			<div className="transition-all block sponsor max-w-full max-h-full m-auto l-0 r-0 object-contain relative">
			{
				img ? <Image src={img} layout="fill" alt={name}/> : null
			}
			</div>
		</a>
	</>)
}

export default function SponsorsSection() {
	const flexcls = "flex flex-wrap mx-16 pt-10 justify-around w-auto";
	return (<>
		<section id="sponsors" className="text-center w-auto p-10" style={{backgroundColor: "#232f69"}}>
			<h1 className="text-4xl text-white font-bold m-5 w-auto">Sponsors</h1>
			<div className={flexcls}>
				{sponsors.map(spnsr => (<Sponsor key={spnsr.name} entry={spnsr} />))}
			</div>
			<a className="m-auto l-0 r-0" href="/hackpeel_sponsor_package.pdf" target="_blank">
				<button className="transition-all p-4 rounded-xl bg-blue-700 text-white text-lg hover:text-blue-700 active:bg-blue-500 active:text-white hover:bg-white">Become a Sponsor</button>
			</a>
		</section>
	</>)
}