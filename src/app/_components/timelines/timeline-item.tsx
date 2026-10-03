import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TimelineItemProps {
  icon: IconDefinition;
  title: string;
  date: string;
  repoUrl: string;
  description: string | React.ReactNode;
}

export const TimelineItem = ({ icon, title, date, repoUrl, description }: TimelineItemProps) => (
  <article className="event-row">
    <span className="event-icon" aria-hidden="true"><FontAwesomeIcon icon={icon} /></span>
    <div className="event-content">
      <time className="event-date" dateTime={new Date(`${date} UTC`).toISOString().slice(0, 10)}>{date}</time>
      <h4><a href={repoUrl} target="_blank" rel="noopener noreferrer">{title}</a></h4>
      <p className="event-description">{description}</p>
    </div>
    <span className="event-arrow" aria-hidden="true">↗</span>
  </article>
);
