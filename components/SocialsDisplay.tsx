import { useState } from "react";

function SocialObject({img, col, href}: {img: string, col: string, href: string}) {
	// 3 Properties:
	// img - social image
	// col - bg col code (str)
	// href - link
	const acls = "grow mx-0.5 rounded-sm h-full w-full grid place-item-center grow";
	const imgcls = "m-auto h-8 w-8 border-0";
	const astyle = {
		backgroundColor: col
	}
	return (
		<a className={acls} href={href} style={astyle}>
			<img className={imgcls} src={img}/>
		</a>
	)
}
export default function SocialsDisplay({socials}: {socials: any[]}) {
	return (<>
		<div className="flex h-0 mx-2 my-0 social transition-all overflow-hidden">
			{
				socials.map(obj => (<>
					<SocialObject img={obj.img.src} col={obj.col} href={obj.href} />
				</>))
			}
		</div>
	</>)
}