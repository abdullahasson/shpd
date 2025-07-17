'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations , useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link'; 

const Footer: React.FC = () => {
  const t = useTranslations('Footer');
  const locale = useLocale() 
  const currentYear = new Date().getFullYear();


  const links = [
    { key: 'links.aboutUs', href: '/about-us' },
    { key: 'links.howItWorks', href: '/how-it-work' },
    { key: 'links.integrations', href: '/integrations' },
    { key: 'links.prohibitedItems', href: '/prohibited-items' },
    { key: 'links.packaging', href: '/packaging' },
    { key: 'links.contactUs', href: '/contact-us' },
  ];

  const legalLinks = [
    { key: 'legal.shipmentInsurance', href: '/insurance' },
    { key: 'legal.termsAndConditions', href: '/terms-and-condition' },
    { key: 'legal.privacyPolicy', href: '/privacy-policy' },
  ];

  return (
    <footer className="mt-28 md:mt-24 bg-white text-gray-700 pt-16"> 
      <div className="container mx-auto px-4 lg:max-w-7xl"> 
        <div className="flex flex-wrap -mx-4 justify-between">
          
          <motion.div
            className="w-full sm:w-1/2 lg:w-3/12 xl:w-3/12 px-4 mb-10" 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="logo">
              <Link href="/">
                <Image
                  src="/images/logo/shpd_logo.jpg"
                  alt="shpd-logo"
                  width={150}
                  height={50}
                  className="max-w-[70%]"
                />
              </Link>
            </div>
          </motion.div>

         
          <motion.div
            className="w-full sm:w-1/2 lg:w-2/12 px-4 mb-10" 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h5 className="title text-lg font-bold mb-4 text-gray-800">{t('linksTitle')}</h5>
            <ul className="footer-list space-y-2">
              {links.map((link) => (
                <li key={link.key}>
                  <Link href={`/${locale}${link.href}`} className="hover:text-blue-600 transition-colors duration-200">
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

   
          <motion.div
            className="w-full sm:w-1/2 lg:w-3/12 px-4 mb-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h5 className="title text-lg font-bold mb-4 text-gray-800">{t('legalTitle')}</h5>
            <ul className="footer-list space-y-2">
              {legalLinks.map((link) => (
                <li key={link.key}>
                  <Link href={`/${locale}${link.href}`} className="hover:text-blue-600 transition-colors duration-200">
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="w-full sm:w-1/2 lg:w-4/12 xl:w-4/12 px-4 mb-10" 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="newsletter">
              <h5 className="title text-lg font-bold mb-4 text-gray-800">{t('newsletterTitle')}</h5>
              <p className="mb-4 text-gray-600">
                {t.rich('newsletterDescription', {
                  span: (chunks) => <span className="font-bold text-blue-600">{chunks}</span>,
                })}
              </p>
              <form
                action="https://forms.zohopublic.com/royalworksfortrade/form/Newsletter1/formperma/s4FlM2eSOdF9abP3RwTyu2L1kiP-T03YcZXl4Sp9Ig4/htmlRecords/submit"
                method="POST"
                acceptCharset="UTF-8"
                encType="multipart/form-data"
                className="flex flex-col sm:flex-row gap-2"
              >
                <input type="hidden" name="zf_referrer_name" value="" />
                <input type="hidden" name="zf_redirect_url" value="" />
                <input type="hidden" name="zc_gad" value="" />
                <input
                  type="email" 
                  maxLength={255}
                  name="Email"
                  placeholder={t('emailPlaceholder')}
                  className="flex-grow p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ borderColor: 'var(--main-color)' }}
                  required 
                />
                <button
                  type="submit"
                  className="dark-btn gozagel-btn-one px-3" 
                >
                  {t('signUpButton')}
                </button>
              </form>
              <div className="info text-sm text-gray-500 mt-2">{t('newsletterInfo')}</div>
            </div>
          </motion.div>
        </div>


        <div className="bottom-footer p-8 mt-10 border-t border-gray-200"> 
          <div className="w-full text-center"> 
            <p className="copyright text-center text-gray-500">
              {t('copyright', { year: currentYear })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;