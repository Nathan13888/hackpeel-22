

export default function AboutSection() {
	return (<>
		<section id="about" className="text-center">
			<div className="w-full flex flex-row h-auto py-4">
				<div className="w-1/4 h-full"></div>
				<div className="grid grid-cols-1 place-content-center grow h-full">
					<span className="text-5xl font-bold">
						Enter Tech With a <span className="text-[#06f5c2]">Bang</span>.
					</span>
					<br/>
					<p>
						<b>hack::peel</b> is a hackathon curated specifically for the students of the Peel Region.
						As a hacker, you'll learn, hone, and develop your skills in STEM in a 24-hour blitz of passion, skill, and creativity.
						<br/>
						With <b>no barrier to entry</b> and <b>no specific theme</b>, this hackathon is for all students! 
						Regardless of your prior experience, this is your chance to build, learn, and 
						show off the creations you've always dreamed of for a chance at the $20,000 prize pool!
					</p>
					<br/>
				</div>
				<div className="w-1/4 h-full"></div>
			</div>
		</section>
	</>);
}