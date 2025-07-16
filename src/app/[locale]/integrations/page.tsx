"use client";

// Next
import Image from "next/image";
import Link from "next/link"
// I18n
import { useTranslations } from 'next-intl';
// Framer Motion
import { motion, Variants } from 'framer-motion';
// Components
import Header from "@/components/Header"
import Footer from "@/components/Footer";
// Image Imports for Sales Channels
import shopifyGlyph from "../../../../public/images/Sales Channels/shopify_glyph.png";
import a45cf75986e5f90595049b68725bfd87 from "../../../../public/images/Sales Channels/a45cf75986e5f90595049b68725bfd87.png";
import zidEnLogoColored from "../../../../public/images/Sales Channels/zid-en-logo-colored.png";
import instagramLogo2022 from "../../../../public/images/Sales Channels/Instagram_logo_2022.svg.png";
import woocommercePlainWordmark from "../../../../public/images/Sales Channels/woocommerce-plain-wordmark.svg";
import sallaLogo from "../../../../public/images/Sales Channels/salla-logo.png";
// Image Imports for Courier Logos
import fedExLogo from "../../../../public/images/Courier_Logos2024/FedEx-Logo-PNG-Transparent.png";
import spl from "../../../../public/images/Courier_Logos2024/SPL.png";
import bosta from "../../../../public/images/Courier_Logos2024/bosta.png";
import dhlExpress2 from "../../../../public/images/Courier_Logos2024/DHL Express2.png";
import aramexLogo from "../../../../public/images/Courier_Logos2024/1280px-Aramex_logo.svg.png";
import daco5026733 from "../../../../public/images/Courier_Logos2024/Daco_5026733.png";
// General Shape Image
import shape170 from "../../../../public/images/shape/170.svg"; // Assuming this is a general shape used in both sections


const Integrations = () => {

    const t = useTranslations('Integrations');

    // Framer Motion Variants
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
            {/* Hero Section */}
            <div className="fancy-hero-three relative overflow-hidden" style={{ background: 'var(--secondry-bg)' }}>
                <div className="shapes shape-one absolute rounded-full" style={{ backgroundColor: 'var(--main-color)' }} />
                <div className="shapes shape-two absolute rounded-full" style={{ backgroundColor: 'var(--main-color)' }} />
                <div className="shapes shape-three absolute rounded-full" style={{ backgroundColor: 'var(--main-color)' }} />
                <div className="shapes shape-four absolute rounded-full" style={{ backgroundColor: 'var(--main-color)' }} />
                <div className="shapes shape-five absolute rounded-full" style={{ backgroundColor: 'var(--main-color)' }} />
                <div className="shapes shape-six absolute rounded-full" style={{ backgroundColor: 'var(--main-color)' }} />
                <motion.div
                    className="bg-wrapper relative z-10 py-12 lg:py-20"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="flex flex-wrap justify-center"
                            variants={containerVariants}
                        >
                            <div className="w-full px-4 lg:w-10/12 xl:w-9/12 text-center mx-auto">
                                <motion.h1 className="heading text-4xl lg:text-5xl font-bold leading-tight mb-4" variants={itemVariants}>{t('heroHeading')}</motion.h1>
                                <motion.p className="sub-heading text-lg text-gray-700 leading-relaxed" variants={itemVariants}>
                                    {t('heroSubHeading')}
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Integrations (Sales Channel / Courier) */}
            <div className="fancy-feature-sixteen py-20 md:py-24" id="feature">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Sales Channel Integrations */}
                    <div className="block-style-eighteen mb-20 md:mb-24">
                        <motion.div className="flex flex-wrap items-center -mx-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
                            <motion.div className="w-full lg:w-5/12 px-4" variants={fadeUpVariants}>
                                <div className="text-wrapper">
                                    <h6 className="text-xl font-semibold mb-2">{t('salesChannel.number')}</h6>
                                    <h3 className="title text-3xl lg:text-4xl font-bold mb-5"><span>{t('salesChannel.titlePart1')}</span> {t('salesChannel.titlePart2')}</h3>
                                    <p className="text-lg text-gray-700 leading-relaxed">{t('salesChannel.description')}</p>
                                </div>
                            </motion.div>
                            <div className="w-full lg:w-7/12 px-4 mt-8 lg:mt-0">
                                <div className="screen-holder-one relative flex items-center justify-center p-8 rounded-lg min-h-[400px]" style={{ background: 'var(--secondry-bg-l)' }}>
                                    <div className="relative w-full h-full flex items-center justify-center">
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
                                        <Image src={shape170} alt="Shape Background" className="shapes shape-one absolute w-full h-full object-cover opacity-10" width={500} height={500} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Courier Integrations */}
                    <div className="block-style-eighteen mt-20 md:mt-24">
                        <motion.div className="flex flex-wrap items-center -mx-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
                            <motion.div className="w-full lg:w-5/12 px-4 order-lg-last" variants={fadeUpVariants}>
                                <div className="text-wrapper">
                                    <h6 className="text-xl font-semibold mb-2">{t('courier.number')}</h6>
                                    <h3 className="title text-3xl lg:text-4xl font-bold mb-5"><span>{t('courier.titlePart1')}</span> {t('courier.titlePart2')}</h3>
                                    <p className="text-lg text-gray-700 leading-relaxed">{t('courier.description')}</p>
                                </div>
                            </motion.div>
                            <div className="w-full lg:w-7/12 px-4 order-lg-first mt-8 lg:mt-0">
                                <div className="screen-holder-one relative flex items-center justify-center p-8 rounded-lg min-h-[400px]" style={{ background: 'var(--secondry-bg-l)' }}>
                                    <div className="relative w-full h-full flex items-center justify-center">
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
                                        <Image src={shape170} alt="Shape Background" className="shapes shape-one absolute w-full h-full object-cover opacity-10" width={500} height={500} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Why Integrate CTA */}
            <div className="fancy-text-block-nine py-20 md:py-24 relative overflow-hidden mt-20 md:mt-24" id="why-us" style={{ background: 'var(--secondry-bg)' }}>
                <div className="shapes shape-one absolute rounded-full opacity-50" />
                <div className="shapes shape-two absolute rounded-full opacity-50" />
                <div className="shapes shape-three absolute rounded-full opacity-50" />
                <div className="shapes shape-four absolute rounded-full opacity-50" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div className="title-style-two text-center mb-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4 lg:w-10/12 mx-auto">
                                <p className="text-lg font-semibold text-gray-600 mb-2">{t('whyIntegrate.subheading')}</p>
                                <h2 className="text-3xl lg:text-4xl font-bold">{t('whyIntegrate.heading')}</h2>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="flex flex-wrap justify-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                        <div className="w-full px-4 xl:w-10/12 mx-auto">
                            <p className="text-meta text-lg text-gray-700 leading-relaxed mb-8">{t('whyIntegrate.description')}</p>
                        </div>
                    </motion.div>
                    <Link href="/sign-up" className="theme-btn-ten">
                        subscip
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Integrations;
