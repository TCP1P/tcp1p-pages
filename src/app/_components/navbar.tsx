"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../public/TCP1P _Main White Red.svg'
import Button from './button';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/ctfs", text: "CTF's" },
    { href: "/repositories", text: "Repositories" },
    { href: "/indonesia-ctf-2025", text: "INDONESIA CTF 2025" },
    { href: "/mobile-ctf-2025", text: "Mobile CTF 2025" },
  ];

  const buttonProps = {
    text: 'Join Playground',
    href: 'https://playground.tcp1p.team/',
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-lg border-b border-red-500/10 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <Image src={logo} alt={"TCP1P Logo"} width={120}></Image>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center space-x-8">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="nav-item text-gray-300 hover:text-red-400 transition-colors duration-300">
                {link.text}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button text={buttonProps.text} href={buttonProps.href} target='_blank'></Button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-button p-2 rounded-md text-red-300 hover:bg-red-900/30"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>

        <div className={`mobile-menu md:hidden px-4 pb-4 ${isMobileMenuOpen ? '' : 'hidden'}`}>
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} className="block px-4 py-2 text-gray-300 hover:text-red-400 transition-colors duration-300">
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
