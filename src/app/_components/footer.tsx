"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEnvelope, faFlag } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ExternalLink from './external-link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-red-500/10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-900/30 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faFlag} className="text-red-400" />
              </div>
              <span className="text-red-400 font-semibold text-lg">TCP1P</span>
            </div>
            <p className="text-gray-400 text-sm">
              TCP1P is a CTF(Capture The Flag) community from Indonesia. Our mission is to bring together CTF
              players from all corners of Nusantara, so we can play and learn CTF together.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <ExternalLink href='https://playground.tcp1p.team/'>Playground</ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://github.com/TCP1P/">Resources</ExternalLink>
              </li>
              {/* <li><ExternalLink href="https://dimasma0305.github.io/Cyber-Security-Learning-Resources/">Blog</ExternalLink></li> */}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <ExternalLink href="https://discord.gg/Gj6h9TjN3D">Discord</ExternalLink>
              </li>
              {/* <li><ExternalLink href="https://www.facebook.com/groups/531741829733995/">Facebook</ExternalLink></li> */}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <ExternalLink href="https://github.com/TCP1P" className="w-8 h-8 bg-red-900/30 rounded-lg flex items-center justify-center hover:bg-red-900/50 transition-colors">
                <FontAwesomeIcon icon={faGithub} className="text-red-400" />
              </ExternalLink>
              <ExternalLink href="mailto:tcp1pindo@gmail.com" className="w-8 h-8 bg-red-900/30 rounded-lg flex items-center justify-center hover:bg-red-900/50 transition-colors">
                <FontAwesomeIcon icon={faEnvelope} className="text-red-400" />
              </ExternalLink>
              <ExternalLink href="https://ctftime.org/team/187248" className="w-8 h-8 bg-red-900/30 rounded-lg flex items-center justify-center hover:bg-red-900/50 transition-colors">
                <FontAwesomeIcon icon={faFlag} className="text-red-400" />
              </ExternalLink>
              <ExternalLink href="https://www.linkedin.com/company/tcp1p/" className="w-8 h-8 bg-red-900/30 rounded-lg flex items-center justify-center hover:bg-red-900/50 transition-colors">
                <FontAwesomeIcon icon={faLinkedin} className="text-red-400" />
              </ExternalLink>
            </div>
          </div>
        </div>

        <div className="border-t border-red-500/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; 2024 TCP1P. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
