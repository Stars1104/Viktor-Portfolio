'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

if (typeof window !== 'undefined') {
  gsap.registerPlugin();
}

export default function Navbar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathname === '/about') {
      setActiveLink('About');
    } else if (pathname === '/projects') {
      setActiveLink('Projects');
    } else if (pathname === '/album') {
      setActiveLink('Album');
    } else if (pathname === '/contact') {
      setActiveLink('Contact');
    } else if (pathname === '/') {
      setActiveLink('Home');
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Animate navbar on mount
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
    }

    // Animate logo
    if (logoRef.current) {
      gsap.fromTo(logoRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      );
    }

    // Animate nav links with stagger
    if (linksRef.current) {
      const links = linksRef.current.querySelectorAll('a');
      gsap.fromTo(links,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.4 }
      );
    }

    // Animate button
    if (buttonRef.current) {
      gsap.fromTo(buttonRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 }
      );
    }
  }, []);

  useEffect(() => {
    // Animate mobile menu
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.fromTo(mobileMenuRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power3.out' }
        );
      }
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/', isHash: false },
    { name: 'About', href: '/about', isHash: false },
    { name: 'Projects', href: '/projects', isHash: false },
  ];

  return (
    <>
      <nav ref={navRef} className={`${isScrolled ? 'max-w-2xl rounded-full' : 'max-w-7xl'} mx-auto mt-2 fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-3 sm:px-4 md:px-8 py-3 sm:py-4 bg-[#0b0b0d]/80 backdrop-blur-md transition-all duration-300 ease-in-out`}>
        {/* Logo */}
        <Link ref={logoRef} href="/" className="text-white text-lg sm:text-xl md:text-2xl font-medium tracking-tight hover:text-gray-300 transition-colors">
          A L
        </Link>

        {/* Desktop Navigation Links */}
        <div ref={linksRef} className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;
            
            if (link.isHash) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className="relative flex items-center gap-3 text-gray-400 hover:text-gray-300 transition-colors text-sm"
                >
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#b5ff6d]"></span>
                  )}
                  <span className={isActive ? 'text-gray-300' : ''}>
                    {link.name}
                  </span>
                </a>
              );
            }
            
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className="relative flex items-center gap-3 text-gray-400 hover:text-gray-300 transition-colors text-sm"
              >
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#b5ff6d]"></span>
                )}
                <span className={isActive ? 'text-gray-300' : ''}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Desktop Button */}
        <button
          ref={buttonRef}
          className="hidden md:block text-white hover:text-gray-300 transition-colors text-sm"
          aria-label="Toggle dark mode"
        >
          DEV
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-gray-300 transition-colors p-2"
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-[65px] sm:top-[73px] left-0 right-0 z-40 bg-[#0b0b0d]/95 backdrop-blur-md border-b border-gray-800/30 md:hidden"
        >
          <div className="flex flex-col px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              
              if (link.isHash) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className="relative flex items-center gap-3 text-gray-400 hover:text-gray-300 transition-colors text-base py-2"
                  >
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#b5ff6d]"></span>
                    )}
                    <span className={isActive ? 'text-gray-300' : ''}>
                      {link.name}
                    </span>
                  </a>
                );
              }
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className="relative flex items-center gap-3 text-gray-400 hover:text-gray-300 transition-colors text-base py-2"
                >
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#b5ff6d]"></span>
                  )}
                  <span className={isActive ? 'text-gray-300' : ''}>
                    {link.name}
                  </span>
                </Link>
              );
            })}
            <div className="pt-4 border-t border-gray-800/30">
              <button
                className="text-white hover:text-gray-300 transition-colors text-base py-2"
                aria-label="Toggle dark mode"
              >
                DEV
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}