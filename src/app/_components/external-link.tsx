import React, { ReactNode } from 'react';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  mode?: 'red' | 'grey';
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, className, mode = 'grey' }) => {
  const baseClass = "text-sm transition-colors duration-300";
  const modeClass = mode === 'red' ? 'text-red-400 hover:text-red-300' : 'text-gray-400 hover:text-gray-300';

  return (
    <a href={href} target="_blank" className={`${baseClass} ${modeClass} ${className}`}>
      {children}
    </a>
  );
};

export default ExternalLink;
