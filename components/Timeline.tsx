import { useRef, MutableRefObject, useState } from "react"
import { useScroll } from "../util/chooks"

interface TimelineEvent {
    start: number, // Date.parse return value
    end: number, // Date.parse return value
    colour: string,
    level: number,
    title: string,
    description: string
}

const evtStart: number = Date.parse("2022-12-16T18:00:00.0000");
const evtEnd: number = Date.parse("2022-12-17T18:00:00.0000");
const evtLen: number = evtEnd - evtStart;

function mapDate(num: number, low: number, high: number) {
    return (num - evtStart) / (evtLen) * (high - low) + low
}

function TimelineEventBar({event, highlight = false} : {event: TimelineEvent, highlight?: boolean}) {
    const barstyle = {
        bottom: `${event.level + 1}rem`,
        left: `${mapDate(event.start, 0, 400) + 50}vw`,
        width: `${mapDate(event.end, 0, 400) - mapDate(event.start, 0, 400)}vw`,
        backgroundColor: event.colour,
        filter: highlight ? "brightness(150%)" : "none"
    }
    return (<>
        <div className="absolute h-4 transition-all" style={barstyle}></div>
    </>)
}

function EventDisplay({event}: {event: TimelineEvent}) {
    const startDate: Date = new Date(event.start);
    const endDate: Date = new Date(event.end);
    return (
        <div className="text-center w-1/3">
            <span className="text-xl font-bold" style={{color: event.colour}}>{event.title}</span>
            <br/>
            <span className="text-md font-bold text-gray-400" style={{}}>
                {startDate.getMonth()}/{startDate.getDay()} {startDate.getHours()}:{startDate.getMinutes().toString().padStart(2, '0')} - {endDate.getMonth()}/{endDate.getDay()} {endDate.getHours()}:{endDate.getMinutes().toString().padStart(2, '0')} EST
            </span>
            <br/>
            {event.description}
        </div>
    )
}

const events: TimelineEvent[] = [
    {
        start: Date.parse("2022-12-16T19:00:00.0000"),
        end: Date.parse("2022-12-17T01:00:00.0000"),
        colour: "red",
        level: 1,
        title: "New Event",
        description: "This is an event."
    }
];
export default function Timeline() {
    const timeline: MutableRefObject<HTMLDivElement> = useRef(null);
    const [eventObj, setEventObj] = useState([]);


    useScroll(timeline, () => {
        if (!timeline.current) return;
        let intersect = [];
        for (let i = 0; i < events.length; i++) {
            let time = timeline.current.scrollLeft / window.innerWidth / 4 * evtLen + evtStart;
            if (time > events[i].start && time < events[i].end) intersect.push(events[i])
        }
        setEventObj(intersect);
    })
    return (<>
        <div className="l-0 r-0 w-auto m-0">
            <div className="relative h-24 w-full m-0 bg-slate-100 text-white">
                <div className="relative h-full w-full m-0 bg-slate-100 overflow-x-scroll" ref={timeline}>
                    <div className="absolute bottom-0 l-0 h-8 bg-black" style={{width: "450vw", left: "50vw"}}>Event Time</div> 
                    <div className="absolute bottom-0 l-0 h-8 bg-gray-400" style={{width: "50vw"}}></div>
                    <div className="absolute bottom-0 l-0 h-8 bg-gray-400" style={{width: "50vw"}}></div>
                    { events.map(evt => <TimelineEventBar event={evt} highlight={eventObj.indexOf(evt) >= 0}/>)}
                </div>
                <div className="absolute top-0 l-1/2 h-8 w-1 bg-black" style={{left: "50vw"}}></div>
            </div>
            <div className="w-full h-24 m-0 text-center flex flex-row justify-center">
                {
                    eventObj.map(obj => <>
                        <EventDisplay event={obj} />
                    </>)
                }
            </div>

        </div>
    </>)
}