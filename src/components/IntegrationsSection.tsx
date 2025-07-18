"use client"

import Image from 'next/image';
import Link from "next/link";
import { useTranslations , useLocale } from 'next-intl';
import { motion, Variants } from 'framer-motion';
// Images
import Channels from "../../public/images/assets/Channels-01.png";
import Social from '../../public/images/assets/Social Media.png';
import Shipping from '../../public/images/assets/Shipping companies.png';
// Icons
import Icon93 from '../../public/images/icon/93.svg';

// Animation variants with TypeScript types
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const fadeInLeft: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeInRight: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const IntegrationsSection = () => {
  const t = useTranslations('Home.IntegrationsSection');
  const lang = useLocale()

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-20 md:py-20 bg-white" 
      id="integrations"
    >
      <div className="container mx-auto px-4">
        <motion.div variants={itemVariants} className="text-center">
          <div className="flex">
            <div className="w-full lg:w-10/12 mx-auto">
              <div className="text-center mb-12 md:mb-2">
                <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
                  <span className="text-primary">{t('highlight')}</span> {t.rich('title')}
                </motion.h2>
                <motion.p variants={itemVariants} className="text-lg text-gray-600">
                  {t('description')}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="w-full flex items-center justify-center"
        >
          <Image 
            src={Channels}
            alt='channelsImage'
            className="max-w-full h-auto"
            placeholder="blur"
            priority
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="mt-24 md:mt-20"
        >
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              variants={fadeInLeft}
              className="w-full lg:w-5/12"
            >
              <div className="pr-0 lg:pr-10">
                <h6 className="text-sm font-medium text-primary mb-2">
                  {t('salesChannels.subtitle')}
                </h6>
                <h3 className="text-2xl font-bold mb-4">
                  {t('salesChannels.title')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('salesChannels.description')}
                </p>
                <Link 
                  href={`/${lang}/integrations`} 
                  className="flex items-center text-primary font-medium hover:text-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                >
                  <span>{t('salesChannels.learnMore')}</span>
                  <motion.span whileHover={{ x: 5 }}>
                    <Image 
                      src={Icon93} 
                      alt="icons" 
                      className="ml-2"
                      aria-hidden="true"
                    />
                  </motion.span>
                </Link>
              </div> 
            </motion.div>
            <motion.div 
              variants={fadeInRight}
              className="w-full lg:w-7/12 mt-8 lg:mt-0"
            >
              <div className="flex items-center justify-center p-8 rounded-xl bg-gray-100">
                <Image 
                  src={Social}
                  alt='socialMediaImage'
                  className="w-11/12"
                  style={{ animation: 'none' }}
                  placeholder="blur"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="mt-24 md:mt-20"
        >
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              variants={fadeInLeft}
              className="w-full lg:w-5/12"
            >
              <div className="pr-0 lg:pr-10">
                <h6 className="text-sm font-medium text-primary mb-2">
                  {t('couriers.subtitle')}
                </h6>
                <h3 className="text-2xl font-bold mb-4">
                  {t('couriers.title')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('couriers.description')}
                </p>
                <Link 
                  href={`/${lang}/integrations`} 
                  className="flex items-center text-primary font-medium hover:text-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                >
                  <span>{t('couriers.learnMore')}</span>
                  <motion.span whileHover={{ x: 5 }}>
                    <Image 
                      src={Icon93} 
                      alt="icons" 
                      className="ml-2"
                      aria-hidden="true"
                    />
                  </motion.span>
                </Link>
              </div> 
            </motion.div>
            <motion.div 
              variants={fadeInRight}
              className="w-full lg:w-7/12 mt-8 lg:mt-0"
            >
              <div className="flex items-center justify-center p-8 rounded-xl bg-gray-100">
                <Image 
                  src={Shipping}
                  alt='shippingImage'
                  className="w-11/12"
                  style={{ animation: 'none' }}
                  placeholder="blur"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IntegrationsSection;