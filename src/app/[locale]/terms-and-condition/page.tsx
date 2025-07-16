"use client";

// I18n
import { useTranslations } from 'next-intl';
// Framer Motion
import { motion, Variants } from 'framer-motion';
import React, { useState } from 'react';

const TermsAndCondition = () => {

    const t = useTranslations('TermsAndCondition');

    // State to manage active tab
    const [activeTab, setActiveTab] = useState('opt1');

    // Framer Motion Variants
    const fadeInVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const slideInFromLeftVariants: Variants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const slideInFromRightVariants: Variants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className='main-page-wrapper'>
            <div className="terms_and_policy py-20 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap lg:flex-nowrap -mx-4">
                        {/* Tabs Navigation */}
                        <motion.div
                            className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0 sticy"
                            initial="hidden"
                            animate="visible"
                            variants={slideInFromLeftVariants}
                        >
                            <ul className="flex flex-col rounded-lg overflow-hidden shadow-lg" style={{ background: 'linear-gradient(to left, #F9F9F9, rgba(115, 33, 84, 0.1))' }}>
                                {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
                                    <li className="w-full" key={`opt${num}`}>
                                        <a
                                            className={`block py-3 px-4 text-start font-semibold transition-colors duration-300 ${activeTab === `opt${num}` ? 'bg-purple-700 text-white' : 'text-gray-700 hover:bg-purple-100'}`}
                                            onClick={() => setActiveTab(`opt${num}`)}
                                            href={`#opt${num}`}
                                        >
                                            {t(`tab${num}.title`)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Tab Content */}
                        <motion.div
                            className="w-full lg:w-8/12 px-4"
                            initial="hidden"
                            animate="visible"
                            variants={slideInFromRightVariants}
                        >
                            <div className="tab-content bg-white p-8">
                                {activeTab === 'opt1' && (
                                    <motion.div key="opt1-content" initial="hidden" animate="visible" variants={fadeInVariants}>
                                        <h2 className="text-3xl font-bold mb-2">{t('tab1.contentTitle')}</h2>
                                        <div className="update-date text-sm text-gray-500 mb-4">{t('tab1.lastUpdated')}</div>
                                        <p className="text-gray-700 leading-relaxed">{t('tab1.contentP1')}</p>
                                    </motion.div>
                                )}
                                {activeTab === 'opt2' && (
                                    <motion.div key="opt2-content" initial="hidden" animate="visible" variants={fadeInVariants}>
                                        <h2 className="text-3xl font-bold mb-2">{t('tab2.contentTitle')}</h2>
                                        <div className="update-date text-sm text-gray-500 mb-4">{t('tab2.lastUpdated')}</div>
                                        <p className="text-gray-700 leading-relaxed mb-4">{t('tab2.contentP1')}</p>
                                        <p className="text-gray-700 leading-relaxed">
                                            {t('tab2.contentP2Text')}
                                            <a href="https://gozagel.com/prohibited-items" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">{t('tab2.contentP2Link')}</a>
                                        </p>
                                    </motion.div>
                                )}
                                {activeTab === 'opt3' && (
                                    <motion.div key="opt3-content" initial="hidden" animate="visible" variants={fadeInVariants}>
                                        <h2 className="text-3xl font-bold mb-2">{t('tab3.contentTitle')}</h2>
                                        <div className="update-date text-sm text-gray-500 mb-4">{t('tab3.lastUpdated')}</div>
                                        <h3 className="text-2xl font-semibold mb-2">{t('tab3.subheading1')}</h3>
                                        <p className="text-gray-700 leading-relaxed mb-4">{t('tab3.contentP1')}</p>
                                        <h3 className="text-2xl font-semibold mb-2">{t('tab3.subheading2')}</h3>
                                        <p className="text-gray-700 leading-relaxed mb-4">{t('tab3.contentP2')}</p>
                                        <h3 className="text-2xl font-semibold mb-2">{t('tab3.subheading3')}</h3>
                                        <ul className="list-disc list-inside ml-4 text-gray-700 leading-relaxed space-y-2 mb-4">
                                            <li><b>{t('tab3.listItem1Bold')}:</b> {t('tab3.listItem1Text')}</li>
                                            <li>
                                                <b>{t('tab3.listItem2Bold')}:</b>
                                                <p>{t('tab3.listItem2Text')}</p>
                                                <ul className="list-circle list-inside ml-4 mt-1">
                                                    <li>{t('tab3.listItem2SubItem1')}</li>
                                                    <li>{t('tab3.listItem2SubItem2')}</li>
                                                    <li>{t('tab3.listItem2SubItem3')}</li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <h3 className="text-2xl font-semibold mb-2">{t('tab3.subheading4')}</h3>
                                        <ul className="list-disc list-inside ml-4 text-gray-700 leading-relaxed space-y-2">
                                            <li><b>{t('tab3.listItem3Bold')}:</b> {t('tab3.listItem3Text')}</li>
                                            <li>{t('tab3.listItem4Text')}</li>
                                            <li>{t('tab3.listItem5Text')}</li>
                                        </ul>
                                    </motion.div>
                                )}
                                {activeTab === 'opt4' && (
                                    <motion.div key="opt4-content" initial="hidden" animate="visible" variants={fadeInVariants}>
                                        <h2 className="text-3xl font-bold mb-2">{t('tab4.contentTitle')}</h2>
                                        <div className="update-date text-sm text-gray-500 mb-4">{t('tab4.lastUpdated')}</div>
                                        <ul className="list-disc list-inside ml-4 text-gray-700 leading-relaxed space-y-2">
                                            <li>
                                                <b>{t('tab4.listItem1Bold')}:</b>
                                                <p>{t('tab4.listItem1Text1')} <b>{t('tab4.listItem1Text2')}</b>.</p>
                                            </li>
                                            <li>
                                                <b>{t('tab4.listItem2Bold')}:</b>
                                                <p>{t('tab4.listItem2Text1')} <b>{t('tab4.listItem2Text2')}</b>.</p>
                                            </li>
                                        </ul>
                                    </motion.div>
                                )}
                                {activeTab === 'opt5' && (
                                    <motion.div key="opt5-content" initial="hidden" animate="visible" variants={fadeInVariants}>
                                        <h2 className="text-3xl font-bold mb-2">{t('tab5.contentTitle')}</h2>
                                        <div className="update-date text-sm text-gray-500 mb-4">{t('tab5.lastUpdated')}</div>
                                        <p className="text-gray-700 leading-relaxed">
                                            {t('tab5.contentP1Text1')} <b>{t('tab5.contentP1Text2')}</b> {t('tab5.contentP1Text3')} <b>{t('tab5.contentP1Text4')}</b>.
                                            <br />
                                            {t('tab5.contentP2')}
                                        </p>
                                    </motion.div>
                                )}
                                {activeTab === 'opt6' && (
                                    <motion.div key="opt6-content" initial="hidden" animate="visible" variants={fadeInVariants}>
                                        <h2 className="text-3xl font-bold mb-2">{t('tab6.contentTitle')}</h2>
                                        <div className="update-date text-sm text-gray-500 mb-4">{t('tab6.lastUpdated')}</div>
                                        <h3 className="text-2xl font-semibold mb-2">{t('tab6.subheading1')}</h3>
                                        <ul className="list-disc list-inside ml-4 text-gray-700 leading-relaxed space-y-2">
                                            <li>
                                                <h4 className="text-xl font-semibold inline">{t('tab6.listItem1Title')}:</h4> <p className="inline">{t('tab6.listItem1Text')}</p>
                                            </li>
                                            <li>
                                                <h4 className="text-xl font-semibold inline">{t('tab6.listItem2Title')}:</h4> <p className="inline">{t('tab6.listItem2Text')}</p>
                                            </li>
                                        </ul>
                                    </motion.div>
                                )}
                                {activeTab === 'opt7' && (
                                    <motion.div key="opt7-content" initial="hidden" animate="visible" variants={fadeInVariants}>
                                        <h2 className="text-3xl font-bold mb-2">{t('tab7.contentTitle')}</h2>
                                        <div className="update-date text-sm text-gray-500 mb-4">{t('tab7.lastUpdated')}</div>
                                        <p className="text-gray-700 leading-relaxed">{t('tab7.contentP1')}</p>
                                    </motion.div>
                                )}
                                {activeTab === 'opt8' && (
                                    <motion.div key="opt8-content" initial="hidden" animate="visible" variants={fadeInVariants}>
                                        <h2 className="text-3xl font-bold mb-2">{t('tab8.contentTitle')}</h2>
                                        <div className="update-date text-sm text-gray-500 mb-4">{t('tab8.lastUpdated')}</div>
                                        <p className="text-gray-700 leading-relaxed">{t('tab8.contentP1')}</p>
                                    </motion.div>
                                )}
                                {activeTab === 'opt9' && (
                                    <motion.div key="opt9-content" initial="hidden" animate="visible" variants={fadeInVariants}>
                                        <h2 className="text-3xl font-bold mb-2">{t('tab9.contentTitle')}</h2>
                                        <div className="update-date text-sm text-gray-500 mb-4">{t('tab9.lastUpdated')}</div>
                                        <p className="text-gray-700 leading-relaxed">{t('tab9.contentP1')}</p>
                                    </motion.div>
                                )}
                                {activeTab === 'opt10' && (
                                    <motion.div key="opt10-content" initial="hidden" animate="visible" variants={fadeInVariants}>
                                        <h2 className="text-3xl font-bold mb-2">{t('tab10.contentTitle')}</h2>
                                        <div className="update-date text-sm text-gray-500 mb-4">{t('tab10.lastUpdated')}</div>
                                        <p className="text-gray-700 leading-relaxed">{t('tab10.contentP1')}</p>
                                    </motion.div>
                                )}
                                {activeTab === 'opt11' && (
                                    <motion.div key="opt11-content" initial="hidden" animate="visible" variants={fadeInVariants}>
                                        <h2 className="text-3xl font-bold mb-2">{t('tab11.contentTitle')}</h2>
                                        <div className="update-date text-sm text-gray-500 mb-4">{t('tab11.lastUpdated')}</div>
                                        <ul className="list-disc list-inside ml-4 text-gray-700 leading-relaxed space-y-2">
                                            <li>{t('tab11.listItem1')}</li>
                                            <li>{t('tab11.listItem2')}</li>
                                            <li>{t('tab11.listItem3')}</li>
                                        </ul>
                                    </motion.div>
                                )}
                                {activeTab === 'opt12' && (
                                    <motion.div key="opt12-content" initial="hidden" animate="visible" variants={fadeInVariants}>
                                        <h2 className="text-3xl font-bold mb-2">{t('tab12.contentTitle')}</h2>
                                        <div className="update-date text-sm text-gray-500 mb-4">{t('tab12.lastUpdated')}</div>
                                        <ul className="list-disc list-inside ml-4 text-gray-700 leading-relaxed space-y-2">
                                            <li>{t('tab12.listItem1')}</li>
                                            <li>{t('tab12.listItem2')}</li>
                                            <li>{t('tab12.listItem3')}</li>
                                        </ul>
                                    </motion.div>
                                )}
                                {activeTab === 'opt13' && (
                                    <motion.div key="opt13-content" initial="hidden" animate="visible" variants={fadeInVariants}>
                                        <h2 className="text-3xl font-bold mb-2">{t('tab13.contentTitle')}</h2>
                                        <div className="update-date text-sm text-gray-500 mb-4">{t('tab13.lastUpdated')}</div>
                                        <p className="text-gray-700 leading-relaxed">{t('tab13.contentP1')}</p>
                                    </motion.div>
                                )}
                                {activeTab === 'opt14' && (
                                    <motion.div key="opt14-content" initial="hidden" animate="visible" variants={fadeInVariants}>
                                        <h2 className="text-3xl font-bold mb-2">{t('tab14.contentTitle')}</h2>
                                        <div className="update-date text-sm text-gray-500 mb-4">{t('tab14.lastUpdated')}</div>
                                        <p className="text-gray-700 leading-relaxed">{t('tab14.contentP1')}</p>
                                    </motion.div>
                                )}
                                {activeTab === 'opt15' && (
                                    <motion.div key="opt15-content" initial="hidden" animate="visible" variants={fadeInVariants}>
                                        <h2 className="text-3xl font-bold mb-2">{t('tab15.contentTitle')}</h2>
                                        <div className="update-date text-sm text-gray-500 mb-4">{t('tab15.lastUpdated')}</div>
                                        <p className="text-gray-700 leading-relaxed">{t('tab15.contentP1')}</p>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsAndCondition;