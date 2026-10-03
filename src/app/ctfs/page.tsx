import { TimelineItem } from "../_components/timelines/timeline-item";
import { TimelineMonth } from "../_components/timelines/timeline-month";
import { TimelineYear } from "../_components/timelines/timeline-year";
import { timelineData } from "./timeline";
import Link from "next/link";

export default function CTFs() {
  return (
    <main id="main-content" tabIndex={-1} className="site-main content-shell interior-page">
      <div className="page-heading">
        <p className="eyebrow">TCP1P / Events</p>
        <h1>CTF archive<span className="heading-period">.</span></h1>
        <p>Events and challenge repositories from TCP1P and its collaborators, newest first.</p>
      </div>
      <div className="archive-tools">
        <nav className="archive-index" aria-label="Browse CTFs by year">
          {timelineData.map(({ year }) => <a key={year} href={`#year-${year}`}>{year}</a>)}
        </nav>
        <nav className="event-page-links" aria-label="Archived event information">
          <span>Event pages</span>
          <Link href="/indonesia-ctf-2025">Indonesia CTF 2025</Link>
          <Link href="/mobile-ctf-2025">Mobile CTF 2025</Link>
        </nav>
      </div>
      <div className="archive">
        {timelineData.map((yearData) => (
          <TimelineYear key={yearData.year} year={yearData.year}>
            {[...yearData.months]
              .sort((a, b) => Date.parse(b.events[0].date) - Date.parse(a.events[0].date))
              .map((monthData) => (
                <TimelineMonth key={monthData.name} month={monthData.name}>
                  {[...monthData.events]
                    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
                    .map((event) => <TimelineItem key={event.repoUrl} {...event} />)}
                </TimelineMonth>
              ))}
          </TimelineYear>
        ))}
      </div>
    </main>
  );
}
