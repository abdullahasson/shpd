'use client';

// Next
import Image from 'next/image';
import Link from 'next/link';
// I18n
import { useTranslations } from 'next-intl';
// Framer Motion
import { motion, Variants } from 'framer-motion'; 
// Images
import Connect from "../../public/images/assets/connect.svg"
import MangOrder from "../../public/images/assets/mang-order.svg"
import Ship from "../../public/images/assets/ship.svg"

const HowItWorks = () => {
  const t = useTranslations('Home.HowItWorks');

  const steps = [
    {
      title: t('step1.title'),
      description: t('step1.description'),
      icon: Connect,
    },
    {
      title: t('step2.title'),
      description: t('step2.description'),
      icon: MangOrder,
    },
    {
      title: t('step3.title'),
      description: t('step3.description'),
      icon: Ship,
    }
  ];

  // Define proper types for variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        damping: 15,
        stiffness: 100
      }
    }
  };

  return (
    <section 
      id="how-it-works" 
      className="py-24 md:py-32 bg-gradient-to-br from-indigo-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            <span className="relative">
              <span className="relative z-10">
                {t.rich('titleHighlight', {
                  span: (chunks) => (
                    <span className="text-primary">{chunks}</span>
                  )
                })}
              </span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300 z-0"></span>
            </span>{' '}
            {t('titleRest')}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white text-center rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-center mb-6">
                  <div className="bg-indigo-100 rounded-full p-4">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={77}
                      height={77}
                      className="object-contain"
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                </div>
                
                <p className="text-gray-600 flex-grow">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-auto text-center mt-16 md:mt-24"
        >
          <Link 
            href="/how-it-works" 
            className="theme-btn-ten inline-block"
          >
            <span>{t('learnMore')}</span>
            <svg 
              className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;