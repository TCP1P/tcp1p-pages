import React from "react";

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <section className="event-section">
            <h2>{title}</h2>
            {children}
        </section>
    );
};

export default Section;
