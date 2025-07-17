// components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link , usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import SwitchLanguages from './switch-languages';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const t = useTranslations('Header');
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // Becomes sticky after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const navLinks = [
    { name: 'home', href: '/' },
    { name: 'howItWorks', href: '/#how-it-works' },
    { name: 'advantages', href: '/#advantages' },
    { name: 'integrations', href: '/#integrations' },
    { name: 'pricing', href: '/#pricing' },
  ];

  // Define a modern light blue color palette for Tailwind CSS
  const primaryLightBlue = 'hsl(200, 95%, 60%)'; // A vibrant, clean light blue
  const primaryDarkBlue = 'hsl(200, 95%, 45%)'; // A slightly darker shade for hover states
  const textGray = 'hsl(210, 5%, 35%)'; // Darker gray for primary text
  const lightGray = 'hsl(210, 10%, 95%)'; // Very light gray for backgrounds/borders

  return (
    <header
      className="theme-main-menu sticky-menu theme-menu-three"
      style={{ 
        boxShadow: isSticky ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none' ,
        padding: isSticky ? '30px 70px' : '47px 70px'
      }}
    >
      <div className="flex items-center justify-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/logo/shpd_logo.png"
              alt="logo"
              width={165}
              height={50}
              priority
              className="h-auto max-w-[165px]" // Ensure image scales
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center flex-grow justify-between">
          <div></div>
          <ul className="flex space-x-7 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative text-lg font-medium transition-colors duration-200
                    ${pathname === link.href ? 'font-bold' : 'text-gray-700 hover:text-blue-500'}
                  `}
                  style={{ color: pathname === link.href ? primaryDarkBlue : textGray, fontSize: '1.05rem' }} // Custom font size for nav links
                >
                  {t(`navLinks.${link.name}`)}
                  {pathname === link.href && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-[3px] rounded-full"
                      style={{ backgroundColor: primaryLightBlue }}
                    ></span>
                  )}
                </Link>
              </li>
            ))}
            <li className="nav-item"> 
              <a
                href="https://dashboard.gozagel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary gozagel-btn-one py-2 px-4"
                style={{
                  border: `2px solid ${primaryLightBlue}`,
                  color: primaryLightBlue,
                  fontSize: '0.95rem',
                  marginLeft: '2rem', // Adjust spacing
                }}
              >
                {t('personalButton')}
              </a>
            </li>
          </ul>

          {/* Language Switcher and Auth Buttons */}
          <ul className={`flex items-center space-x-4`}>
            <SwitchLanguages />

            <li className='gozagel-nav-link'>
              <Link
                href="/login"
                className="signIn-action flex items-center py-2 px-4"
                style={{ color: textGray, fontSize: '0.95rem' }}
              >
                {t('loginButton')}
              </Link>
            </li>

            <li>
              <Link
                href="/sign-up"
                className="gozagel-btn-one signUp-action px-4 py-2 flex items-center"
                style={{
                  backgroundColor: primaryLightBlue,
                  fontSize: '0.95rem',
                  boxShadow: `0 4px 15px rgba(0, 150, 255, 0.25)`, // Soft shadow for the button
                }}
              >
                <span>{t('signUpFreeButton')}</span>
                {/* تم إزالة الأيقونة من هنا */}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2"
          style={{ color: textGray, borderColor: lightGray }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} navLinks={navLinks} />
    </header>
  );
};

export default Header;