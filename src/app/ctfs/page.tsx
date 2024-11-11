
import { TimelineItem } from '../_components/timelines/timeline-item';
import { TimelineMonth } from '../_components/timelines/timeline-month';
import { TimelineYear } from '../_components/timelines/timeline-year';
import { timelineData } from './timeline';

const CTFs = () => {
    return (
        <main className="flex-1 pt-24 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto pb-12">
                {timelineData.map((yearData) => (
                    <TimelineYear key={yearData.year} year={yearData.year}>
                        {yearData.months.map((monthData) => (
                            <TimelineMonth
                                key={monthData.name}
                                month={monthData.name}
                                progress={monthData.progress}
                            >
                                {monthData.events.map((event, index) => (
                                    <TimelineItem
                                        key={index}
                                        icon={event.icon}
                                        title={event.title}
                                        date={event.date}
                                        repoUrl={event.repoUrl}
                                        description={event.description}
                                    />
                                ))}
                            </TimelineMonth>
                        ))}
                    </TimelineYear>
                ))}
            </div>
        </main>
    );
};

export default CTFs;
