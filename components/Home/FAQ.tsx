import React from 'react'
import Accordion from "../Accordion"

export interface FrequentlyAskedQuestion {
    title: string,
    content: string
};

const faq: FrequentlyAskedQuestion[] = [
    {
        title: "How many columns are there for frequently asked questions?",
        content: "Two, one on smaller screen widths. You can test this by resizing the window."
    },
    {
        title: "What is a hackathon?",
        content: "An event where participants, or \"Hackers\" work on and try to create products using technology. Usually hackathons require you to create these products to solve a particular problem or according to a specific theme; however, you can create whatever you want, however you want in this one. Anything could have a shot at winning; last year some of the winners included an AI Cataloguing tool, a vector art tool made in GameMaker Studio, and Tetris in VR! So go wild, young grasshoppers, and be free!"
    },
    {
        title: "What happens if there are an odd number of Q/A pairs?",
        content: "It gets cut off at the halfway mark for consistency with word wrapping, like this."
    }
]

export default function FAQ({ faq: faqRaw }) {
    // Reformat to work with Accordion
    // const faq: FrequentlyAskedQuestion[] = faqRaw.map(({ question, answer }) => ({ title: question, content: answer }))

    return (
        <section className="flex flex-col p-10 items-center md:p-20 md:py-16 lg:px-32 items-left bg-[#013d30]" id="FAQ">
            <div className="flex flex-col text-center mb-8">
                <h1 className="text-4xl text-white font-bold">Frequently Asked Questions</h1>
            </div>

            <div className='flex flex-col lg:flex-row lg:gap-x-4 bg-black/20 p-6 lg:px-8'>
                <div className='flex flex-col gap-x-4 rounded-xl lg:w-3/4'>
                    {faq.slice(0, faq.length / 2).map((data, idx) =>
                        <React.Fragment key={idx}>
                            <Accordion {...data} />
                        </React.Fragment>
                    )}
                </div>

                <div className='flex flex-col gap-x-4 rounded-xl lg:w-3/4'>
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