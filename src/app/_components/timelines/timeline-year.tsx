interface TimelineYearProps {
  year: string;
  children: React.ReactNode;
}

export const TimelineYear = ({ year, children }: TimelineYearProps) => (
  <section className="archive-year" aria-labelledby={`year-${year}`}>
    <h2 id={`year-${year}`}>{year}</h2>
    <div className="archive-year-content">{children}</div>
  </section>
);
