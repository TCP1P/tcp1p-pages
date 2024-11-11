"use client";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

interface TimelineItemProps {
    icon: IconDefinition;
    title: string;
    date: string;
    repoUrl: string;
    description: string | React.ReactNode;
}

export const TimelineItem = ({ icon, title, date, repoUrl, description }: TimelineItemProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Return a loading state or empty div while client-side rendering isn't ready
    if (!isMounted) {
        return (
            <div className="bg-gray-800/50 backdrop-blur p-4 rounded-lg border border-red-500/10">
                <div className="animate-pulse">
                    <div className="h-6 bg-gray-700 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-700 rounded w-full mt-2"></div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-gray-800/50 backdrop-blur p-4 rounded-lg border border-red-500/10 hover:border-red-400/30 transition-colors duration-300">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={icon} className="text-red-400 mr-2" />
                        <div className="md:justify-evenly w-full flex flex-col md:flex-row-reverse">
                            <span className="text-xs text-red-300">{date}</span>
                            <span className="font-medium text-white flex-1">{title}</span>
                        </div>
                    </div>
                    <div className="text-sm text-gray-400 mt-2">{description}</div>
                </div>
            </a>
        </div>
    );
};

export default TimelineItem;
