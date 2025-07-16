'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
// Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicyPage: React.FC = () => { // Removed the empty interface type
    const t = useTranslations('privacyPolicyPage');

    // State for the "Sharing Your Personal Data" accordion
    const [openAccordionThree, setOpenAccordionThree] = useState<string | null>(null);

    const toggleAccordionThree = (id: string) => {
        setOpenAccordionThree(openAccordionThree === id ? null : id);
    };

    // State for the "Customer Rights" accordions
    const [openAccordionLeft, setOpenAccordionLeft] = useState<string | null>('collapseTwo'); // Bootstrap had 'collapse show' for this one
    const [openAccordionRight, setOpenAccordionRight] = useState<string | null>(null);

    const toggleAccordionLeft = (id: string) => {
        setOpenAccordionLeft(openAccordionLeft === id ? null : id);
    };

    const toggleAccordionRight = (id: string) => {
        setOpenAccordionRight(openAccordionRight === id ? null : id);
    };

    return (
        <div className='main-page-wrapper'>
            <Header />
            <div className="fancy-hero-three relative overflow-hidden py-20 lg:py-32" style={{ background: 'var(--secondry-bg)' }}>
                <div className="shapes shape-one" style={{ backgroundColor: 'var(--main-color)' }}></div>
                <div className="shapes shape-two" style={{ backgroundColor: 'var(--main-color)' }}></div>
                <div className="shapes shape-three" style={{ backgroundColor: 'var(--main-color)' }}></div>
                <div className="shapes shape-four" style={{ backgroundColor: 'var(--main-color)' }}></div>
                <div className="shapes shape-five" style={{ backgroundColor: 'var(--main-color)' }}></div>
                <div className="shapes shape-six" style={{ backgroundColor: 'var(--main-color)' }}></div>
                <div className="bg-wrapper relative z-10">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="w-full xl:w-9/12 lg:w-10/12 mx-auto">
                                <h1 className="heading text-4xl lg:text-5xl font-bold text-center text-gray-900">
                                    {t('heroSection.title')}
                                </h1>
                                <p className="sub-heading text-lg text-center text-gray-600 mt-4">
                                    {t('heroSection.description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fancy-feature-eight pt-[150px] pb-[150px] md:pt-[100px]">
                <div className="container mx-auto px-4">
                    <div className="title-style-four text-center mb-[60px] md:mb-[40px]">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-10/12 mx-auto">
                                <h2 className="text-4xl font-bold text-gray-900">
                                    {t('informationShared.title')}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="block-style-twelve">
                        <div className="flex flex-wrap items-center pt-0">
                            <div className="w-full md:w-8/12 lg:w-6/12 ml-auto lg:order-last" data-aos="fade-left" data-aos-duration="1200">
                                <div className="illustration-holder flex justify-center">
                                    <Image src="/images/assets/ils_10.svg" alt="Illustration" width={500} height={350} />
                                </div>
                            </div>
                            <div className="w-full lg:w-5/12 lg:order-first mt-8 lg:mt-0" data-aos="fade-right" data-aos-duration="1200">
                                <div className="text-wrapper">
                                    <h6 className="text-xl font-semibold">1</h6>
                                    <h2 className="font-rubik title text-3xl font-bold mt-2 mb-4">
                                        {t('informationShared.infoProvide.title')}
                                    </h2>
                                    <p style={{ fontSize: '19px', lineHeight: '1.5' }} className="text-gray-700">
                                        {t('informationShared.infoProvide.description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="block-style-twelve mt-16">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full md:w-8/12 lg:w-6/12 mr-auto" data-aos="fade-right" data-aos-duration="1200">
                                <div className="illustration-holder flex justify-center">
                                    <Image src="/images/assets/screen_40.png" alt="Illustration" width={500} height={350} />
                                </div>
                            </div>
                            <div className="w-full lg:w-5/12 mt-8 lg:mt-0" data-aos="fade-left" data-aos-duration="1200">
                                <div className="text-wrapper">
                                    <h6 className="text-xl font-semibold">2</h6>
                                    <h2 className="font-rubik title text-3xl font-bold mt-2 mb-4">
                                        {t('informationShared.financialInfo.title')}
                                    </h2>
                                    <p style={{ fontSize: '19px', lineHeight: '1.5' }} className="text-gray-700">
                                        {t('informationShared.financialInfo.description').split('<br>').map((line, index) => (
                                            <React.Fragment key={index}>
                                                {line}
                                                {index < t('informationShared.financialInfo.description').split('<br>').length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="block-style-twelve mt-16">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full md:w-8/12 lg:w-6/12 ml-auto lg:order-last" data-aos="fade-left" data-aos-duration="1200">
                                <div className="illustration-holder flex justify-center">
                                    <Image src="/images/assets/ils_12.svg" alt="Illustration" width={500} height={350} />
                                </div>
                            </div>
                            <div className="w-full lg:w-5/12 lg:order-first mt-8 lg:mt-0" data-aos="fade-right" data-aos-duration="1200">
                                <div className="text-wrapper">
                                    <h6 className="text-xl font-semibold">3</h6>
                                    <h2 className="font-rubik title text-3xl font-bold mt-2 mb-4">
                                        {t('informationShared.autoCollectedInfo.title')}
                                    </h2>
                                    <p style={{ fontSize: '19px', lineHeight: '1.5' }} className="text-gray-700">
                                        {t('informationShared.autoCollectedInfo.description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-[100px] pb-[100px]" style={{ background: 'var(--secondry-bg)' }}>
                <div className="container mx-auto px-4">
                    <div className="title-style-five text-center mb-[60px] md:mb-[30px]">
                        <h2 className="mb-[20px] text-4xl font-bold text-gray-900">
                            {t('sharingPersonalData.title')}
                        </h2>
                        <p className="text-lg text-gray-700">
                            {t('sharingPersonalData.description')}
                        </p>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-full xl:w-9/12 lg:w-10/12 mx-auto" data-aos="fade-up" data-aos-duration="1200">
                            <div id="accordionThree" className="accordion-style-four space-y-4">
                                <div className="card border rounded-lg overflow-hidden">
                                    <div className="card-header bg-gray-100 p-4 cursor-pointer" id="headingOne1">
                                        <h5 className="mb-0">
                                            <button
                                                className="w-full text-left text-lg font-semibold text-gray-800 focus:outline-none flex justify-between items-center"
                                                onClick={() => toggleAccordionThree('collapseOne1')}
                                                aria-expanded={openAccordionThree === 'collapseOne1'}
                                                aria-controls="collapseOne1"
                                            >
                                                {t('sharingPersonalData.serviceProviders.title')}
                                                <span className="transform transition-transform duration-200">
                                                    {openAccordionThree === 'collapseOne1' ? '−' : '+'}
                                                </span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne1" className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openAccordionThree === 'collapseOne1' ? 'max-h-screen' : 'max-h-0'}`}>
                                        <div className="card-body p-4 bg-white">
                                            <p className="text-gray-700">{t('sharingPersonalData.serviceProviders.description')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border rounded-lg overflow-hidden">
                                    <div className="card-header bg-gray-100 p-4 cursor-pointer" id="headingTwo1">
                                        <h5 className="mb-0">
                                            <button
                                                className="w-full text-left text-lg font-semibold text-gray-800 focus:outline-none flex justify-between items-center"
                                                onClick={() => toggleAccordionThree('collapseTwo1')}
                                                aria-expanded={openAccordionThree === 'collapseTwo1'}
                                                aria-controls="collapseTwo1"
                                            >
                                                {t('sharingPersonalData.complianceLegal.title')}
                                                <span className="transform transition-transform duration-200">
                                                    {openAccordionThree === 'collapseTwo1' ? '−' : '+'}
                                                </span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo1" className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openAccordionThree === 'collapseTwo1' ? 'max-h-screen' : 'max-h-0'}`}>
                                        <div className="card-body p-4 bg-white">
                                            <p className="text-gray-700">{t('sharingPersonalData.complianceLegal.description')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border rounded-lg overflow-hidden">
                                    <div className="card-header bg-gray-100 p-4 cursor-pointer" id="headingThree1">
                                        <h5 className="mb-0">
                                            <button
                                                className="w-full text-left text-lg font-semibold text-gray-800 focus:outline-none flex justify-between items-center"
                                                onClick={() => toggleAccordionThree('collapseThree1')}
                                                aria-expanded={openAccordionThree === 'collapseThree1'}
                                                aria-controls="collapseThree1"
                                            >
                                                {t('sharingPersonalData.analyticsImprovement.title')}
                                                <span className="transform transition-transform duration-200">
                                                    {openAccordionThree === 'collapseThree1' ? '−' : '+'}
                                                </span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree1" className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openAccordionThree === 'collapseThree1' ? 'max-h-screen' : 'max-h-0'}`}>
                                        <div className="card-body p-4 bg-white">
                                            <p className="text-gray-700">{t('sharingPersonalData.analyticsImprovement.description')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border rounded-lg overflow-hidden">
                                    <div className="card-header bg-gray-100 p-4 cursor-pointer" id="headingFour1">
                                        <h5 className="mb-0">
                                            <button
                                                className="w-full text-left text-lg font-semibold text-gray-800 focus:outline-none flex justify-between items-center"
                                                onClick={() => toggleAccordionThree('collapseFour1')}
                                                aria-expanded={openAccordionThree === 'collapseFour1'}
                                                aria-controls="collapseFour1"
                                            >
                                                {t('sharingPersonalData.businessTransactions.title')}
                                                <span className="transform transition-transform duration-200">
                                                    {openAccordionThree === 'collapseFour1' ? '−' : '+'}
                                                </span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFour1" className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openAccordionThree === 'collapseFour1' ? 'max-h-screen' : 'max-h-0'}`}>
                                        <div className="card-body p-4 bg-white">
                                            <p className="text-gray-700">{t('sharingPersonalData.businessTransactions.description')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border rounded-lg overflow-hidden">
                                    <div className="card-header bg-gray-100 p-4 cursor-pointer" id="headingFive1">
                                        <h5 className="mb-0">
                                            <button
                                                className="w-full text-left text-lg font-semibold text-gray-800 focus:outline-none flex justify-between items-center"
                                                onClick={() => toggleAccordionThree('collapseFive1')}
                                                aria-expanded={openAccordionThree === 'collapseFive1'}
                                                aria-controls="collapseFive1"
                                            >
                                                {t('sharingPersonalData.legalObligations.title')}
                                                <span className="transform transition-transform duration-200">
                                                    {openAccordionThree === 'collapseFive1' ? '−' : '+'}
                                                </span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFive1" className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openAccordionThree === 'collapseFive1' ? 'max-h-screen' : 'max-h-0'}`}>
                                        <div className="card-body p-4 bg-white">
                                            <p className="text-gray-700">{t('sharingPersonalData.legalObligations.description')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fancy-text-block-nine mt-[130px] md:mt-[80px]">
                <div className="container mx-auto px-4">
                    <div className="title-style-two text-center mb-[35px] md:mb-[10px]">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-10/12 mx-auto">
                                <h2 className="text-4xl font-bold text-gray-900">
                                    {t('customerRightsSection.title')}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-full xl:w-10/12 mx-auto">
                            <p className="text-meta text-lg text-gray-700 leading-relaxed" data-aos="fade-up" data-aos-duration="1200">
                                {t('customerRightsSection.optOut')}
                            </p>
                            <p className="text-meta text-lg text-gray-700 leading-relaxed mt-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                                {t('customerRightsSection.accessControl')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="faq-classic pt-[100px] pb-[100px]">
                <div className="container mx-auto px-4">
                    <div className="title-style-four text-center mb-[100px] md:mb-[70px]">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-7/12 mx-auto">
                                <h3 className="text-3xl font-bold text-gray-900">
                                    {t('gdprRights.title')}
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4">
                            <div id="accordion" className="md:mt-[60px] space-y-4">
                                <div className="card border rounded-lg overflow-hidden">
                                    <div className="card-header bg-gray-100 p-4 cursor-pointer" id="headingOne">
                                        <h5 className="mb-0">
                                            <button
                                                className="w-full text-left text-lg font-semibold text-gray-800 focus:outline-none flex justify-between items-center"
                                                onClick={() => toggleAccordionLeft('collapseOne')}
                                                aria-expanded={openAccordionLeft === 'collapseOne'}
                                                aria-controls="collapseOne"
                                            >
                                                {t('gdprRights.access.title')}
                                                <span className="transform transition-transform duration-200">
                                                    {openAccordionLeft === 'collapseOne' ? '−' : '+'}
                                                </span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openAccordionLeft === 'collapseOne' ? 'max-h-screen' : 'max-h-0'}`}>
                                        <div className="card-body p-4 bg-white">
                                            <p className="text-gray-700">{t('gdprRights.access.description')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border rounded-lg overflow-hidden">
                                    <div className="card-header bg-gray-100 p-4 cursor-pointer" id="headingTwo">
                                        <h5 className="mb-0">
                                            <button
                                                className="w-full text-left text-lg font-semibold text-gray-800 focus:outline-none flex justify-between items-center"
                                                onClick={() => toggleAccordionLeft('collapseTwo')}
                                                aria-expanded={openAccordionLeft === 'collapseTwo'}
                                                aria-controls="collapseTwo"
                                            >
                                                {t('gdprRights.rectification.title')}
                                                <span className="transform transition-transform duration-200">
                                                    {openAccordionLeft === 'collapseTwo' ? '−' : '+'}
                                                </span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openAccordionLeft === 'collapseTwo' ? 'max-h-screen' : 'max-h-0'}`}>
                                        <div className="card-body p-4 bg-white">
                                            <p className="text-gray-700">{t('gdprRights.rectification.description')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border rounded-lg overflow-hidden">
                                    <div className="card-header bg-gray-100 p-4 cursor-pointer" id="headingThree">
                                        <h5 className="mb-0">
                                            <button
                                                className="w-full text-left text-lg font-semibold text-gray-800 focus:outline-none flex justify-between items-center"
                                                onClick={() => toggleAccordionLeft('collapseThree')}
                                                aria-expanded={openAccordionLeft === 'collapseThree'}
                                                aria-controls="collapseThree"
                                            >
                                                {t('gdprRights.erasure.title')}
                                                <span className="transform transition-transform duration-200">
                                                    {openAccordionLeft === 'collapseThree' ? '−' : '+'}
                                                </span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openAccordionLeft === 'collapseThree' ? 'max-h-screen' : 'max-h-0'}`}>
                                        <div className="card-body p-4 bg-white">
                                            <p className="text-gray-700">{t('gdprRights.erasure.description')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 px-4">
                            <div id="accordiontwo" className="md:mt-[60px] space-y-4">
                                <div className="card border rounded-lg overflow-hidden">
                                    <div className="card-header bg-gray-100 p-4 cursor-pointer" id="headingFour">
                                        <h5 className="mb-0">
                                            <button
                                                className="w-full text-left text-lg font-semibold text-gray-800 focus:outline-none flex justify-between items-center"
                                                onClick={() => toggleAccordionRight('collapseFour')}
                                                aria-expanded={openAccordionRight === 'collapseFour'}
                                                aria-controls="collapseFour"
                                            >
                                                {t('gdprRights.restriction.title')}
                                                <span className="transform transition-transform duration-200">
                                                    {openAccordionRight === 'collapseFour' ? '−' : '+'}
                                                </span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFour" className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openAccordionRight === 'collapseFour' ? 'max-h-screen' : 'max-h-0'}`}>
                                        <div className="card-body p-4 bg-white">
                                            <p className="text-gray-700">{t('gdprRights.restriction.description')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border rounded-lg overflow-hidden">
                                    <div className="card-header bg-gray-100 p-4 cursor-pointer" id="headingFive">
                                        <h5 className="mb-0">
                                            <button
                                                className="w-full text-left text-lg font-semibold text-gray-800 focus:outline-none flex justify-between items-center"
                                                onClick={() => toggleAccordionRight('collapseFive')}
                                                aria-expanded={openAccordionRight === 'collapseFive'}
                                                aria-controls="collapseFive"
                                            >
                                                {t('gdprRights.portability.title')}
                                                <span className="transform transition-transform duration-200">
                                                    {openAccordionRight === 'collapseFive' ? '−' : '+'}
                                                </span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFive" className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openAccordionRight === 'collapseFive' ? 'max-h-screen' : 'max-h-0'}`}>
                                        <div className="card-body p-4 bg-white">
                                            <p className="text-gray-700">{t('gdprRights.portability.description')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border rounded-lg overflow-hidden">
                                    <div className="card-header bg-gray-100 p-4 cursor-pointer" id="headingSix">
                                        <h5 className="mb-0">
                                            <button
                                                className="w-full text-left text-lg font-semibold text-gray-800 focus:outline-none flex justify-between items-center"
                                                onClick={() => toggleAccordionRight('collapseSix')}
                                                aria-expanded={openAccordionRight === 'collapseSix'}
                                                aria-controls="collapseSix"
                                            >
                                                {t('gdprRights.objection.title')}
                                                <span className="transform transition-transform duration-200">
                                                    {openAccordionRight === 'collapseSix' ? '−' : '+'}
                                                </span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseSix" className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openAccordionRight === 'collapseSix' ? 'max-h-screen' : 'max-h-0'}`}>
                                        <div className="card-body p-4 bg-white">
                                            <p className="text-gray-700">{t('gdprRights.objection.description')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fancy-short-banner-fifteen py-16" style={{ background: 'var(--secondry-bg)' }}>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full xl:w-8/12 lg:w-11/12 mx-auto" data-aos="fade-up" data-aos-duration="1200">
                            <div className="title-style-seven text-center">
                                <h2 className="text-3xl font-bold text-gray-900">
                                    {t('changesToPolicy.title')}
                                </h2>
                                <p className="text-lg mt-4 text-gray-700 leading-relaxed">
                                    {t('changesToPolicy.description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;