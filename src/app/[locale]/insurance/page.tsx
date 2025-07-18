"use client";

// Next
import Image from "next/image";
// React
import React, { useState } from 'react';
// I18n
import { useTranslations, useLocale } from 'next-intl';
// Framer Motion
import { motion, Variants } from 'framer-motion';
// Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
// Image Imports
import proofImage from "../../../../public/images/assets/Proof.png";
import packagingPhotosImage from "../../../../public/images/assets/Packaging_Photos.png";
import parcelPhotosImage from "../../../../public/images/assets/Parcel_Photos.png";


const Insurance = () => {

    const t = useTranslations('Insurance');
    const lang = useLocale()
    const isRTL = lang == "ar"

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

    // Accordion state management for the Documents section
    const [openDocumentAccordion, setOpenDocumentAccordion] = useState<string | null>(null);

    const toggleDocumentAccordion = (panelId: string) => {
        setOpenDocumentAccordion(openDocumentAccordion === panelId ? null : panelId);
    };

    return (
        <div className='main-page-wrapper'>
            <Header />
            <Hero title={t('heroHeading')} subTitle={t('heroSubHeading')} />

            <div className="faq-section-five py-20 md:py-24" id="faq">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap -mx-4">
                        <motion.div className="w-full px-4 lg:w-6/12 xl:w-5/12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div className="title-style-twelve">
                                <div className="upper-title text-lg font-semibold mb-2">{t('documentSectionTitle')}</div>
                                <h2 className="shpd-insurance-title text-3xl lg:text-4xl font-bold mb-4">{t('documentOverviewTitle')}</h2>
                                <p className="pt-6 pb-10 md:pb-8 text-lg text-gray-700">{t('documentOverviewText')}</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className={`
                                w-full px-4 lg:w-6/12 flex flex-col justify-center 
                                ${isRTL ? "lg:mr-auto" : "lg:ml-auto"} 
                                lg:mt-0 mt-8 md:mt-16
                            `}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUpVariants}
                        >
                            <div id="documentAccordion" className="space-y-4">
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleDocumentAccordion('documentCollapseOne')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center w-full text-left">
                                            {t('documentPanel1Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openDocumentAccordion === 'documentCollapseOne' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openDocumentAccordion === 'documentCollapseOne' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('documentPanel1Text')}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleDocumentAccordion('documentCollapseTwo')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center w-full text-left">
                                            {t('documentPanel2Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openDocumentAccordion === 'documentCollapseTwo' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openDocumentAccordion === 'documentCollapseTwo' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('documentPanel2Text')}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleDocumentAccordion('documentCollapseThree')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center w-full text-left">
                                            {t('documentPanel3Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openDocumentAccordion === 'documentCollapseThree' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openDocumentAccordion === 'documentCollapseThree' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">
                                                {t('documentPanel3Text1')}
                                            </p>
                                            <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
                                                <li>{t('documentPanel3ListItem1')}</li>
                                                <li>{t('documentPanel3ListItem2')}</li>
                                            </ul>
                                            <p className="text-gray-700 mt-2" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="fancy-text-block-nine py-20 md:py-24 relative overflow-hidden mt-20 md:mt-16" style={{ background: 'var(--secondry-bg)' }}>
                <div className="shapes shape-one absolute rounded-full opacity-50" />
                <div className="shapes shape-two absolute rounded-full opacity-50" />
                <div className="shapes shape-three absolute rounded-full opacity-50" />
                <div className="shapes shape-four absolute rounded-full opacity-50" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="title-style-two text-center mb-8 md:mb-4">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4 lg:w-10/12 mx-auto">
                                <p className="text-lg font-semibold text-gray-600 mb-2">{t('parcelSectionTitle')}</p>
                                <h2 className="text-3xl lg:text-4xl font-bold">{t('parcelOverviewTitle')}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4 xl:w-10/12 mx-auto">
                            <motion.p className="text-meta text-lg text-gray-700 leading-relaxed mb-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>{t('parcelOverviewText1')}</motion.p>
                            <motion.p className="text-meta text-lg text-gray-700 leading-relaxed" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>{t('parcelOverviewText2')}</motion.p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="title-style-five text-center mb-12 md:mb-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">

                            {t('claimsProcessTitle')}

                        </h2>
                        <p className="text-lg text-gray-700">{t('claimsProcessSubtitle')}</p>
                    </div>
                    <div className="flex flex-wrap justify-center -mx-4">
                        <motion.div className="w-full px-4 md:w-4/12 lg:w-4/12 mb-8 md:mb-0" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div className="block-style-fourteen text-center p-6 rounded-lg shadow-md h-full flex flex-col items-center justify-start">
                                <div className="illustration mb-4">
                                    <Image src={proofImage} alt="Proof of Damage" width={100} height={100} className="object-contain" />
                                </div>
                                <div className="title text-xl font-bold mb-2">{t('claimsProofTitle')}</div>
                                <p className="font-rubik !text-md text-gray-700">{t('claimsProofText')}</p>
                            </div>
                        </motion.div>
                        <motion.div className="w-full px-4 md:w-4/12 lg:w-4/12 mb-8 md:mb-0" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div className="block-style-fourteen arrow-shape text-center p-6 rounded-lg shadow-md h-full flex flex-col items-center justify-start">
                                <div className="illustration mb-4">
                                    <Image src={packagingPhotosImage} alt="Packaging Photos" width={100} height={100} className="object-contain" />
                                </div>
                                <div className="title text-xl font-bold mb-2">{t('claimsPackagingTitle')}</div>
                                <p className="font-rubik !text-md text-gray-700">{t('claimsPackagingText')}</p>
                            </div>
                        </motion.div>
                        <motion.div className="w-full px-4 md:w-4/12 lg:w-4/12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div className="block-style-fourteen text-center p-6 rounded-lg shadow-md h-full flex flex-col items-center justify-start">
                                <div className="illustration mb-4">
                                    <Image src={parcelPhotosImage} alt="Parcel Photos" width={100} height={100} className="object-contain" />
                                </div>
                                <div className="title text-xl font-bold mb-2">{t('claimsParcelPhotosTitle')}</div>
                                <p className="font-rubik !text-md text-gray-700">{t('claimsParcelPhotosText')}</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex flex-wrap justify-center text-center mt-24">
                        <p className="text-lg text-gray-700">{t('claimsAssessmentText')}</p>
                    </div>
                </div>
            </div>

            <div className="fancy-short-banner-fifteen py-20 md:py-24 relative overflow-hidden" style={{ background: 'var(--secondry-bg)' }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div className="flex flex-wrap justify-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                        <div className="w-full px-4 xl:w-8/12 lg:w-11/12 text-center">
                            <div className="title-style-seven">
                                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('importantNoteTitle')}</h2>
                                <p className="text-lg text-gray-700">
                                    {t('importantNoteText1')}
                                    <br />
                                    {t('importantNoteText2')}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default Insurance;