'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation'; // To get the current locale

export default function NotFound() {
  const t = useTranslations('NotFoundPage');
  const params = useParams();
  const currentLocale = params.locale as string; // Get the current locale from params

  return (
    <div className="main-page-wrapper p-0 min-h-screen flex items-center justify-center bg-gray-50">
      <div className="error-page flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto px-4 py-8">
        <div className="img-holder order-last lg:order-last w-full lg:w-1/2 flex justify-center items-center relative mb-8 lg:mb-0">
          <Image src="/images/media/404.svg" alt="404 Illustration" width={600} height={400} className="w-full h-auto max-w-md illustration" />
          <Image src="/images/media/404-q.svg" alt="Question Mark Shapes" width={100} height={100} className="shapes qus absolute top-1/4 left-1/4 animate-bounce" />
        </div>
        <div className="text-wrapper order-first lg:order-first w-full lg:w-1/2 text-center lg:text-left px-4" style={{ padding: '22px' }}>
          <div className="logo relative mb-8" style={{ position: 'relative', top: 0, left: 0 }}>
            <Link href={`/${currentLocale}/`}>
              <Image width={175} height={50} src="/images/logo/shpd_logo.jpg" alt="Logo" className="mx-auto lg:mx-0" />
            </Link>
          </div>
          <h1 className="font-slab text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            {t('title').split(',').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < t('title').split(',').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <p className="font-rubik text-lg md:text-xl text-gray-700 leading-relaxed mb-8" style={{ padding: '22px 15% 22px 0' }}>
            {t('description')}
          </p>
          <Link href={`/${currentLocale}/`} className="back-home font-rubik inline-flex items-center justify-center gozagel-btn-one bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            <span>{t('backToHome')}</span>
            <Image src="/images/icon/53.svg" alt="Home Icon" width={20} height={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}