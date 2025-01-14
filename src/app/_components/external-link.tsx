import React, { ReactNode } from 'react';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" className="mt-4 cursor-pointer">
      {children}
    </a>
  );
};

export default ExternalLink;
