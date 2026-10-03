interface TimelineMonthProps {
  month: string;
  children: React.ReactNode;
}

export const TimelineMonth = ({ month, children }: TimelineMonthProps) => (
  <div className="archive-month">
    <h3>{month}</h3>
    <div className="archive-events">{children}</div>
  </div>
);
