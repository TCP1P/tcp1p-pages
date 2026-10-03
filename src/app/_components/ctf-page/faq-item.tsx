import React from "react";

export interface FAQItemProps {
    text: string;
    description: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ text, description }) => {
    return (
        <div className="event-faq">
            <h3>{text}</h3>
            <div>{description}</div>
        </div>
    );
};

export default FAQItem;
