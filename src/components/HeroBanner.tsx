'use client';

// Next
import Image from 'next/image';
import Link from 'next/link';
// I18n
import { useTranslations } from 'next-intl';
// Framer Motion
import { motion } from 'framer-motion';
// Components
import { PartnerSlider } from './PartnerSliderProps'
// Images
import Daco from '../../public/images/Courier_Logos2024/Daco_5026733.png';
import Shopify from '../../public/images/Sales Channels/shopify_glyph.png';
import WooCommerce from '../../public/images/Sales Channels/woocommerce-plain-wordmark.svg';
import Salla from '../../public/images/Sales Channels/salla-logo.png';
import Aramex from '../../public/images/Courier_Logos2024/aramex-logo-vector.png';
import DHL from '../../public/images/Courier_Logos2024/DHL Express2.png';
import FedEx from '../../public/images/Courier_Logos2024/FedEx-Logo-PNG-Transparent.png';
import MegaBanner from '../../public/images/assets/Mega Banner.png';

const HeroBanner = () => {
    const t = useTranslations('Home.HeroBanner');

    const partners = [
        { src: Daco, alt: 'daco', width: 95 },
        { src: Shopify, alt: 'shopify-glyph', width: 71 },
        { src: WooCommerce, alt: 'woocommerce-plain', width: 95 },
        { src: Salla, alt: 'salla-logo', width: 95 },
        { src: Aramex, alt: 'aramex-logo-vector', width: 95 },
        { src: DHL, alt: 'DHL', width: 95 },
        { src: FedEx, alt: 'FedEx-logl', width: 95 }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };



    return (
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">


            <div className="container mx-auto relative flex-col sm:flex-row flex items-center">
                <div className="flex flex-col md:flex-row flex-1">
                    <div className="w-3/4">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            className="space-y-6"
                        >
                            <motion.h1
                                variants={itemVariants}
                                className="!text-[50px] w-full  font-bold leading-tight text-gray-900"
                            >
                                <span className="relative text-primary">
                                    <span className="relative z-10">{t('titleHighlight')}</span>
                                    <motion.span
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                        className="absolute bottom-1 left-0 h-3 bg-yellow-300 z-0"
                                    />
                                </span>{' '}
                                {t('titleRest')}
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-lg md:text-xl text-gray-700 max-w-lg"
                            >
                                {t('subtitle')}
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 pt-4"
                            >
                                <Link
                                    href="/sign-up"
                                    className="theme-btn-fourteen gozagel-btn-one text-center"
                                >
                                    {t('startFree')}
                                </Link>

                                <Link
                                    href="/contact-us"
                                    className="theme-btn-fourteen gozagel-btn-one text-center"
                                >
                                    {t('talkToSales')}
                                </Link>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <a
                                    href="https://meet.gozagel.com/"
                                    target="_blank"
                                    className="inline-flex items-center text-primary hover:text-primary-dark mt-4 font-medium"
                                >
                                    {t('bookDemo')}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                <div className='flex-1'>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Image
                                src={MegaBanner}
                                alt="mega-banner-image"
                                width={400}
                                height={300}
                                className="w-full h-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>


            <PartnerSlider partners={partners} t={t} />

        </section>
    );
};

export default HeroBanner;