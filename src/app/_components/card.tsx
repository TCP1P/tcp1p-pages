"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface CardProps {
  title: string;
  description: string;
  icon: IconDefinition;
  repoUrl: string;
  note?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  note,
  repoUrl,
}) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl border border-red-500/10 p-6 hover:border-red-400/30 transition-all duration-300">
      <div className="flex items-start md:space-x-4 space-y-4 md:space-y-0 flex-col md:flex-row">
        <div className="w-12 h-12 bg-red-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
          <FontAwesomeIcon icon={icon} className="text-red-400 text-xl" />
        </div>
        <div className="flex-1">
          <h3 className="text-white text-lg font-medium mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
              <p className="text-gray-300">
                <span className="text-red-400 text-xs">[NOTE]</span>
                <br />
                {note}
              </p>
          </div>
          <a href={repoUrl} target='_blank' className="text-red-400 cursor-pointer hover:text-red-300 transition-colors duration-300 flex items-center">
            View More
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
