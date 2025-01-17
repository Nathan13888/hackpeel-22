import React, { CSSProperties } from 'react'
import Accordion from "../Accordion"

const linkstyle: CSSProperties = {
    color: "turquoise",
    fontWeight: "bold"
} as CSSProperties;
export interface FrequentlyAskedQuestion {
    title: string,
    content: any
};

const faq: FrequentlyAskedQuestion[] = [
    {
        title: "What's a hackathon?",
        content: "Hackathons are 'development marathons', where people collaborate intensively over a short period of time to create a working project."
    },
    {
        title: "Are there any requirements to attend?",
        content: "Nope! Anyone can join this hackathon."
    },
    {
        title: "When is the hackathon?",
        content: (<>The hackathon is planned to run from Dec 16 - Dec 17. Check the <a href="#timetable" style={linkstyle}>timetable</a> for more information.</>)
    },
    {
        title: "Is the hackathon running overnight?",
        content: (<>No, participants will go home after Day 1 and come back to the venue on Day 2. Check the <a href="#timetable" style={linkstyle}>timetable</a> for more information.</>)
    },
    {
        title: "Who can attend?",
        content: "Any student enrolled in a Peel region high-school can attend this hackathon.",
    },
    {
        title: "Are there any prizes for winners?",
        content: "With the help of our sponsors, we will be providing monetary as well as software and API prizes to the chosen winners."
    },
    {
        title: "Who owns my project?",
        content: (<>You and your team own anything you create. Why not make it open source, on <a href="https://github.com/" style={linkstyle}>Github</a>?</>)
    },
    {
        title: "Can I start work before the hackathon begins?",
        content: "While you can explore ideas, you are not allowed to write code or begin working on the project before the hacking period of the hackathon starts."
    },
    {
        title: "Is there a theme for the hackathon?",
        content: (<>To allow for as much creative liberty, there is no required project theme. However, specific theme restrictions apply for sponsor prize eligibility. Check the <a href="" style={linkstyle}>Devpost</a> for more info.</>)
    }

]

export default function FAQ({ faq: faqRaw }) {
    // Reformat to work with Accordion
    // const faq: FrequentlyAskedQuestion[] = faqRaw.map(({ question, answer }) => ({ title: question, content: answer }))

    return (
        <section className="flex flex-col p-10 items-center md:p-20 md:py-16 lg:px-32 items-left" id="faq" style={{backgroundColor: "#232f69"}}>
            <div className="flex flex-col text-center mb-8">
                <h1 className="text-4xl text-white font-bold">Frequently Asked Questions</h1>
            </div>

            <div className='flex flex-col lg:flex-row lg:gap-x-4 bg-black/20 p-6 lg:px-8' style={{backgroundColor: "#232f69"}}>
                <div className='flex flex-col gap-x-4 rounded-xl lg:w-3/4'>
                    {faq.slice(0, faq.length / 2).map((data, idx) =>
                        <React.Fragment key={idx}>
                            <Accordion {...data} />
                        </React.Fragment>
                    )}
                </div>

                <div className='flex flex-col gap-x-4 rounded-xl lg:w-3/4' style={{backgroundColor: "#232f69"}}>
                    {faq.slice(faq.length / 2).map((data, idx) =>
                        <React.Fragment key={idx}>
                            <Accordion {...data} />
                        </React.Fragment>
                    )}
                </div>
            </div>

        </section>
    )
}