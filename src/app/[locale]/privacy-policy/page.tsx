"use client"

// Next
import Image from "next/image"
// React
import { useState } from "react";
// I18n
import { useTranslations, useLocale } from 'next-intl';
// Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
// Framer Motion
import { motion } from "framer-motion";
// Images
import ils10 from "../../../../public/images/assets/ils_10.svg"
import screen40 from "../../../../public/images/assets/screen_40.png"
import ils12 from "../../../../public/images/assets/ils_12.svg"

// Animation variants


const PrivacyPolicy = () => {
    const t = useTranslations('PrivacyPolicy');
    const lang = useLocale();
    const isRTL = lang == "ar";
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
    const [activeAccordionTwo, setActiveAccordionTwo] = useState<string | null>('collapseTwo');
    const [activeAccordionThree, setActiveAccordionThree] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    const toggleAccordionTwo = (id: string) => {
        setActiveAccordionTwo(activeAccordionTwo === id ? null : id);
    };

    const toggleAccordionThree = (id: string) => {
        setActiveAccordionThree(activeAccordionThree === id ? null : id);
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 }
    };


    return (
        <div className="main-page-wrapper" style={{ paddingTop: 130 }}>
            <Header />
            <Hero title={t('title')} subTitle={t('description')} />

            {/* Information Shared Section */}
            <section className="fancy-feature-eight pt-[150px] pb-[150px] md:pt-[100px] md:pb-[100px]">
                <div className="container mx-auto px-4">
                    <div className="title-style-four text-center mb-[60px] md:mb-[40px]">
                        <div className="row">
                            <div className="col-lg-10 m-auto">
                                <motion.h2
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    className="text-4xl font-bold mb-4"
                                >
                                    {t('sharedInfoTitle')}
                                </motion.h2>
                            </div>
                        </div>
                    </div>

                    {/* Block 1 */}
                    <div className="block-style-twelve mb-20">
                        <div className="flex flex-wrap items-center pt-0">
                            <motion.div
                                className={`w-full lg:w-6/12 lg:order-last lg:pl-10 md:w-8/12 ${isRTL ? "mr-auto" : "ml-auto"}`}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInRight}
                            >
                                <div className="illustration-holder">
                                    <Image
                                        src={ils10}
                                        alt={t('infoYouProvideAlt')}
                                        width={500}
                                        height={400}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                className="w-full lg:w-5/12 lg:order-first"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInLeft}
                            >
                                <div className="text-wrapper">
                                    <h6 className="text-2xl font-bold text-primary mb-2">1</h6>
                                    <h2 className="font-rubik text-3xl font-bold mb-4">{t('infoYouProvideTitle')}</h2>
                                    <p className="text-[19px] leading-[1.5]">
                                        {t('infoYouProvideContent')}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Block 2 */}
                    <div className="block-style-twelve mb-20">
                        <div className="flex flex-wrap items-center">
                            <motion.div
                                className={`w-full lg:w-6/12 md:w-8/12 ${isRTL ? "ml-auto" : "mr-auto"}`}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInLeft}
                            >
                                <div className="illustration-holder">
                                    <Image
                                        src={screen40}
                                        alt={t('financialInfoAlt')}
                                        width={500}
                                        height={400}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                className="w-full lg:w-5/12 lg:pl-10"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInRight}
                            >
                                <div className="text-wrapper">
                                    <h6 className="text-2xl font-bold text-primary mb-2">2</h6>
                                    <h2 className="font-rubik text-3xl font-bold mb-4">{t('financialInfoTitle')}</h2>
                                    <p className="text-[19px] leading-[1.5]">
                                        {t('financialInfoContent')}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Block 3 */}
                    <div className="block-style-twelve">
                        <div className="flex flex-wrap items-center">
                            <motion.div
                                className={`w-full lg:w-6/12 lg:order-last lg:pl-10 md:w-8/12 ${isRTL ? "mr-auto" : "ml-auto"}`}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInRight}
                            >
                                <div className="illustration-holder">
                                    <Image
                                        src={ils12}
                                        alt={t('autoCollectedInfoAlt')}
                                        width={500}
                                        height={400}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                className="w-full lg:w-5/12 lg:order-first"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInLeft}
                            >
                                <div className="text-wrapper">
                                    <h6 className="text-2xl font-bold text-primary mb-2">3</h6>
                                    <h2 className="font-rubik text-3xl font-bold mb-4">{t('autoCollectedInfoTitle')}</h2>
                                    <p className="text-[19px] leading-[1.5]">
                                        {t('autoCollectedInfoContent')}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sharing Personal Data Section */}
            <section className="pt-[100px] pb-[100px] bg-gray-100">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-[60px] md:mb-[30px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="mb-5 text-3xl font-bold">{t('sharingDataTitle')}</h2>
                        <p className="text-lg">{t('sharingDataSubtitle')}</p>
                    </motion.div>

                    <div className="flex justify-center">
                        <motion.div
                            className="w-full xl:w-9/12 lg:w-10/12"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="space-y-4">
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <div key={item} className="rounded-lg overflow-hidden shadow-sm">
                                        <div
                                            className="p-4 bg-white cursor-pointer flex justify-between items-center"
                                            onClick={() => toggleAccordionThree(`collapseThree${item}`)}
                                        >
                                            <h3 className="!text-lg font-semibold">
                                                {t(`sharingDataItem${item}Title`)}
                                            </h3>
                                            <span className={`transition-transform duration-300 ${activeAccordionThree === `collapseThree${item}` ? 'rotate-180' : ''}`}>
                                                ▼
                                            </span>
                                        </div>
                                        <div
                                            className={`transition-all duration-300 overflow-hidden ${activeAccordionThree === `collapseThree${item}` ? 'max-h-[500px]' : 'max-h-0'}`}
                                        >
                                            <div className="p-4 bg-gray-50">
                                                <p className="text-gray-700">
                                                    {t(`sharingDataItem${item}Content`)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Customer Rights Intro */}
            <section className="fancy-text-block-nine mt-[130px] md:mt-[80px]">
                <div className="container mx-auto px-4">
                    <div className="title-style-two text-center mb-[35px] md:mb-[10px]">
                        <div className="row">
                            <div className="col-lg-10 m-auto">
                                <motion.h2
                                    className="text-3xl font-bold"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                >
                                    {t('customerRightsTitle')}
                                </motion.h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="w-full xl:w-10/12 m-auto">
                            <motion.p
                                className="text-meta text-lg mb-4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                {t('customerRightsOptOut')}
                            </motion.p>
                            <motion.p
                                className="text-meta text-lg"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                transition={{ delay: 0.1 }}
                            >
                                {t('customerRightsAccess')}
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* GDPR Rights Section */}
            <section className="pt-[100px] pb-[100px]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-[100px] md:mb-[70px]">
                        <div className="flex justify-center">
                            <div className="w-full lg:w-7/12">
                                <motion.h3
                                    className="text-2xl font-bold"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                >
                                    {t('gdprRightsTitle')}
                                </motion.h3>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-y-4 -mx-2">
                        {/* Left Column */}
                        <div className="w-full lg:w-6/12 px-2">
                            <div className="space-y-4 md:mt-[60px]">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="border rounded-lg overflow-hidden shadow-sm">
                                        <div
                                            className="p-4 bg-white cursor-pointer flex justify-between items-center"
                                            onClick={() => toggleAccordion(`collapse${item}`)}
                                        >
                                            <h3 className="!text-lg font-semibold">
                                                {t(`gdprRight${item}Title`)}
                                            </h3>
                                            <span className={`transition-transform duration-300 ${activeAccordion === `collapse${item}` ? 'rotate-180' : ''}`}>
                                                ▼
                                            </span>
                                        </div>
                                        <div
                                            className={`transition-all duration-300 overflow-hidden ${activeAccordion === `collapse${item}` ? 'max-h-[500px]' : 'max-h-0'}`}
                                        >
                                            <div className="p-4 bg-gray-50">
                                                <p className="text-gray-700">
                                                    {t(`gdprRight${item}Content`)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="w-full lg:w-6/12 px-2">
                            <div className="space-y-4">
                                {[4, 5, 6].map((item) => (
                                    <div key={item} className="border rounded-lg overflow-hidden shadow-sm">
                                        <div
                                            className="p-4 bg-white cursor-pointer flex justify-between items-center"
                                            onClick={() => toggleAccordionTwo(`collapse${item}`)}
                                        >
                                            <h3 className="!text-lg font-semibold">
                                                {t(`gdprRight${item}Title`)}
                                            </h3>
                                            <span className={`transition-transform duration-300 ${activeAccordionTwo === `collapse${item}` ? 'rotate-180' : ''}`}>
                                                ▼
                                            </span>
                                        </div>
                                        <div
                                            className={`transition-all duration-300 overflow-hidden ${activeAccordionTwo === `collapse${item}` ? 'max-h-[500px]' : 'max-h-0'}`}
                                        >
                                            <div className="p-4 bg-gray-50">
                                                <p className="text-gray-700">
                                                    {t(`gdprRight${item}Content`)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Policy Changes Section */}
            <section className="fancy-short-banner-fifteen bg-gray-100 py-[80px]">
                <div className="container mx-auto px-4">
                    <div className="row">
                        <motion.div
                            className="w-full xl:w-8/12 lg:w-11/12 m-auto"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="title-style-seven text-center">
                                <h2 className="text-3xl font-bold mb-4">{t('policyChangesTitle')}</h2>
                                <p className="text-lg">{t('policyChangesContent')}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default PrivacyPolicy;