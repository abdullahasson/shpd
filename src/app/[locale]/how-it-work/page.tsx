"use client";

// Next
import Image from "next/image";
import Link from "next/link"
// I18n
import { useTranslations } from 'next-intl';
// Framer Motion
import { motion, Variants } from 'framer-motion';
// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Image Imports
import shopifyGlyph from "../../../../public/images/Sales Channels/shopify_glyph.png";
import a45cf75986e5f90595049b68725bfd87 from "../../../../public/images/Sales Channels/a45cf75986e5f90595049b68725bfd87.png";
import zidEnLogoColored from "../../../../public/images/Sales Channels/zid-en-logo-colored.png";
import instagramLogo2022 from "../../../../public/images/Sales Channels/Instagram_logo_2022.svg.png";
import woocommercePlainWordmark from "../../../../public/images/Sales Channels/woocommerce-plain-wordmark.svg";
import sallaLogo from "../../../../public/images/Sales Channels/salla-logo.png";
import screen40 from "../../../../public/images/assets/screen_40.png";
import fedExLogo from "../../../../public/images/Courier_Logos2024/FedEx-Logo-PNG-Transparent.png";
import spl from "../../../../public/images/Courier_Logos2024/SPL.png";
import bosta from "../../../../public/images/Courier_Logos2024/bosta.png";
import dhlExpress2 from "../../../../public/images/Courier_Logos2024/DHL Express2.png";
import aramexLogo from "../../../../public/images/Courier_Logos2024/1280px-Aramex_logo.svg.png";
import daco5026733 from "../../../../public/images/Courier_Logos2024/Daco_5026733.png";
import shape171 from "../../../../public/images/shape/171.svg";
import shape172 from "../../../../public/images/shape/172.svg";


const HowItWork = () => {

    const t = useTranslations('HowItWorks');

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
                <div className="shapes shape-one" style={{ backgroundColor: 'var(--main-color)' }} />
                <div className="shapes shape-two" style={{ backgroundColor: 'var(--main-color)' }} />
                <div className="shapes shape-three" style={{ backgroundColor: 'var(--main-color)' }} />
                <div className="shapes shape-four" style={{ backgroundColor: 'var(--main-color)' }} />
                <div className="shapes shape-five" style={{ backgroundColor: 'var(--main-color)' }} />
                <div className="shapes shape-six" style={{ backgroundColor: 'var(--main-color)' }} />
                <motion.div
                    className="bg-wrapper relative"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="flex flex-wrap justify-center"
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

            <div className="fancy-feature-sixteen py-20 md:py-24" id="feature">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div className="flex flex-wrap justify-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                        <div className="w-full px-4 xl:w-10/12 text-center">
                            <div className="title-style-seven">
                                <h2 className="text-3xl lg:text-4xl font-bold">{t('sectionTitle')}</h2>
                            </div>
                        </div>
                    </motion.div>

                    <div className="block-style-eighteen">
                        <motion.div className="flex flex-wrap items-center justify-between mb-20 md:mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
                            <motion.div className="w-full px-4 lg:w-6/12" variants={fadeUpVariants}>
                                <div className="text-wrapper w-full">
                                    <h6 className="text-xl font-semibold mb-2">{t('step1Number')}</h6>
                                    <h3 className="title text-3xl lg:text-4xl font-bold mb-5">
                                        <span>{t('step1TitlePart1')}</span> {t('step1TitlePart2')}</h3>
                                    <ul>
                                        <li className="text-lg text-gray-700 mb-2"><strong>{t('step1HowItWorksTitle')}:</strong> {t('step1HowItWorksText')}</li>
                                        <li className="text-lg text-gray-700 mb-2"><strong>{t('step1NoStoreTitle')}:</strong> {t('step1NoStoreText')}</li>
                                        <li className="text-lg text-gray-700"><strong>{t('step1WhyThisHelpsTitle')}:</strong> {t('step1WhyThisHelpsText')}</li>
                                    </ul>
                                </div>
                            </motion.div>
                            <div className="w-full px-4 lg:w-6/12 mt-8 lg:mt-0">
                                <div className="screen-holder-one flex items-center justify-center p-8 rounded-lg" style={{ background: 'var(--secondry-bg-l)' }}>
                                    <div className="screen-holder-one flex items-center justify-center">
                                        <div className="round-bg flex items-center justify-center absolute rounded-full" style={{ width: 193, height: 193 }}>
                                            <Image src={shopifyGlyph} alt="Shopify" width={96} height={96} className="object-contain" />
                                        </div>
                                        <div className="round-bg flex items-center justify-center shapes logo-one absolute rounded-full" style={{ width: 65, height: 65, top: '10%', left: '10%' }}>
                                            <Image src={a45cf75986e5f90595049b68725bfd87} alt="Logo One" width={38} height={38} className="object-contain" />
                                        </div>
                                        <div className="round-bg flex items-center justify-center shapes logo-two absolute rounded-full" style={{ width: 105, height: 105, bottom: '5%', left: '5%' }}>
                                            <Image src={zidEnLogoColored} alt="Logo Two" width={73} height={73} className="object-contain" />
                                        </div>
                                        <div className="round-bg flex items-center justify-center shapes logo-three absolute rounded-full" style={{ width: 81, height: 81, top: '20%', right: '15%' }}>
                                            <Image src={instagramLogo2022} alt="Logo Three" width={52} height={52} className="object-contain" />
                                        </div>
                                        <div className="round-bg flex items-center justify-center shapes logo-four absolute rounded-full" style={{ width: 148, height: 148, top: '40%', right: '10%' }}>
                                            <Image src={woocommercePlainWordmark} alt="Logo Four" width={90} height={90} className="object-contain" />
                                        </div>
                                        <div className="round-bg flex items-center justify-center shapes logo-five absolute rounded-full" style={{ width: 105, height: 105, bottom: '10%', right: '20%' }}>
                                            <Image src={sallaLogo} alt="Logo Five" width={68} height={68} className="object-contain" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="block-style-eighteen mt-20 mb-20 pt-12 md:mt-16">
                        <motion.div className="flex flex-wrap items-center justify-between" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
                            <div className="w-full px-4 lg:w-5/12 order-lg-first mt-8 lg:mt-0">
                                <div className="screen-holder-two">
                                    <Image src={screen40} alt="Screen 40" width={500} height={300} className="w-full h-auto object-contain" />
                                </div>
                            </div>
                            <motion.div className="w-full px-4 lg:w-7/12 order-lg-last" variants={fadeUpVariants}>
                                <div className="text-wrapper">
                                    <h6 className="text-xl font-semibold mb-2">{t('step2Number')}</h6>
                                    <h3 className="title text-3xl lg:text-4xl font-bold mb-5"><span>{t('step2TitlePart1')}</span> {t('step2TitlePart2')}</h3>
                                    <ul>
                                        <li className="text-lg text-gray-700 mb-2"><strong>{t('step2HowItWorksTitle')}:</strong> {t('step2HowItWorksText')}</li>
                                        <li className="text-lg text-gray-700"><strong>{t('step2WhyYoullLoveItTitle')}:</strong> {t('step2WhyYoullLoveItText')}</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="block-style-eighteen pt-12 md:mt-16">
                        <motion.div className="flex flex-wrap items-center justify-between" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
                            <motion.div className="w-full px-4 lg:w-6/12" variants={fadeUpVariants}>
                                <div className="text-wrapper">
                                    <h6 className="text-xl font-semibold mb-2">{t('step3Number')}</h6>
                                    <h3 className="title text-3xl lg:text-4xl font-bold mb-5"><span>{t('step3TitlePart1')}</span> {t('step3TitlePart2')}</h3>
                                    <ul>
                                        <li className="text-lg text-gray-700 mb-2"><strong>{t('step3HowItWorksTitle')}:</strong> {t('step3HowItWorksText')}</li>
                                        <li className="text-lg text-gray-700"><strong>{t('step3WhyItMattersTitle')}:</strong> {t('step3WhyItMattersText')}</li>
                                    </ul>
                                </div>
                            </motion.div>
                            <div className="w-full px-4 lg:w-6/12 mt-8 lg:mt-0">
                                <div className="screen-holder-one flex items-center justify-center p-8 rounded-lg" style={{ background: 'var(--secondry-bg-l)' }}>
                                    <div className="relative w-full h-80 flex items-center justify-center">
                                        <div className="round-bg flex items-center justify-center absolute rounded-full" style={{ width: 193, height: 193 }}>
                                            <Image src={fedExLogo} alt="FedEx" width={130} height={130} className="object-contain" />
                                        </div>
                                        <div className="round-bg flex items-center justify-center shapes logo-one absolute rounded-full" style={{ width: 65, height: 65, top: '10%', left: '10%' }}>
                                            <Image src={spl} alt="SPL" width={45} height={45} className="object-contain" />
                                        </div>
                                        <div className="round-bg flex items-center justify-center shapes logo-two absolute rounded-full" style={{ width: 105, height: 105, bottom: '5%', left: '5%' }}>
                                            <Image src={bosta} alt="Bosta" width={74} height={74} className="object-contain" />
                                        </div>
                                        <div className="round-bg flex items-center justify-center shapes logo-three absolute rounded-full" style={{ width: 81, height: 81, top: '20%', right: '15%' }}>
                                            <Image src={dhlExpress2} alt="DHL Express" width={64} height={64} className="object-contain" />
                                        </div>
                                        <div className="round-bg flex items-center justify-center shapes logo-four absolute rounded-full" style={{ width: 148, height: 148, top: '40%', right: '10%' }}>
                                            <Image src={aramexLogo} alt="Aramex" width={104} height={104} className="object-contain" />
                                        </div>
                                        <div className="round-bg flex items-center justify-center shapes logo-five absolute rounded-full" style={{ width: 105, height: 105, bottom: '10%', right: '20%' }}>
                                            <Image src={daco5026733} alt="Daco" width={77} height={77} className="object-contain" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="fancy-short-banner-eight py-20 md:py-24 relative overflow-hidden" style={{ background: 'var(--secondry-bg)' }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 gozagel-mega">
                    <motion.div className="flex flex-wrap justify-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                        <div className="w-full px-4 xl:w-8/12 lg:w-11/12 text-center">
                            <div className="title-style-seven">
                                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('ctaHeading')}</h2>
                                <p className="text-lg text-gray-700">{t('ctaSubHeading')}</p>
                            </div>
                        </div>
                    </motion.div>
                    <Link href="/sign-up" className="theme-btn-fourteen gozagel-btn-one inline-block">
                        {t('ctaButton')}
                    </Link>
                </div>
                <Image src={shape171} alt="Shape One" className="shapes shape-one absolute top-0 left-0 w-32 h-32 object-contain" width={100} height={100} />
                <Image src={shape172} alt="Shape Two" className="shapes shape-two absolute bottom-0 right-0 w-32 h-32 object-contain" width={100} height={100} />
            </div>

            <Footer />
        </div>
    )
}

export default HowItWork;