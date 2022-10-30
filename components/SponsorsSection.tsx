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
]

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
				<Image src={img} alt={name} layout="fill"/>
			</div>
		</a>
	</>)
}

export default function SponsorsSection() {
	const flexcls = "flex flex-wrap mx-16 pt-10 justify-around w-auto";
	return (<>
		<section id="sponsor" className="text-center mb-8 w-auto">
			<h1 className="text-4xl font-bold m-5 w-auto">Sponsors</h1>
			<div className={flexcls}>
				{sponsors.map(spnsr => (<Sponsor key={spnsr.name} entry={spnsr} />))}
			</div>
			<a className="m-auto l-0 r-0" href="">
				<button className="sponsorbtn transition-all p-4 rounded-xl bg-slate-900 text-white text-lg">Become a Sponsor</button>
			</a>
		</section>
	</>)
}