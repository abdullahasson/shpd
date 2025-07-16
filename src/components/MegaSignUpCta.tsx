// components/MegaSignUpCta.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const MegaSignUpCta: React.FC = () => {
  const t = useTranslations('Home.MegaSignUpCta');

  return (
    <div
      className="relative mt-40 md:mt-20 py-20 overflow-hidden" // Tailwind for mt-170 md-mt-80, added py-20 for vertical padding
      style={{ backgroundColor: 'var(--bg-color-c1)' }} // Assuming --bg-color-c1 is defined in your global CSS or variables
    >
      <div className="container mx-auto px-4 relative z-10"> {/* Added relative z-10 to keep content above shapes */}
        <div className="flex justify-center">
          <motion.div
            className="w-full xl:w-8/12 lg:w-11/12 mx-auto" // Tailwind for col-xl-8 col-lg-11 m-auto
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="title-style-seven text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {t('title')}
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                {t('description')}
              </p>
            </div>
          </motion.div>
        </div>
        <div className="text-center mt-12"> {/* Centering the button */}
          <Link
            href="/sign-up" // Consider making this dynamic if needed
            className="theme-btn-fourteen gozagel-btn-one inline-block" // Tailwind for gozagel-btn-one
          >
            {t('getStartedButton')}
          </Link>
        </div>
      </div>

      {/* Shape images */}
      <Image
        src="/images/shape/171.svg"
        alt="Shape One"
        width={100} // Adjust width/height as needed for your design
        height={100}
        className="absolute top-10 left-10 w-24 h-24 lg:w-auto lg:h-auto animate-float-one" // Added some positioning and custom float animation
      />
      <Image
        src="/images/shape/172.svg"
        alt="Shape Two"
        width={100} // Adjust width/height as needed for your design
        height={100}
        className="absolute bottom-10 right-10 w-24 h-24 lg:w-auto lg:h-auto animate-float-two" // Added some positioning and custom float animation
      />

      {/* Define custom keyframe animations for floating effect in your global CSS */}
      <style jsx global>{`
        @keyframes floatOne {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, -10px) rotate(5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes floatTwo {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-10px, 10px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        .animate-float-one {
          animation: floatOne 6s ease-in-out infinite;
        }
        .animate-float-two {
          animation: floatTwo 7s ease-in-out infinite reverse;
        }
      `}</style>
    </div>
  );
};

export default MegaSignUpCta;