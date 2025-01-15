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
            <Link href="/" className="nav-item text-gray-300 hover:text-red-400 transition-colors duration-300">
              Home
            </Link>
            <Link href="/ctfs" className="nav-item text-gray-300 hover:text-red-400 transition-colors duration-300">
              CTF&apos;s
            </Link>
            <Link href="/repositories" className="nav-item text-gray-300 hover:text-red-400 transition-colors duration-300">
              Repositories
            </Link>
            <Link href="/indonesia-ctf-2025" className="nav-item text-gray-300 hover:text-red-400 transition-colors duration-300">
              INDONESIA CTF 2025
            </Link>
            <Link href="/mobile-ctf-2025" className="nav-item text-gray-300 hover:text-red-400 transition-colors duration-300">
              Mobile CTF 2025
            </Link>
          </div>

          <div className="hidden md:block">
            <Button text='Join Playground' href='https://playground.tcp1p.team/' target='_blank'></Button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            {/* <button className="px-4 py-1.5 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm rounded-full font-medium hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-500/30">
              Get Started
            </button> */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-button p-2 rounded-md text-red-300 hover:bg-red-900/30"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>

        <div className={`mobile-menu md:hidden px-4 pb-4 ${isMobileMenuOpen ? '' : 'hidden'}`}>
          <Link href="/" className="block px-4 py-2 text-gray-300 hover:text-red-400 transition-colors duration-300">
            Home
          </Link>
          <Link href="/ctfs" className="block px-4 py-2 text-gray-300 hover:text-red-400 transition-colors duration-300">
            CTF&apos;s
          </Link>
          <Link href="/repositories" className="block px-4 py-2 text-gray-300 hover:text-red-400 transition-colors duration-300">
            Repositories
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
