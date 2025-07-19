'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations , useLocale } from 'next-intl';
import { motion, Variants } from 'framer-motion';
import { PartnerSlider } from './PartnerSliderProps';
import Daco from '../../public/images/Courier_Logos2024/Daco_5026733.png';
import Shopify from '../../public/images/Sales Channels/shopify_glyph.png';
import WooCommerce from '../../public/images/Sales Channels/woocommerce-plain-wordmark.svg';
import Salla from '../../public/images/Sales Channels/salla-logo.png';
import Aramex from '../../public/images/Courier_Logos2024/aramex-logo-vector.png';
import DHL from '../../public/images/Courier_Logos2024/DHL Express2.png';
import FedEx from '../../public/images/Courier_Logos2024/FedEx-Logo-PNG-Transparent.png';
import MegaBanner from '../../public/images/assets/Mega Banner.png';

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

const imageVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "backOut"
        }
    }
};

const HeroBanner = () => {
    const t = useTranslations('Home.HeroBanner');
    const lang = useLocale()
    const isRTL = lang == "ar"

    const partners = [
        { src: Daco, alt: 'daco', width: 95 },
        { src: Shopify, alt: 'shopify-glyph', width: 71 },
        { src: WooCommerce, alt: 'woocommerce-plain', width: 95 },
        { src: Salla, alt: 'salla-logo', width: 95 },
        { src: Aramex, alt: 'aramex-logo-vector', width: 95 },
        { src: DHL, alt: 'DHL', width: 95 },
        { src: FedEx, alt: 'FedEx-logl', width: 95 }
    ];


    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="hero-banner-seven lg-container gozagel-hero-section"
            id="home"
        >
            <div className="container mx-auto px-6">
                <motion.div
                    className="illustration-container gozagel-hero-section-image"
                    variants={imageVariants}
                >
                    <Image
                        src={MegaBanner}
                        style={{ animation: 'none' }}
                        alt="mega-banner-image"
                        priority
                    />
                </motion.div>

                <motion.div
                    className="flex flex-wrap"
                    variants={containerVariants}
                >
                    <div className={`
                        w-full lg:w-1/2 
                        ${isRTL ? "lg:ml-auto" : "lg:mr-auto"}
                    `}>
                        <motion.div
                            className="title-style-seven"
                            variants={itemVariants}
                        >
                            <h2>
                                {t.rich('title', {
                                    span: (chunks: React.ReactNode) => (
                                        <span>{chunks}</span>
                                    )
                                })}
                            </h2>
                        </motion.div>

                        <motion.p
                            className="hero-sub-heading"
                            style={{ paddingBottom: 40 }}
                            variants={itemVariants}
                        >
                            {t('subtitle')}
                        </motion.p>

                        <motion.div
                            className="flex flex-col"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="flex cta"
                                style={{ gap: 15 }}
                                variants={containerVariants}
                            >
                                <motion.div variants={itemVariants}>
                                    <Link
                                        href={`/${lang}/sign-up`}
                                        className={`
                                            theme-btn-fourteen gozagel-btn-one text-center mb-4 hover:scale-105 transition-transform duration-300
                                            ${isRTL ? "!py-2" : "!py-3"}
                                        `}
                                    >
                                        {t('cta.startFree')}
                                    </Link>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <Link
                                        href={`/${lang}/contact-us`}
                                        className={`
                                            theme-btn-fourteen gozagel-btn-one text-center mb-4 hover:scale-105 transition-transform duration-300
                                            ${isRTL ? "!py-2" : "!py-3"}
                                        `}
                                    >
                                        {t('cta.talkSales')}
                                    </Link>
                                </motion.div>
                            </motion.div>

                            <motion.a
                                href="https://meet.gozagel.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="info hover:text-opacity-80 transition-colors duration-300"
                                variants={itemVariants}
                            >
                                {t('cta.bookDemo')}
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <PartnerSlider partners={partners} t={t} />
        </motion.div>
    );
};

export default HeroBanner;