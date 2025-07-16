'use client';

// Next
import Image from 'next/image';
// I18n
import { useTranslations } from 'next-intl';
// Framer Motion
import { motion , Variants } from 'framer-motion';
// Images
import Social from '../../public/images/assets/Social Media.png';
import Shipping from '../../public/images/assets/Shipping companies.png';
// Icons
import Icon93 from '../../public/images/icon/93.svg';

const IntegrationsSection = () => {
  const t = useTranslations('Home.Integrations');

  const features = [
    {
      category: 'channels',
      title: t('salesChannels.title'),
      description: t('salesChannels.description'),
      image: Social,
      link: '/Integrations',
      icon: Icon93
    },
    {
      category: 'couriers',
      title: t('couriers.title'),
      description: t('couriers.description'),
      image: Shipping,
      link: '/Integrations',
      icon: Icon93
    }
  ];

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

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="integrations" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
          >
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
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>

        {/* Center Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="bg-transparnt p-6 rounded-2xl max-w-4xl">
            <Image
              src="/images/assets/Channels-01.png"
              alt="integration-image-section"
              width={1000}
              height={500}
              className="w-full object-contain"
            />
          </div>
        </motion.div>

        {/* Features */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
              className="block-style-eighteen"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Text Content */}
                <motion.div 
                  variants={itemVariants}
                  className="lg:w-5/12"
                >
                  <div className="p-8 h-full">
                    <span className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                      {t(`categories.${feature.category}`)}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {feature.description}
                    </p>
                    <a 
                      href={feature.link} 
                      className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors group"
                    >
                      <span>{t('learnMore')}</span>
                      <div className="bg-primary rounded-full p-2 group-hover:bg-primary-dark transition-colors">
                        <Image
                          src={feature.icon}
                          alt="Learn more"
                          width={16}
                          height={16}
                          className="filter invert"
                        />
                      </div>
                    </a>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div 
                  variants={itemVariants}
                  className="lg:w-7/12"
                >
                  <div className="p-22 flex items-center justify-center h-full">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={800}
                      height={500}
                      className="w-full object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;