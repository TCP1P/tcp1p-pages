import React from 'react';

const ExternalLink = ({ href, children }) => {
  return (
    <a href={href} target="_blank" className="mt-4 cursor-pointer">
      {children}
    </a>
  );
};

export default ExternalLink;
