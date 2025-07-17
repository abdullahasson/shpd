"use client"


import Image from 'next/image';
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { motion , Variants } from 'framer-motion';
// Images
import Channels from "../../public/images/assets/Channels-01.png";
import Social from '../../public/images/assets/Social Media.png';
import Shipping from '../../public/images/assets/Shipping companies.png';
// Icons
import Icon93 from '../../public/images/icon/93.svg';

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

const slideInFromLeft: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.7
    }
  }
};

const slideInFromRight: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const IntegrationsSection = () => {
  const t = useTranslations('Home.IntegrationsSection');

  return (
    <motion.section 
      className="fancy-feature-eight pt-20 pb-20 md:pt-20 md:pb-20" 
      id="integrations"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <motion.div 
          className="title-style-four text-center mb-16 md:mb-8"
          variants={fadeIn}
        >
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-10/12">
              <div className="title-style-seven text-center mb-12 md:mb-4">
                <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  <span>{t('spanTitle')}</span> {t('title')}
                </motion.h2>
                <motion.p className="text-lg md:text-xl text-gray-600">
                  {t('subtitle')}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Image */}
        <motion.div 
          className="w-full flex items-center justify-center my-16"
          variants={fadeIn}
        >
          <Image 
            className="integration-image-section max-w-full h-auto" 
            src={Channels} 
            alt="integration-image-section" 
            width={1000}
            height={500}
          />
        </motion.div>

        {/* Sales Channels Block */}
        <motion.div 
          className="block-style-eighteen mt-24 md:mt-20"
          variants={containerVariants}
        >
          <div className="flex flex-wrap items-center">
            <motion.div 
              className="w-full lg:w-5/12 mb-10 lg:mb-0"
              variants={slideInFromLeft}
            >
              <div className="text-wrapper">
                <motion.h6 className="uppercase text-sm font-semibold text-[var(--main-color)] mb-2">
                  {t('sales.channelsLabel')}
                </motion.h6>
                <motion.h3 className="title text-2xl md:text-3xl font-bold mb-4">
                  {t('sales.title')}
                </motion.h3>
                <motion.p className="text-gray-600 mb-6">
                  {t('sales.description')}
                </motion.p>
                <Link href="/Integrations" className="flex items-center learn-more group">
                  <motion.span 
                    className="mr-2 font-medium text-[var(--main-color)] group-hover:underline"
                    whileHover={{ x: 5 }}
                  >
                    {t('learnMore')}
                  </motion.span>
                  <motion.div whileHover={{ x: 5 }}>
                    <Image src={Icon93} alt="icon-93" width={20} height={20} />
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-7/12"
              variants={slideInFromRight}
            >
              <div className="screen-holder-three flex items-center justify-center p-8 rounded-xl" style={{ background: 'var(--secondry-bg)' }}>
                <Image 
                  src={Social} 
                  className="w-[90%] h-auto" 
                  alt="social-media" 
                  width={700}
                  height={500}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Couriers Block */}
        <motion.div 
          className="block-style-eighteen mt-24 md:mt-20"
          variants={containerVariants}
        >
          <div className="flex flex-wrap items-center">
            <motion.div 
              className="w-full lg:w-5/12 order-1 lg:order-2 mb-10 lg:mb-0"
              variants={slideInFromRight}
            >
              <div className="text-wrapper lg:pl-8">
                <motion.h6 className="uppercase text-sm font-semibold text-[var(--main-color)] mb-2">
                  {t('couriers.couriersLabel')}
                </motion.h6>
                <motion.h3 className="title text-2xl md:text-3xl font-bold mb-4">
                  {t('couriers.title')}
                </motion.h3>
                <motion.p className="text-gray-600 mb-6">
                  {t('couriers.description')}
                </motion.p>
                <Link href="/Integrations" className="flex items-center learn-more group">
                  <motion.span 
                    className="mr-2 font-medium text-[var(--main-color)] group-hover:underline"
                    whileHover={{ x: 5 }}
                  >
                    {t('learnMore')}
                  </motion.span>
                  <motion.div whileHover={{ x: 5 }}>
                    <Image src={Icon93} alt="icon-93" width={20} height={20} />
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-7/12 order-2 lg:order-1"
              variants={slideInFromLeft}
            >
              <div className="screen-holder-three flex items-center justify-center p-8 rounded-xl" style={{ background: 'var(--secondry-bg)' }}>
                <Image 
                  src={Shipping} 
                  className="w-[90%] h-auto" 
                  alt="shipping-companies" 
                  width={700}
                  height={500}
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