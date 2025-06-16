"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const socialLinks = [
    { href: 'https://facebook.com', icon: FaFacebook, label: 'Facebook' },
    { href: 'https://instagram.com', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://x.com', icon: FaTwitter, label: 'Twitter' },
    { href: 'https://linkedin.com', icon: FaLinkedin, label: 'LinkedIn' },
  ];

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl sm:text-3xl font-bold">
          <span className="text-white">Alex</span>{' '}
          <span className="text-amber-400">Carter .</span>
        </Link>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="sm:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } sm:flex flex-col sm:flex-row absolute sm:static top-16 left-0 w-full sm:w-auto bg-gray-900 sm:bg-transparent p-4 sm:p-0 gap-4 sm:gap-6 items-center`}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-base sm:text-lg hover:text-amber-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <ul className="hidden sm:flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  <Icon size={24} color="#F5F5F5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Social Icons (below nav links) */}
      {isMenuOpen && (
        <ul className="flex sm:hidden flex-col items-center gap-4 p-4 bg-gray-900">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  <Icon size={24} color="#F5F5F5" />
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;