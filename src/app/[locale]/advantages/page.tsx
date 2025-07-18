"use client";

// React
import React, { useState } from 'react';
// I18n
import { useTranslations } from 'next-intl';
// Framer Motion
import { motion, Variants } from 'framer-motion';
// Components
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const Advantages = () => {

    const t = useTranslations('Advantages');

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



    // Accordion state management for each section
    const [openAccordion1, setOpenAccordion1] = useState<string | null>(null);
    const [openAccordion2, setOpenAccordion2] = useState<string | null>('collapseTwo-2'); // Default open for section 2
    const [openAccordion3, setOpenAccordion3] = useState<string | null>('collapseTwo-3'); // Default open for section 3
    const [openAccordion4, setOpenAccordion4] = useState<string | null>('collapseTwo-4'); // Default open for section 4
    const [openAccordion5, setOpenAccordion5] = useState<string | null>('collapseTwo-5'); // Default open for section 5
    const [openAccordion6, setOpenAccordion6] = useState<string | null>('collapseTwo-6'); // Default open for section 6
    const [openAccordion7, setOpenAccordion7] = useState<string | null>('collapseTwo-7'); // Default open for section 7
    const [openAccordion8, setOpenAccordion8] = useState<string | null>('collapseTwo-8'); // Default open for section 8

    const toggleAccordion = (sectionId: number, panelId: string) => {
        switch (sectionId) {
            case 1:
                setOpenAccordion1(openAccordion1 === panelId ? null : panelId);
                break;
            case 2:
                setOpenAccordion2(openAccordion2 === panelId ? null : panelId);
                break;
            case 3:
                setOpenAccordion3(openAccordion3 === panelId ? null : panelId);
                break;
            case 4:
                setOpenAccordion4(openAccordion4 === panelId ? null : panelId);
                break;
            case 5:
                setOpenAccordion5(openAccordion5 === panelId ? null : panelId);
                break;
            case 6:
                setOpenAccordion6(openAccordion6 === panelId ? null : panelId);
                break;
            case 7:
                setOpenAccordion7(openAccordion7 === panelId ? null : panelId);
                break;
            case 8:
                setOpenAccordion8(openAccordion8 === panelId ? null : panelId);
                break;
            default:
                break;
        }
    };

    return (
        <div className='main-page-wrapper'>
            <Header />
            <Hero title={t('heroHeading')} subTitle={t('heroSubHeading')} />

            
            <div className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap -mx-4 items-center">
                        <motion.div className="w-full px-4 lg:w-6/12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div className="title-style-one mb-8">
                                <h6 className="font-rubik text-gray-600 text-xl mb-2">{t('section1Number')}</h6>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('section1Title')}</h2>
                                <p className="text-lg text-gray-700">{t('section1Text')}</p>
                            </div>
                        </motion.div>
                        <motion.div className="w-full px-4 lg:w-6/12 md:mt-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div id="accordion-1" className="space-y-4">
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(1, 'collapseOne-1')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section1Panel1Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion1 === 'collapseOne-1' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion1 === 'collapseOne-1' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section1Panel1Text')}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(1, 'collapseTwo-1')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section1Panel2Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion1 === 'collapseTwo-1' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion1 === 'collapseTwo-1' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section1Panel2Text')}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(1, 'collapseThree-1')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section1Panel3Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion1 === 'collapseThree-1' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion1 === 'collapseThree-1' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section1Panel3Text')}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap -mx-4 items-center">
                        <motion.div className="w-full px-4 lg:w-6/12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div className="title-style-one mb-8">
                                <h6 className="font-rubik text-gray-600 text-xl mb-2">{t('section2Number')}</h6>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('section2Title')}</h2>
                                <p className="text-lg text-gray-700">{t('section2Text')}</p>
                            </div>
                        </motion.div>
                        <motion.div className="w-full px-4 lg:w-6/12 md:mt-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div id="accordion-2" className="space-y-4">
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(2, 'collapseOne-2')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section2Panel1Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion2 === 'collapseOne-2' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion2 === 'collapseOne-2' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section2Panel1Text')}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(2, 'collapseTwo-2')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section2Panel2Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion2 === 'collapseTwo-2' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion2 === 'collapseTwo-2' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section2Panel2Text')}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(2, 'collapseThree-2')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section2Panel3Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion2 === 'collapseThree-2' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion2 === 'collapseThree-2' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section2Panel3Text')}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap -mx-4 items-center">
                        <motion.div className="w-full px-4 lg:w-6/12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div className="title-style-one mb-8">
                                <h6 className="font-rubik text-gray-600 text-xl mb-2">{t('section3Number')}</h6>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('section3Title')}</h2>
                                <p className="text-lg text-gray-700">{t('section3Text')}</p>
                            </div>
                        </motion.div>
                        <motion.div className="w-full px-4 lg:w-6/12 md:mt-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div id="accordion-3" className="space-y-4">
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(3, 'collapseOne-3')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section3Panel1Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion3 === 'collapseOne-3' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion3 === 'collapseOne-3' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section3Panel1Text')}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(3, 'collapseTwo-3')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section3Panel2Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion3 === 'collapseTwo-3' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion3 === 'collapseTwo-3' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section3Panel2Text')}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(3, 'collapseThree-3')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section3Panel3Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion3 === 'collapseThree-3' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion3 === 'collapseThree-3' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section3Panel3Text')}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap -mx-4 items-center">
                        <motion.div className="w-full px-4 lg:w-6/12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div className="title-style-one mb-8">
                                <h6 className="font-rubik text-gray-600 text-xl mb-2">{t('section4Number')}</h6>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('section4Title')}</h2>
                                <p className="text-lg text-gray-700">{t('section4Text')}</p>
                            </div>
                        </motion.div>
                        <motion.div className="w-full px-4 lg:w-6/12 md:mt-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div id="accordion-4" className="space-y-4">
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(4, 'collapseOne-4')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section4Panel1Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion4 === 'collapseOne-4' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion4 === 'collapseOne-4' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section4Panel1Text')}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(4, 'collapseTwo-4')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section4Panel2Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion4 === 'collapseTwo-4' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion4 === 'collapseTwo-4' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section4Panel2Text')}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(4, 'collapseThree-4')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section4Panel3Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion4 === 'collapseThree-4' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion4 === 'collapseThree-4' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section4Panel3Text')}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap -mx-4 items-center">
                        <motion.div className="w-full px-4 lg:w-6/12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div className="title-style-one mb-8">
                                <h6 className="font-rubik text-gray-600 text-xl mb-2">{t('section5Number')}</h6>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('section5Title')}</h2>
                                <p className="text-lg text-gray-700">{t('section5Text')}</p>
                            </div>
                        </motion.div>
                        <motion.div className="w-full px-4 lg:w-6/12 md:mt-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div id="accordion-5" className="space-y-4">
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(5, 'collapseOne-5')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section5Panel1Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion5 === 'collapseOne-5' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion5 === 'collapseOne-5' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section5Panel1Text')}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(5, 'collapseTwo-5')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section5Panel2Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion5 === 'collapseTwo-5' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion5 === 'collapseTwo-5' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section5Panel2Text')}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap -mx-4 items-center">
                        <motion.div className="w-full px-4 lg:w-6/12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div className="title-style-one mb-8">
                                <h6 className="font-rubik text-gray-600 text-xl mb-2">{t('section6Number')}</h6>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('section6Title')}</h2>
                                <p className="text-lg text-gray-700">{t('section6Text')}</p>
                            </div>
                        </motion.div>
                        <motion.div className="w-full px-4 lg:w-6/12 md:mt-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div id="accordion-6" className="space-y-4">
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(6, 'collapseOne-6')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section6Panel1Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion6 === 'collapseOne-6' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion6 === 'collapseOne-6' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section6Panel1Text')}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(6, 'collapseTwo-6')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section6Panel2Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion6 === 'collapseTwo-6' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion6 === 'collapseTwo-6' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section6Panel2Text')}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap -mx-4 items-center">
                        <motion.div className="w-full px-4 lg:w-6/12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div className="title-style-one mb-8">
                                <h6 className="font-rubik text-gray-600 text-xl mb-2">{t('section7Number')}</h6>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('section7Title')}</h2>
                                <p className="text-lg text-gray-700">{t('section7Text')}</p>
                            </div>
                        </motion.div>
                        <motion.div className="w-full px-4 lg:w-6/12 md:mt-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div id="accordion-7" className="space-y-4">
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(7, 'collapseOne-7')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section7Panel1Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion7 === 'collapseOne-7' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion7 === 'collapseOne-7' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section7Panel1Text')}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(7, 'collapseTwo-7')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section7Panel2Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion7 === 'collapseTwo-7' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion7 === 'collapseTwo-7' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section7Panel2Text')}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(7, 'collapseThree-7')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section7Panel3Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion7 === 'collapseThree-7' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion7 === 'collapseThree-7' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section7Panel3Text')}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap -mx-4 items-center">
                        <motion.div className="w-full px-4 lg:w-6/12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div className="title-style-one mb-8">
                                <h6 className="font-rubik text-gray-600 text-xl mb-2">{t('section8Number')}</h6>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('section8Title')}</h2>
                                <p className="text-lg text-gray-700">{t('section8Text')}</p>
                            </div>
                        </motion.div>
                        <motion.div className="w-full px-4 lg:w-6/12 md:mt-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div id="accordion-8" className="space-y-4">
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(8, 'collapseOne-8')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section8Panel1Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion8 === 'collapseOne-8' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion8 === 'collapseOne-8' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section8Panel1Text')}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(8, 'collapseTwo-8')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section8Panel2Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion8 === 'collapseTwo-8' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion8 === 'collapseTwo-8' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section8Panel2Text')}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="border border-gray-200 rounded-lg shadow-sm">
                                    <div className="p-4 cursor-pointer" onClick={() => toggleAccordion(8, 'collapseThree-8')}>
                                        <h5 className="text-lg font-semibold flex justify-between items-center">
                                            {t('section8Panel3Title')}
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${openAccordion8 === 'collapseThree-8' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </h5>
                                    </div>
                                    {openAccordion8 === 'collapseThree-8' && (
                                        <div className="p-4 border-t border-gray-200">
                                            <p className="text-gray-700">{t('section8Panel3Text')}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Advantages;