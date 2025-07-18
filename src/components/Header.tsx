// components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link, usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import SwitchLanguages from './switch-languages';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Header: React.FC = () => {
  const t = useTranslations('Header');
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
    setShowLanguageSwitcher(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'home', href: '/' },
    { name: 'howItWorks', href: '/#how-it-works' },
    { name: 'advantages', href: '/#advantages' },
    { name: 'integrations', href: '/#integrations' },
    { name: 'pricing', href: '/#pricing' },
  ];

  // Define your original color variables
  const primaryLightBlue = 'hsl(200, 95%, 60%)';
  const primaryDarkBlue = 'hsl(200, 95%, 45%)';
  const textGray = 'hsl(210, 5%, 35%)';

  // Animation variants
  const menuVariants: Variants = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 200
      }
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.2
      }
    }
  };

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-three w-full transition-all duration-300 ${isSticky ? 'sticky top-0 z-50 shadow-md' : ''
        }`}
      style={{
        padding: isSticky ? '30px 70px' : '47px 70px',
        boxShadow: isSticky ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none',
      }}
    >
      <div className="flex items-center justify-center w-full">
        {/* Logo - Exactly as original */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/logo/shpd_logo.png"
              alt="logo"
              width={165}
              height={50}
              priority
              className="h-auto max-w-[165px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation - 100% original code */}
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
                  style={{ color: pathname === link.href ? primaryDarkBlue : textGray, fontSize: '1.05rem' }}
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
                  marginLeft: '2rem',
                }}
              >
                {t('personalButton')}
              </a>
            </li>
          </ul>

          {/* Language Switcher and Auth Buttons - Original */}
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
                  boxShadow: `0 4px 15px rgba(0, 150, 255, 0.25)`,
                }}
              >
                <span>{t('signUpFreeButton')}</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Controls - Only visible on small screens */}
        <div className="lg:hidden flex items-center space-x-4 ml-auto">
          <button
            onClick={() => setShowLanguageSwitcher(!showLanguageSwitcher)}
            className="p-2 rounded-md focus:outline-none"
            aria-label="Toggle language switcher"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </button>
          <button
            className="p-2 rounded-md focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 90 },
                closed: { rotate: 0 }
              }}
              transition={{ duration: 0.2 }}
            >
              <svg
                className="w-7 h-7 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Language Switcher Dropdown */}
      <AnimatePresence>
        {showLanguageSwitcher && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute right-20 mt-2 bg-white rounded-md shadow-lg z-30 border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <SwitchLanguages />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="!absolute top-0 right-0 h-screen w-screen bg-white z-50 shadow-2xl lg:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-full flex flex-col p-6 overflow-y-auto">
                {/* Menu Header */}
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    <Image
                      src="/images/logo/shpd_logo.png"
                      alt="logo"
                      width={140}
                      height={42}
                      className="h-auto"
                    />
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Menu Content */}
                <div className="space-y-6 flex-1">
                  {/* Language Switcher Inside Menu */}
                  <div className="mb-6">
                    <SwitchLanguages />
                  </div>

                  {/* Navigation Links */}
                  <nav className="space-y-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`block py-3 px-4 text-lg font-medium rounded-lg transition-colors ${pathname === link.href
                            ? 'bg-blue-50 text-blue-500'
                            : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t(`navLinks.${link.name}`)}
                      </Link>
                    ))}
                    <a
                      href="https://dashboard.gozagel.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-3 px-4 text-lg font-medium text-blue-400 rounded-lg hover:bg-gray-50"
                    >
                      {t('personalButton')}
                    </a>
                  </nav>
                </div>

                {/* Auth Buttons */}
                <div className="pt-6 border-t border-gray-200 space-y-4 mt-auto">
                  <Link
                    href="/login"
                    className="block py-3 px-4 text-center text-lg font-medium rounded-lg border border-gray-200 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('loginButton')}
                  </Link>
                  <Link
                    href="/sign-up"
                    className="block py-3 px-4 text-center text-lg font-medium rounded-lg bg-blue-400 text-white shadow-md hover:bg-blue-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('signUpFreeButton')}
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;