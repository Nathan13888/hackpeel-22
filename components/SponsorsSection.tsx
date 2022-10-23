// Sponsor object
// name: sponsor name (string) [used for alternate text]
// img: logo (image object {})
// col: hover color (string)
// href: sponsor link (if available)
const sponsors = [
]

function Sponsor({name, img, col, href}: {name: string, img: string, col: string, href: string}) {
	const styling = {
		"--sponsor-col": col
	} as React.CSSProperties;
	return (<>
		<a className="block w-72 h-40 m-5" href={href}>
			<img alt={name} className="transition-all block sponsor max-w-full max-h-full m-auto l-0 r-0" style={styling} src={img}/>
		</a>
	</>)
}

export default function SponsorsSection() {
	const flexcls = "flex flex-wrap mx-16 pt-10 justify-around w-auto";
	return (<>
		<section id="sponsor" className="text-center m-0 w-auto">
			<h1 className="text-4xl font-bold m-5 w-auto">Sponsors</h1>
			<div className={flexcls}>
				{sponsors.map(spnsr => (<Sponsor name={spnsr.name} img={spnsr.img ? spnsr.img.src : null} col={spnsr.col} href={spnsr.href} />))}
			</div>
			<a className="m-auto l-0 r-0">
				<button className="">Become a Sponsor</button>
			</a>
		</section>
	</>)
}