"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion , Variants } from 'framer-motion';
// Images
import Connect from "../../public/images/assets/connect.svg";
import MangOrder from "../../public/images/assets/mang-order.svg";
import Ship from "../../public/images/assets/ship.svg";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.7
    }
  }
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const HowItWorks = () => {
  const t = useTranslations('Home.HowItWorks');
  const lang = useLocale()

  const steps = [
    {
      icon: Connect,
      title: t('steps.step1.title'),
      description: t('steps.step1.description')
    },
    {
      icon: MangOrder,
      title: t('steps.step2.title'),
      description: t('steps.step2.description')
    },
    {
      icon: Ship,
      title: t('steps.step3.title'),
      description: t('steps.step3.description')
    }
  ];

  return (
    <motion.div
      className="fancy-text-block-four mt-20 pt-32 pb-30 md:pt-25 md:pb-20"
      style={{ background: 'var(--secondry-bg)' }}
      id="how-it-works"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <motion.div
          className="title-style-four text-center"
          variants={fadeIn}
        >
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-10/12">
              <div className="title-style-seven text-center mb-12 md:mb-4">
                <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  <span>{t('titleHighlight')}</span> {t('title')}
                </motion.h2>
                <motion.p className="font-rubik text-lg text-gray-600">
                  {t('subtitle')}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Steps Section */}
        <div className="wrapper mt-16">
          <div className="flex flex-wrap justify-center -mx-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
                variants={itemVariants}
                custom={index}
              >
                <div
                  className="block-style-three p-8 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow"
                  style={{ minHeight: '435px' }}
                >
                  <div className="icon mb-6">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={77}
                      height={77}
                      className="mx-auto"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-center">{step.title}</h4>
                  <p className="font-rubik text-gray-600 text-center">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-20 md:mt-12"
          variants={fadeIn}
        >
          <Link
            href={`/${lang}/how-it-work`}
            className="theme-btn-ten inline-flex items-center px-6 py-3 rounded-full text-white transition-colors"
          >
            {t('ctaText')}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HowItWorks;