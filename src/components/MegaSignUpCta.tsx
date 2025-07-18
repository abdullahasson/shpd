"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations , useLocale } from 'next-intl';
import { motion , Variants } from 'framer-motion';
// Images
import shape1 from "../../public/images/shape/172.svg";
import shape2 from "../../public/images/shape/171.svg";

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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5
    }
  }
};

const shapeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const MegaSignUpCta = () => {
  const t = useTranslations('Home.MegaSignUpCta');
  const lang = useLocale()

  return (
    <motion.div 
      className="fancy-short-banner-eight mt-[170px] md:mt-[80px]" 
      style={{ backgroundColor: 'var(--bg-color-c1)' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="container gozagel-mega mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <motion.div 
            className="w-full lg:w-8/12 xl:w-10/12 mx-auto"
            variants={itemVariants}
          >
            <div className="title-style-seven text-center">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                variants={itemVariants}
              >
                {t('title')}
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl mb-8"
                variants={itemVariants}
              >
                {t('subtitle')}
              </motion.p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <Link 
            href={`/${lang}/sign-up`} 
            className="theme-btn-fourteen gozagel-btn-one inline-block px-8 py-3 rounded-full font-medium text-white bg-[var(--main-color)] hover:bg-[var(--main-color-dark)] transition-colors"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('ctaText')}
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* Animated Shapes */}
      <motion.div 
        className="shapes shape-one absolute"
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      >
        <Image 
          src={shape1} 
          alt="171-svg" 
          width={150}
          height={150}
        />
      </motion.div>

      <motion.div 
        className="shapes shape-two absolute"
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.7 }}
      >
        <Image 
          src={shape2} 
          alt="172-svg" 
          width={150}
          height={150}
        />
      </motion.div>
    </motion.div>
  );
};

export default MegaSignUpCta;