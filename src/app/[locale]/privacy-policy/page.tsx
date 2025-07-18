"use client"

// Next
import Image from "next/image"
// I18n
import { useTranslations , useLocale } from 'next-intl';
// Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GDPRFAQ from "@/components/GDPRFAQ";
import Footer from "@/components/Footer";
// Framer Motion
import { motion , Variants } from "framer-motion";
// Images
import ils10 from "../../../../public/images/assets/ils_10.svg"
import screen40 from "../../../../public/images/assets/screen_40.png"
import ils12 from "../../../../public/images/assets/ils_12.svg"

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
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

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.8 } 
  }
};

const slideInLeft: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const slideInRight: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const scaleUp: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const viewportSettings = {
  once: true, 
  amount: 0.2, 
  margin: "0px 0px -100px 0px"
};

const PrivacyPolicy = () => {
    const t = useTranslations('PrivacyPolicy');
    const lang = useLocale()
    const isRTL = lang == "ar"

    return (
        <div className="main-page-wrapper" style={{ paddingTop: 130 }}>
            <Header />
            <Hero title={t('title')} subTitle={t('description')} />

            <motion.div 
                className="fancy-feature-eight pt-[150px] pb-[150px] md:pt-[100px]"
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={containerVariants}
            >
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="title-style-four text-center mb-[60px] md:mb-[40px]"
                        variants={scaleUp}
                        viewport={viewportSettings}
                    >
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-10/12 mx-auto">
                                <h2>{t('informationTitle')}</h2>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="block-style-twelve"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                        variants={containerVariants}
                    >
                        <div className="flex flex-wrap items-center pt-0">
                            <motion.div 
                                className={`w-full lg:w-6/12 md:w-8/12 ${isRTL ? "mr-auto" : "ml-auto"} order-last lg:order-last`} 
                                variants={slideInRight}
                                viewport={viewportSettings}
                            >
                                <div className="illustration-holder">
                                    <Image src={ils10} alt="ils_10" />
                                </div>
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-5/12 order-first lg:order-first" 
                                variants={slideInLeft}
                                viewport={viewportSettings}
                            >
                                <div className="text-wrapper">
                                    <h6>1</h6>
                                    <h2 className="font-rubik title">{t('info1Title')}</h2>
                                    <p style={{ fontSize: 19, lineHeight: '1.5' }}>{t('info1Description')}</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="block-style-twelve"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                        variants={containerVariants}
                    >
                        <div className="flex flex-wrap items-center">
                            <motion.div 
                                className="w-full lg:w-6/12 md:w-8/12 mr-auto" 
                                variants={slideInLeft}
                                viewport={viewportSettings}
                            >
                                <div className="illustration-holder">
                                    <Image src={screen40} alt="screen_40" />
                                </div>
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-5/12" 
                                variants={slideInRight}
                                viewport={viewportSettings}
                            >
                                <div className="text-wrapper">
                                    <h6>2</h6>
                                    <h2 className="font-rubik title">{t('info2Title')}</h2>
                                    <p style={{ fontSize: 19, lineHeight: '1.5' }}>{t('info2Description')}</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="block-style-twelve"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                        variants={containerVariants}
                    >
                        <div className="flex flex-wrap items-center">
                            <motion.div 
                                className={`w-full lg:w-6/12 md:w-8/12 ${isRTL ? "mr-auto" : "ml-auto"} order-last lg:order-last`} 
                                variants={slideInRight}
                                viewport={viewportSettings}
                            >
                                <div className="illustration-holder">
                                    <Image src={ils12} alt="ils_12" />
                                </div>
                            </motion.div>
                            <motion.div 
                                className="w-full lg:w-5/12 order-first lg:order-first" 
                                variants={slideInLeft}
                                viewport={viewportSettings}
                            >
                                <div className="text-wrapper">
                                    <h6>3</h6>
                                    <h2 className="font-rubik title">{t('info3Title')}</h2>
                                    <p style={{ fontSize: 19, lineHeight: '1.5' }}>{t('info3Description')}</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div 
                className="pt-[100px] pb-[100px]" 
                style={{ background: 'var(--secondry-bg)' }}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={fadeInVariants}
            >
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="title-style-five text-center mb-[60px] md:mb-[30px]"
                        variants={itemVariants}
                        viewport={viewportSettings}
                    >
                        <h2 className="mb-[20px]">{t('sharingTitle')}</h2>
                        <p>{t('sharingSubtitle')}</p>
                    </motion.div>
                    <div className="flex flex-wrap">
                        <motion.div 
                            className="w-full xl:w-9/12 lg:w-10/12 mx-auto" 
                            variants={scaleUp}
                            viewport={viewportSettings}
                        >
                            <div id="accordionThree" className="accordion-style-four">
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <motion.div 
                                        key={item}
                                        className="card"
                                        variants={itemVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={viewportSettings}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="card-header" id={`headingOne${item}`}>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link">
                                                    {t(item === 1 ? 'serviceProviders' : 
                                                     item === 2 ? 'legalCompliance' : 
                                                     item === 3 ? 'analyticsImprovement' : 
                                                     item === 4 ? 'businessTransactions' : 
                                                     'legalObligations')}
                                                </button>
                                            </h5>
                                        </div>
                                        <div id={`collapseOne${item}`} className="collapse">
                                            <div className="card-body">
                                                <p>{t(item === 1 ? 'serviceProvidersDesc' : 
                                                   item === 2 ? 'legalComplianceDesc' : 
                                                   item === 3 ? 'analyticsImprovementDesc' : 
                                                   item === 4 ? 'businessTransactionsDesc' : 
                                                   'legalObligationsDesc')}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                className="fancy-text-block-nine mt-[130px] md:mt-[80px]"
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={containerVariants}
            >
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="title-style-two text-center mb-[35px] md:mb-[10px]"
                        variants={itemVariants}
                        viewport={viewportSettings}
                    >
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-10/12 mx-auto">
                                <h2>{t('customerRightsTitle')}</h2>
                            </div>
                        </div>
                    </motion.div>
                    <div className="flex flex-wrap">
                        <div className="w-full xl:w-10/12 mx-auto">
                            <motion.p 
                                className="text-meta"
                                variants={itemVariants}
                                viewport={viewportSettings}
                            >
                                <strong>{t('optOutTitle')}</strong> {t('optOutDesc')}
                            </motion.p>
                            <motion.p 
                                className="text-meta"
                                variants={itemVariants}
                                viewport={viewportSettings}
                            >
                                <strong>{t('accessControlTitle')}</strong> {t('accessControlDesc')}
                            </motion.p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <GDPRFAQ />

            <motion.div 
                className="fancy-short-banner-fifteen" 
                style={{ background: 'var(--secondry-bg)' }}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={containerVariants}
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <motion.div 
                            className="w-full xl:w-8/12 lg:w-11/12 mx-auto" 
                            variants={scaleUp}
                            viewport={viewportSettings}
                        >
                            <div className="title-style-seven text-center">
                                <h2>{t('changesTitle')}</h2>
                                <p>{t('changesDesc')}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <Footer />
        </div>
    )
}

export default PrivacyPolicy;