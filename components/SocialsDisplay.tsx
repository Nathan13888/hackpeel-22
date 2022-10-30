import Image from "next/image";

export interface socialsEntry {
	altName: string,
	img: string,
	col: string,
	href: string
}

function SocialObject({img, col, href, alt}: {img: string, col: string, href: string, alt: string}) {
	// 3 Properties:
	// img - social image
	// col - bg col code (str)
	// href - link
	const acls = "grow mx-0.5 rounded-sm h-full w-full grid place-item-center grow";
	const imgcls = "relative m-auto h-8 w-8 border-0";
	const astyle = {
		backgroundColor: col
	}
	return (
		<a className={acls} href={href} style={astyle}>
			<div className={imgcls}>
				<Image src={img} layout="fill" alt={alt}/>
			</div>
		</a>
	)
}
export default function SocialsDisplay({socials}: {socials: socialsEntry[]}) {
	return (<>
		<div className="flex h-0 mx-2 my-0 social transition-all overflow-hidden">
			{
				socials.map(obj => (<>
					<SocialObject img={obj.img} col={obj.col} href={obj.href} alt={obj.altName} />
				</>))
			}
		</div>
	</>)
}