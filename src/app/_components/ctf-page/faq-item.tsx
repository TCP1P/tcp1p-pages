import React from "react";

export interface FAQItemProps {
    text: string;
    description: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ text, description }) => {
    return (
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl border border-red-500/10 p-6 hover:border-red-400/30 transition-all duration-300">
            <div className="text-xl font-medium text-white mb-4">{text}</div>
            <div className="text-gray-400">{description}</div>
        </div>
    );
};

export default FAQItem;
