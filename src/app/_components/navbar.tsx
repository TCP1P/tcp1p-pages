"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../../public/TCP1P _Main White Red.svg";

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/ctfs", text: "CTFs" },
  { href: "/repositories", text: "Repositories" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="content-shell header-inner" aria-label="Main navigation">
        <Link className="brand-link" href="/" aria-label="TCP1P home" onClick={() => setMenuOpen(false)}>
          <Image src={logo} alt="" width={104} priority />
        </Link>
        <div className="desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link" aria-current={pathname === link.href ? "page" : undefined}>
              {link.text}
            </Link>
          ))}
        </div>
        <a className="header-cta" href="https://tcp.1pc.tf/" target="_blank" rel="noopener noreferrer">Playground <span aria-hidden="true">↗</span></a>
        <button ref={menuButton} className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span className={menuOpen ? "menu-icon is-open" : "menu-icon"} aria-hidden="true"><i /><i /></span>
        </button>
      </nav>
      <div id="mobile-navigation" className={menuOpen ? "mobile-nav is-open" : "mobile-nav"} hidden={!menuOpen}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setMenuOpen(false)}>{link.text}</Link>
        ))}
        <a href="https://tcp.1pc.tf/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Playground ↗</a>
      </div>
    </header>
  );
}
