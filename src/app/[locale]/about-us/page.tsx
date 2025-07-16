"use client"

// Next
import Image from 'next/image';
// I18n
import { useTranslations } from 'next-intl';
// Components
import Header from "@/components/Header"
import Footer from "@/components/Footer"
// Images
import logoIcon from "../../../../public/images/logo/icon.png";
import lineShape6 from "../../../../public/images/shape/line-shape-6.svg";
import shape53 from "../../../../public/images/shape/53.svg";
import shape52 from "../../../../public/images/shape/52.svg";
// Framer Motion
import { motion, Variants } from 'framer-motion';

const AboutUs = () => {

    const t = useTranslations('AboutUs');

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const fadeInVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className='main-page-wrapper'>
            <Header />
            <div className="fancy-hero-three relative overflow-hidden" style={{ background: 'var(--secondry-bg)' }}>
                <div className="shapes shape-one absolute rounded-full" style={{ backgroundColor: 'var(--main-color)' }} />
                <div className="shapes shape-two absolute rounded-full" style={{ backgroundColor: 'var(--main-color)' }} />
                <div className="shapes shape-three absolute rounded-full" style={{ backgroundColor: 'var(--main-color)' }} />
                <div className="shapes shape-four absolute rounded-full" style={{ backgroundColor: 'var(--main-color)' }} />
                <div className="shapes shape-five absolute rounded-full" style={{ backgroundColor: 'var(--main-color)' }} />
                <div className="shapes shape-six absolute rounded-full" style={{ backgroundColor: 'var(--main-color)' }} />
                <motion.div
                    className="bg-wrapper relative z-10 py-12 lg:py-20" // تم تقليل الهوامش الرأسية هنا
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="flex flex-wrap -mx-4 justify-center"
                            variants={containerVariants}
                        >
                            <div className="w-full px-4 lg:w-10/12 xl:w-9/12 text-center">
                                <motion.h1 className="heading text-4xl lg:text-5xl font-bold leading-tight mb-4" variants={itemVariants}>{t('heroHeading')}</motion.h1>
                                <motion.p className="sub-heading text-lg text-gray-700 leading-relaxed" variants={itemVariants}>{t('heroSubHeading')}</motion.p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <div>
                <motion.div
                    className="fancy-text-block-twelve py-24 md:py-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap -mx-4 items-center">
                            <motion.div className="w-full px-4 lg:w-6/12" variants={fadeUpVariants}>
                                <div className="flex flex-col justify-center h-full">
                                    <div className="text-wrapper mb-8">
                                        <div className="title-style-three mb-4">
                                            <h2 className="text-3xl lg:text-4xl font-bold relative inline-block">
                                                <span>{t('visionTitle')}<Image src={lineShape6} alt="line" className="absolute bottom-0 left-0 w-full" width={100} height={10} /></span>
                                            </h2>
                                        </div>
                                        <p className="sub-text text-lg text-gray-700 leading-relaxed">{t('visionSubText')}</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div className="w-full px-4 lg:w-5/12 lg:ml-auto mt-8 lg:mt-0" variants={fadeInVariants}>
                                <div className="img-gallery relative">
                                    <Image src={logoIcon} alt="logo" className="w-full h-auto" width={500} height={300} />
                                    <Image src={shape53} alt="shape" className="shapes shape-one absolute top-0 left-0" width={100} height={100} />
                                    <Image src={shape52} alt="shape" className="shapes shape-two absolute bottom-0 right-0" width={100} height={100} />
                                </div>
                            </motion.div>
                        </div>
                        <motion.div
                            className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={containerVariants}
                        >
                            <motion.div className="title-style-two text-center mb-8" variants={itemVariants}>
                                <div className="sub-text mt-4 text-xl font-semibold">{t('commitmentsIntro')}</div>
                            </motion.div>
                            <div className="flex flex-wrap -mx-4 justify-center">
                                <motion.div className="w-full px-4 md:w-6/12 mb-8 flex" variants={fadeUpVariants}>
                                    <div className="block-style-five gozagel-advantages-block bg-white rounded-lg shadow-lg p-8 flex-grow">
                                        <h6 className="title text-xl font-semibold mb-2">{t('commitment1Title')}</h6>
                                        <p className="text-gray-700">{t('commitment1Text')}</p>
                                    </div>
                                </motion.div>
                                <motion.div className="w-full px-4 md:w-6/12 mb-8 flex" variants={fadeUpVariants}>
                                    <div className="block-style-five gozagel-advantages-block bg-white rounded-lg shadow-lg p-8 flex-grow">
                                        <h6 className="title text-xl font-semibold mb-2">{t('commitment2Title')}</h6>
                                        <p className="text-gray-700">{t('commitment2Text')}</p>
                                    </div>
                                </motion.div>
                                <motion.div className="w-full px-4 md:w-6/12 mb-8 flex" variants={fadeUpVariants}>
                                    <div className="block-style-five gozagel-advantages-block bg-white rounded-lg shadow-lg p-8 flex-grow">
                                        <h6 className="title text-xl font-semibold mb-2">{t('commitment3Title')}</h6>
                                        <p className="text-gray-700">{t('commitment3Text')}</p>
                                    </div>
                                </motion.div>
                                <motion.div className="w-full px-4 md:w-6/12 mb-8 flex" variants={fadeUpVariants}>
                                    <div className="block-style-five gozagel-advantages-block bg-white rounded-lg shadow-lg p-8 flex-grow">
                                        <h6 className="title text-xl font-semibold mb-2">{t('commitment4Title')}</h6>
                                        <p className="text-gray-700">{t('commitment4Text')}</p>
                                    </div>
                                </motion.div>
                                <motion.div className="w-full px-4 md:w-6/12 mb-8 flex" variants={fadeUpVariants}>
                                    <div className="block-style-five gozagel-advantages-block bg-white rounded-lg shadow-lg p-8 flex-grow">
                                        <h6 className="title text-xl font-semibold mb-2">{t('commitment5Title')}</h6>
                                        <p className="text-gray-700">{t('commitment5Text')}</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    className="fancy-short-banner-fifteen py-20 md:py-16"
                    style={{ background: 'var(--secondry-bg)' }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeInVariants}
                >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap -mx-4 justify-center">
                            <motion.div className="w-full px-4 lg:w-11/12 xl:w-8/12 text-center" variants={fadeUpVariants}>
                                <div className="title-style-seven text-center text-2xl lg:text-3xl font-semibold text-gray-800 leading-relaxed">
                                    <p>{t('futureVision')}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs;