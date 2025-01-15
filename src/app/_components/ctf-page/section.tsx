import React from "react";

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <section className="my-16 p-8">
            <h2 className="text-4xl text-white mb-10">{title}</h2>
            <div className="divider mb-10"></div>
            {children}
        </section>
    );
};

export default Section;
