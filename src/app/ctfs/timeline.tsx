import React from "react"

export interface TimelineProps {
    title: string,
    repoUrl: string,
    date: Date,
    children?: React.ReactNode | undefined,
    n?: number,
}

export function Timeline({ title, repoUrl, children, date, n }: TimelineProps) {
    const isStart = (n || 0) % 2 == 1
    const classStart = 'timeline-start md:text-end mb-10'
    const classEnd = 'timeline-end md:text-start mb-10'
    const classUsed = isStart ? classStart : classEnd

    return <>
        <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
        </div>
        <div className={classUsed}>
            <time className="font-mono italic">{date.toDateString()}</time>
            <div className="text-lg font-black"><a className="link" target="_blank" href={repoUrl}>{title}</a></div>
            <p>{children}</p>
        </div>
        <hr />
    </>
}

export interface TimelinesProps {
    timelines: TimelineProps[]
}

export function Timelines({ timelines }: TimelinesProps) {
    var n = 0
    return <>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {timelines.map((t) => {
                n += 1
                return <>
                    <li key={n}>
                        <Timeline title={t.title} repoUrl={t.repoUrl} n={n} date={t.date}>
                            {t.children}
                        </Timeline>
                    </li>
                </>
            })}
        </ul>
    </>
}
