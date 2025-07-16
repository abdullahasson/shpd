// components/MobileMenu.tsx
'use client';

import React from 'react';
// *** التعديل هنا: استيراد Link, useRouter, usePathname من ملف navigation.ts الخاص بك ***
import { Link, useRouter, usePathname } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
// *** التعديل هنا: استيراد locales, localeNames, flagIcons من ملف routing.ts الخاص بك ***
import { locales, localeNames, flagIcons } from '@/i18n/routing';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navLinks }) => {
  const t = useTranslations('Header');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-75 z-40 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out lg:hidden`}
      onClick={onClose}
    >
      <div
        className="fixed right-0 top-0 w-64 bg-white h-full shadow-lg p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="mt-8">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`block py-2 text-lg font-medium hover:text-blue-600 transition-colors duration-200
                  ${pathname === link.href ? 'text-blue-600' : 'text-gray-700'}`}
                  onClick={onClose}
                >
                  {t(`navLinks.${link.name}`)}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://dashboard.gozagel.com/"
                className="block py-2 text-lg font-medium text-blue-600 hover:underline"
                onClick={onClose}
              >
                {t('personalButton')}
              </a>
            </li>
          </ul>

          <div className="mt-8 pt-4 border-t border-gray-200">
            <div className="mb-4">
              <h3 className="font-bold mb-2">{t('languageTitle')}</h3>
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLocaleChange(loc)}
                  className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 rounded-md transition-colors duration-200 mb-1"
                  disabled={loc === locale}
                >
                  <Image
                    src={flagIcons[loc as keyof typeof flagIcons]}
                    alt={`${localeNames[loc as keyof typeof localeNames]} Flag`}
                    width={20}
                    height={15}
                    className="mr-2"
                  />
                  <span>{localeNames[loc as keyof typeof localeNames]}</span>
                </button>
              ))}
            </div>

            <div className="flex flex-col space-y-3">
              <Link href="/login" className="block py-2 px-4 text-center rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors duration-200" onClick={onClose}>
                {t('loginButton')}
              </Link>
              <Link href="/sign-up" className="inline-flex items-center justify-center py-2 px-4 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300" onClick={onClose}>
                <span>{t('signUpFreeButton')}</span>
                <Image src="/images/icon/53.svg" alt="icon" width={16} height={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;