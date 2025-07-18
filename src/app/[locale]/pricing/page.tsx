"use client";

// Next
import Image from "next/image";
// I18n
import { useTranslations } from 'next-intl';
// Framer Motion
import { motion, Variants } from 'framer-motion';
// Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
// Image Imports
import shape171 from "../../../../public/images/shape/171.svg";
import shape172 from "../../../../public/images/shape/172.svg";


const Pricing = () => {

    const t = useTranslations('Pricing');

    // Framer Motion Variants
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



    return (
        <div className='main-page-wrapper'>
            <Header />
            <Hero title={t('heroHeading')} subTitle={t('heroSubHeading')} />

            {/* Pricing Plans Section */}
            <div className="pricing-section-four py-20 md:py-24" id="pricing">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                    <motion.div className="flex flex-wrap justify-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                        <div className="w-full px-4 xl:w-10/12 mx-auto">
                            <div className="title-style-seven text-center mb-12 md:mb-4">
                                <h2 className="text-3xl lg:text-4xl font-bold mb-4"><span>{t('pricingSectionTitlePart1')}</span> {t('pricingSectionTitlePart2')}</h2>
                                <p className="text-lg text-gray-700">{t('pricingSectionSubtitle')}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="pricing-table-area-four relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                            {/* Starter Plan */}
                            <motion.div className="w-full" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                                <div className="pr-table-wrapper bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
                                    <div className="pack-name text-xl font-bold mb-2">{t('starterPlan.name')}</div>
                                    <div className="pack-details text-gray-600 mb-4">{t('starterPlan.details')}</div>
                                    <div className="top-banner flex flex-col md:flex-row items-center justify-center p-6 rounded-lg mb-6" style={{ background: '#82ccf12d' }}>
                                        <div className="price text-5xl font-bold mr-4"><sup>$</sup>{t('starterPlan.price')}</div>
                                        <div>
                                            <span className="text-gray-700 text-lg">{t('starterPlan.perMonth')}</span>
                                            <em className="block text-gray-700 text-lg">{t('starterPlan.freeShipments')}</em>
                                        </div>
                                    </div>
                                    <ul className="pr-feature list-none text-gray-700 space-y-2 mb-8">
                                        <li>{t('starterPlan.feature1')}</li>
                                        <li>{t('starterPlan.feature2')}</li>
                                        <li>{t('starterPlan.feature3')}</li>
                                        <li>{t('starterPlan.feature4')}</li>
                                        <li>{t('starterPlan.feature5')}</li>
                                        <li>{t('starterPlan.feature6')}</li>
                                        <li>{t('starterPlan.feature7')}</li>
                                        <li>{t('starterPlan.feature8')}</li>
                                        <li>{t('starterPlan.feature9')}</li>
                                        <li>{t('starterPlan.feature10')}</li>
                                        <li>{t('starterPlan.feature11')}</li>
                                        <li className="opacity-50 line-through">{t('starterPlan.feature12')}</li>
                                        <li className="opacity-50 line-through">{t('starterPlan.feature13')}</li>
                                        <li className="opacity-50 line-through">{t('starterPlan.feature14')}</li>
                                        <li className="opacity-50 line-through">{t('starterPlan.feature15')}</li>
                                        <li className="opacity-50 line-through">{t('starterPlan.feature16')}</li>
                                    </ul>
                                    <a href="sign-up.html" className="trial-button gozagel-btn-two inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out w-full text-center mt-auto">
                                        {t('starterPlan.button')}
                                    </a>
                                </div>
                            </motion.div>

                            {/* Growth Plan */}
                            <motion.div className="w-full" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                                <div className="pr-table-wrapper active most-popular bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
                                    <div className="pack-name text-xl font-bold mb-2">{t('growthPlan.name')}</div>
                                    <div className="pack-details text-gray-600 mb-4">{t('growthPlan.details')}</div>
                                    <div className="top-banner flex flex-col md:flex-row items-center justify-center p-6 rounded-lg mb-6" style={{ background: '#4da5d82a' }}>
                                        <div className="price text-5xl font-bold mr-4"><sup>$</sup>{t('growthPlan.price')}</div>
                                        <div>
                                            <span className="text-gray-700 text-lg">{t('growthPlan.perMonth')}</span>
                                            <em className="block text-gray-700 text-lg">{t('growthPlan.perShipment')}</em>
                                        </div>
                                    </div>
                                    <ul className="pr-feature list-none text-gray-700 space-y-2 mb-8">
                                        <li>{t('growthPlan.feature1')}</li>
                                        <li>{t('growthPlan.feature2')}</li>
                                        <li>{t('growthPlan.feature3')}</li>
                                        <li>{t('growthPlan.feature4')}</li>
                                        <li>{t('growthPlan.feature5')}</li>
                                        <li>{t('growthPlan.feature6')}</li>
                                        <li>{t('growthPlan.feature7')}</li>
                                        <li>{t('growthPlan.feature8')}</li>
                                        <li>{t('growthPlan.feature9')}</li>
                                        <li>{t('growthPlan.feature10')}</li>
                                        <li>{t('growthPlan.feature11')}</li>
                                        <li className="opacity-50 line-through">{t('growthPlan.feature12')}</li>
                                        <li className="opacity-50 line-through">{t('growthPlan.feature13')}</li>
                                        <li className="opacity-50 line-through">{t('growthPlan.feature14')}</li>
                                        <li className="opacity-50 line-through">{t('growthPlan.feature15')}</li>
                                        <li className="opacity-50 line-through">{t('growthPlan.feature16')}</li>
                                    </ul>
                                    <a href="sign-up.html" className="trial-button gozagel-btn-two inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out w-full text-center mt-auto">
                                        {t('growthPlan.button')}
                                    </a>
                                </div>
                            </motion.div>

                            {/* Enterprise Plan */}
                            <motion.div className="w-full" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                                <div className="pr-table-wrapper bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
                                    <div className="pack-name text-xl font-bold mb-2">{t('enterprisePlan.name')}</div>
                                    <div className="pack-details text-gray-600 mb-4">{t('enterprisePlan.details')}</div>
                                    <div className="top-banner flex flex-col md:flex-row items-center justify-center p-6 rounded-lg mb-6" style={{ background: '#1a90bf2d' }}>
                                        <div className="price text-3xl font-bold mr-4">{t('enterprisePlan.priceText')}</div>
                                        <div>
                                            <em className="block text-gray-700 text-lg">{t('enterprisePlan.perShipment')}</em>
                                        </div>
                                    </div>
                                    <ul className="pr-feature list-none text-gray-700 space-y-2 mb-8">
                                        <li>{t('enterprisePlan.feature1')}</li>
                                        <li>{t('enterprisePlan.feature2')}</li>
                                        <li>{t('enterprisePlan.feature3')}</li>
                                        <li>{t('enterprisePlan.feature4')}</li>
                                        <li>{t('enterprisePlan.feature5')}</li>
                                        <li>{t('enterprisePlan.feature6')}</li>
                                        <li>{t('enterprisePlan.feature7')}</li>
                                        <li>{t('enterprisePlan.feature8')}</li>
                                        <li>{t('enterprisePlan.feature9')}</li>
                                        <li>{t('enterprisePlan.feature10')}</li>
                                        <li>{t('enterprisePlan.feature11')}</li>
                                        <li>{t('enterprisePlan.feature12')}</li>
                                        <li>{t('enterprisePlan.feature13')}</li>
                                        <li>{t('enterprisePlan.feature14')}</li>
                                        <li>{t('enterprisePlan.feature15')}</li>
                                        <li>{t('enterprisePlan.feature16')}</li>
                                    </ul>
                                    <a href="contact-us.html" className="trial-button gozagel-btn-two inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out w-full text-center mt-auto">
                                        {t('enterprisePlan.button')}
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="fancy-short-banner-eight py-20 md:py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-color-c1)' }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div className="flex flex-wrap justify-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                        <div className="w-full px-4 xl:w-8/12 lg:w-11/12 mx-auto">
                            <div className="title-style-seven">
                                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('ctaHeading')}</h2>
                                <p className="text-lg text-gray-700">{t('ctaSubHeading')}</p>
                            </div>
                        </div>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <a href="sign-up.html" className="theme-btn-fourteen gozagel-btn-one inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out">
                            {t('ctaButton1')}
                        </a>
                        <a href="https://meet.gozagel.com/" className="theme-btn-fourteen gozagel-btn-one inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out">
                            {t('ctaButton2')}
                        </a>
                    </div>
                </div>
                <Image src={shape171} alt="Shape One" className="shapes shape-one absolute top-0 left-0 w-32 h-32 object-contain" width={100} height={100} />
                <Image src={shape172} alt="Shape Two" className="shapes shape-two absolute bottom-0 right-0 w-32 h-32 object-contain" width={100} height={100} />
            </div>
            <Footer />
        </div>
    )
}

export default Pricing;