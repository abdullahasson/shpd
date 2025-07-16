'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
// Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PackagingStandards = () => {
    const t = useTranslations('packagingStandards');

    const [activeTab, setActiveTab] = useState<string>('bubbleWrap');

    return (
        <div className='main-page-wrapper'>
            <Header />
            <div
                className="fancy-hero-three relative overflow-hidden py-20 lg:py-32"
                style={{ background: 'var(--secondry-bg)' }}
            >
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
                                    {t('heroTitle')}
                                </h1>
                                <p className="sub-heading text-lg text-center text-gray-600 mt-4">
                                    {t('heroSubtitle')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fancy-feature-four relative py-20 md:py-32 mt-20">
                <div className="bg-wrapper relative z-10" style={{ background: 'transparent' }}>
                    <Image
                        src="/images/shape/18.svg"
                        alt="Shape"
                        width={100}
                        height={100}
                        className="shapes shape-right absolute top-0 right-0"
                    />
                    <Image
                        src="/images/shape/19.svg"
                        alt="Shape"
                        width={100}
                        height={100}
                        className="shapes shape-left absolute bottom-0 left-0"
                    />
                    <div className="container mx-auto px-4">
                        <div className="title-style-two text-center mb-[100px] md:mb-[50px]">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto">
                                    <h2 className="text-4xl font-bold text-gray-900">
                                        {t('documentPackaging.title')}{' '}
                                        <span>
                                            <Image
                                                src="/images/shape/line-shape-2.svg"
                                                alt="Line Shape"
                                                width={100}
                                                height={10}
                                                className="inline-block"
                                            />
                                        </span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="fancy-feature-eight">
                            <div className="container mx-auto px-4">
                                <div className="title-style-four text-center mb-[40px] md:mb-[40px]">
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-10/12 mx-auto">
                                            <h3 className="text-3xl font-bold text-gray-900">
                                                {t('documentPackaging.basicRequirements.title')}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="block-style-twelve py-[80px]">
                                    <div className="flex flex-wrap justify-around items-center">
                                        <div
                                            className="w-full md:w-8/12 lg:w-6/12 lg:order-first"
                                            data-aos="fade-right"
                                            data-aos-duration="1200"
                                        >
                                            <div className="illustration-holder gozagel-block-image flex justify-center rounded-lg shadow-lg overflow-hidden">
                                                <Image
                                                    src="/images/assets/Envelopes.jpg"
                                                    alt="Envelopes"
                                                    width={600}
                                                    height={400}
                                                    layout="responsive"
                                                    objectFit="cover"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="w-full lg:w-6/12 lg:order-last mt-8 lg:mt-0 lg:pl-12"
                                            data-aos="fade-left"
                                            data-aos-duration="1200"
                                        >
                                            <div className="text-wrapper p-4 space-y-4">
                                                <h6 className="text-black text-xl font-semibold" style={{ color: 'black' }}>1</h6>
                                                <h2 className="title text-3xl font-bold mt-2 mb-4">
                                                    {t('documentPackaging.basicRequirements.envelopes.title')}
                                                </h2>
                                                <p className="text-gray-700 leading-relaxed">
                                                    {t('documentPackaging.basicRequirements.envelopes.description')}
                                                </p>
                                                <p className="pt-[15px] text-gray-700 leading-relaxed font-bold">
                                                    {t('documentPackaging.basicRequirements.envelopes.note')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-style-twelve py-[80px]">
                                    <div className="flex flex-wrap justify-around items-center">
                                        <div
                                            className="w-full md:w-8/12 lg:w-6/12 lg:order-first"
                                            data-aos="fade-right"
                                            data-aos-duration="1200"
                                        >
                                            <div className="illustration-holder gozagel-block-image flex justify-center rounded-lg shadow-lg overflow-hidden">
                                                <Image
                                                    src="/images/assets/Plastic Folders.jpg"
                                                    alt="Plastic Folders"
                                                    width={600}
                                                    height={400}
                                                    layout="responsive"
                                                    objectFit="cover"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="w-full lg:w-6/12 lg:order-last mt-8 lg:mt-0 lg:pl-12"
                                            data-aos="fade-left"
                                            data-aos-duration="1200"
                                        >
                                            <div className="text-wrapper p-4 space-y-4">
                                                <h6 className="text-black text-xl font-semibold" style={{ color: 'black' }}>2</h6>
                                                <h2 className="title text-3xl font-bold mt-2 mb-4">
                                                    {t('documentPackaging.basicRequirements.plasticFolders.title')}
                                                </h2>
                                                <p className="text-gray-700 leading-relaxed">
                                                    {t('documentPackaging.basicRequirements.plasticFolders.description')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-style-twelve py-[80px]">
                                    <div className="flex flex-wrap justify-around items-center">
                                        <div
                                            className="w-full md:w-8/12 lg:w-6/12 lg:order-first"
                                            data-aos="fade-right"
                                            data-aos-duration="1200"
                                        >
                                            <div className="illustration-holder gozagel-block-image flex justify-center rounded-lg shadow-lg overflow-hidden">
                                                <Image
                                                    src="/images/assets/Plastic Folders.jpg"
                                                    alt="Plastic Folders"
                                                    width={600}
                                                    height={400}
                                                    layout="responsive"
                                                    objectFit="cover"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="w-full lg:w-6/12 lg:order-last mt-8 lg:mt-0 lg:pl-12"
                                            data-aos="fade-left"
                                            data-aos-duration="1200"
                                        >
                                            <div className="text-wrapper p-4 space-y-4">
                                                <h6 className="text-black text-xl font-semibold" style={{ color: 'black' }}>3</h6>
                                                <h2 className="title text-3xl font-bold mt-2 mb-4">
                                                    {t('documentPackaging.basicRequirements.recommendation.title')}
                                                </h2>
                                                <p className="text-gray-700 leading-relaxed">
                                                    {t('documentPackaging.basicRequirements.recommendation.description')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-t border-gray-200 my-8" />
                        <div className="fancy-feature-eight pt-[80px] pb-[80px]">
                            <div className="container mx-auto px-4">
                                <div className="title-style-four text-center mb-[40px] md:mb-[40px]">
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-10/12 mx-auto">
                                            <h3 className="text-3xl font-bold text-gray-900">
                                                {t('documentPackaging.sizeConsiderations.title')}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap">
                                    <div className="w-full xl:w-10/12 mx-auto">
                                        <p className="text-meta text-lg text-gray-700 leading-relaxed">
                                            {t('documentPackaging.sizeConsiderations.description')}
                                            <br />•{' '}
                                            <b>
                                                {t('documentPackaging.sizeConsiderations.formula')}
                                            </b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-t border-gray-200 my-8" />
                        <div className="feature-blog-five lg-container pt-[80px]">
                            <div className="container mx-auto px-4">
                                <div className="title-style-four text-center mb-[40px] md:mb-[40px]">
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-10/12 mx-auto">
                                            <h3 className="text-3xl font-bold text-gray-900">
                                                {t('documentPackaging.weightGuidelines.title')}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap -mx-4">
                                    <div
                                        className="w-full sm:w-1/2 lg:w-1/3 flex px-4"
                                        data-aos="fade-up"
                                    >
                                        <article className="post-meta mt-[30px] flex flex-col h-full rounded-lg shadow-md overflow-hidden">
                                            <figure className="post-img overflow-hidden">
                                                <Image
                                                    style={{ maxHeight: '292px' }}
                                                    src="/images/assets/less.jpg"
                                                    alt="Less than 1 kg"
                                                    width={400}
                                                    height={292}
                                                    className="w-full tran4s object-cover transition-transform duration-300 hover:scale-105 rounded-t-lg"
                                                />
                                            </figure>
                                            <div className="post-data p-6 flex-grow">
                                                <div className="mb-[5px]">
                                                    <h4 className="text-xl font-semibold mb-2">
                                                        {t('documentPackaging.weightGuidelines.lessThan1kg.title')}
                                                    </h4>
                                                </div>
                                                <div className="text-gray-700 leading-relaxed">
                                                    {t('documentPackaging.weightGuidelines.lessThan1kg.description')}
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div
                                        className="w-full sm:w-1/2 lg:w-1/3 flex px-4"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <article className="post-meta mt-[30px] flex flex-col h-full rounded-lg shadow-md overflow-hidden">
                                            <figure className="post-img overflow-hidden">
                                                <Image
                                                    style={{ maxHeight: '292px' }}
                                                    src="/images/assets/1 to 2.jpg"
                                                    alt="1 to 2 kg"
                                                    width={400}
                                                    height={292}
                                                    className="w-full tran4s object-cover transition-transform duration-300 hover:scale-105 rounded-t-lg"
                                                />
                                            </figure>
                                            <div className="post-data p-6 flex-grow">
                                                <div className="mb-[5px]">
                                                    <h4 className="text-xl font-semibold mb-2">
                                                        {t('documentPackaging.weightGuidelines.1to2kg.title')}
                                                    </h4>
                                                </div>
                                                <div className="text-gray-700 leading-relaxed">
                                                    {t('documentPackaging.weightGuidelines.1to2kg.description')}
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div
                                        className="w-full sm:w-1/2 lg:w-1/3 flex px-4"
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                    >
                                        <article className="post-meta mt-[30px] flex flex-col h-full rounded-lg shadow-md overflow-hidden">
                                            <figure className="post-img overflow-hidden">
                                                <Image
                                                    style={{ maxHeight: '292px' }}
                                                    src="/images/assets/more.jpg"
                                                    alt="More than 2 kg"
                                                    width={400}
                                                    height={292}
                                                    className="w-full tran4s object-cover transition-transform duration-300 hover:scale-105 rounded-t-lg"
                                                />
                                            </figure>
                                            <div className="post-data p-6 flex-grow">
                                                <div className="mb-[5px]">
                                                    <h4 className="text-xl font-semibold mb-2">
                                                        {t('documentPackaging.weightGuidelines.moreThan2kg.title')}
                                                    </h4>
                                                </div>
                                                <div className="text-gray-700 leading-relaxed">
                                                    {t('documentPackaging.weightGuidelines.moreThan2kg.description')}
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="fancy-feature-four relative py-20 md:py-32"
                style={{ background: 'var(--secondry-bg)' }}
            >
                <div className="bg-wrapper relative z-10" style={{ backgroundColor: 'transparent' }}>
                    <Image
                        src="/images/shape/18.svg"
                        alt="Shape"
                        width={100}
                        height={100}
                        className="shapes shape-right absolute top-0 right-0"
                    />
                    <Image
                        src="/images/shape/19.svg"
                        alt="Shape"
                        width={100}
                        height={100}
                        className="shapes shape-left absolute bottom-0 left-0"
                    />
                    <div className="container mx-auto px-4">
                        <div className="title-style-two text-center mb-[100px] md:mb-[50px]">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto">
                                    <h2 className="font-cairo text-4xl font-bold text-gray-900">
                                        {t('packageShippingGuidelines.title')}{' '}
                                        <span>
                                            <Image
                                                src="/images/shape/line-shape-2.svg"
                                                alt="Line Shape"
                                                width={100}
                                                height={10}
                                                className="inline-block"
                                            />
                                        </span>
                                    </h2>
                                    <p
                                        className="sub-heading mt-[100px] text-lg text-gray-900 leading-relaxed"
                                        style={{ fontSize: '23px', lineHeight: '1.6', color: '#000' }}
                                    >
                                        {t('packageShippingGuidelines.subtitle')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="fancy-feature-eight">
                            <div className="container mx-auto px-4">
                                <div className="title-style-four text-center mb-[40px] md:mb-[40px]">
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-10/12 mx-auto">
                                            <h3 className="text-3xl font-bold text-gray-900">
                                                {t('packageShippingGuidelines.packagingRestrictions.title')}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="block-style-twelve py-[80px]">
                                    <div className="flex flex-wrap justify-around items-center">
                                        <div
                                            className="w-full lg:w-6/12 lg:order-last mt-8 lg:mt-0 lg:pl-12"
                                            data-aos="fade-left"
                                            data-aos-duration="1200"
                                        >
                                            <div className="text-wrapper p-4 space-y-4">
                                                <h6 className="text-black text-xl font-semibold" style={{ color: 'black' }}>1</h6>
                                                <h2 className="title text-3xl font-bold mt-2 mb-4">
                                                    {t('packageShippingGuidelines.packagingRestrictions.giftBoxes.title')}
                                                </h2>
                                                <p className="text-gray-700 leading-relaxed">
                                                    {t('packageShippingGuidelines.packagingRestrictions.giftBoxes.description')}
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="w-full lg:w-6/12 lg:order-first"
                                            data-aos="fade-right"
                                            data-aos-duration="1200"
                                        >
                                            <div className="illustration-holder gozagel-block-image flex justify-center rounded-lg shadow-lg overflow-hidden">
                                                <Image
                                                    src="/images/assets/gift box.jpg"
                                                    alt="Gift Box"
                                                    width={600}
                                                    height={400}
                                                    layout="responsive"
                                                    objectFit="cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-style-twelve py-[80px]">
                                    <div className="flex flex-wrap justify-around items-center">
                                        <div
                                            className="w-full lg:w-6/12 lg:order-last mt-8 lg:mt-0 lg:pl-12"
                                            data-aos="fade-left"
                                            data-aos-duration="1200"
                                        >
                                            <div className="text-wrapper p-4 space-y-4">
                                                <h6 className="text-black text-xl font-semibold" style={{ color: 'black' }}>2</h6>
                                                <h2 className="title text-3xl font-bold mt-2 mb-4">
                                                    {t('packageShippingGuidelines.packagingRestrictions.compressedCardboard.title')}
                                                </h2>
                                                <p className="text-gray-700 leading-relaxed">
                                                    {t('packageShippingGuidelines.packagingRestrictions.compressedCardboard.description')}
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="w-full md:w-8/12 lg:w-6/12 lg:order-first"
                                            data-aos="fade-right"
                                            data-aos-duration="1200"
                                        >
                                            <div className="illustration-holder gozagel-block-image flex justify-center rounded-lg shadow-lg overflow-hidden">
                                                <Image
                                                    src="/images/assets/Compressed Cardboard.jpg"
                                                    alt="Compressed Cardboard"
                                                    width={600}
                                                    height={400}
                                                    layout="responsive"
                                                    objectFit="cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-style-twelve py-[80px]">
                                    <div className="flex flex-wrap justify-around items-center">
                                        <div
                                            className="w-full md:w-8/12 lg:w-6/12 lg:order-first"
                                            data-aos="fade-right"
                                            data-aos-duration="1200"
                                        >
                                            <div className="illustration-holder gozagel-block-image flex justify-center rounded-lg shadow-lg overflow-hidden">
                                                <Image
                                                    src="/images/assets/Reconstructed Boxes.jpg"
                                                    alt="Reconstructed Boxes"
                                                    width={600}
                                                    height={400}
                                                    layout="responsive"
                                                    objectFit="cover"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="w-full lg:w-6/12 lg:order-last mt-8 lg:mt-0 lg:pl-12"
                                            data-aos="fade-left"
                                            data-aos-duration="1200"
                                        >
                                            <div className="text-wrapper p-4 space-y-4">
                                                <h6 className="text-black text-xl font-semibold" style={{ color: 'black' }}>3</h6>
                                                <h2 className="title text-3xl font-bold mt-2 mb-4">
                                                    {t('packageShippingGuidelines.packagingRestrictions.reconstructedBoxes.title')}
                                                </h2>
                                                <p className="text-gray-700 leading-relaxed">
                                                    {t('packageShippingGuidelines.packagingRestrictions.reconstructedBoxes.description')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fancy-short-banner-fifteen py-16" style={{ backgroundColor: 'transparent' }}>
                                    <div className="container mx-auto px-4">
                                        <div className="flex flex-wrap">
                                            <div
                                                className="w-full xl:w-8/12 lg:w-11/12 mx-auto"
                                                data-aos="fade-up"
                                                data-aos-duration="1200"
                                            >
                                                <div className="title-style-seven text-center">
                                                    <h3 className="text-3xl font-bold text-gray-900">
                                                        {t('packageShippingGuidelines.packagingRestrictions.note.title')}
                                                    </h3>
                                                    <p className="text-lg mt-4 text-gray-700 leading-relaxed">
                                                        {t('packageShippingGuidelines.packagingRestrictions.note.description')}
                                                        <br />•{' '}
                                                        <b>
                                                            {t('packageShippingGuidelines.packagingRestrictions.note.formula')}
                                                        </b>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="border-t border-gray-200 my-8" />
                        <div className="fancy-feature-eight pt-[80px]">
                            <div className="container mx-auto px-4">
                                <div className="title-style-four text-center mb-[40px] md:mb-[40px]">
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-10/12 mx-auto">
                                            <h3 className="text-3xl font-bold text-gray-900">
                                                {t('packageShippingGuidelines.properPackagingRequirements.title')}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="block-style-twelve py-[80px]">
                                    <div className="flex flex-wrap justify-around items-center">
                                        <div
                                            className="w-full md:w-8/12 lg:w-6/12 lg:order-first"
                                            data-aos="fade-right"
                                            data-aos-duration="1200"
                                        >
                                            <div className="illustration-holder gozagel-block-image flex justify-center rounded-lg shadow-lg overflow-hidden">
                                                <Image
                                                    src="/images/assets/Basic Requirements Rechargeable.jpg"
                                                    alt="Basic Requirements Rechargeable"
                                                    width={600}
                                                    height={400}
                                                    layout="responsive"
                                                    objectFit="cover"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="w-full lg:w-6/12 lg:order-last mt-8 lg:mt-0 lg:pl-12"
                                            data-aos="fade-left"
                                            data-aos-duration="1200"
                                        >
                                            <div className="text-wrapper p-4 space-y-4">
                                                <h6 className="text-black text-xl font-semibold" style={{ color: 'black' }}>1</h6>
                                                <h2 className="title text-3xl font-bold mt-2 mb-4">
                                                    {t('packageShippingGuidelines.properPackagingRequirements.basicRequirementsRechargeable.title')}
                                                </h2>
                                                <p className="text-gray-700 leading-relaxed">
                                                    {t('packageShippingGuidelines.properPackagingRequirements.basicRequirementsRechargeable.description')}
                                                    <br />
                                                    <b>Note:</b>
                                                    <br />
                                                    {t('packageShippingGuidelines.properPackagingRequirements.basicRequirementsRechargeable.note')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-style-twelve py-[80px]">
                                    <div className="flex flex-wrap items-center justify-around">
                                        <div
                                            className="w-full md:w-8/12 lg:w-6/12 lg:order-first flex justify-center md:justify-end"
                                            data-aos="fade-right"
                                            data-aos-duration="1200"
                                        >
                                            <div className="w-full max-w-md" style={{ width: 'max-content' }}>
                                                <ul className="flex border-b border-gray-200 justify-end" role="tablist">
                                                    <li className="flex-1 text-center">
                                                        <button
                                                            className={`block py-3 px-4 text-sm font-medium leading-5 transition duration-150 ease-in-out border-b-2 ${activeTab === 'bubbleWrap'
                                                                    ? 'text-blue-600 border-blue-600 focus:outline-none focus:border-blue-700'
                                                                    : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300'
                                                                }`}
                                                            onClick={() => setActiveTab('bubbleWrap')}
                                                            role="tab"
                                                            aria-controls="tab1"
                                                            aria-selected={activeTab === 'bubbleWrap'}
                                                        >
                                                            {t('packageShippingGuidelines.properPackagingRequirements.shippingFragileProducts.tabs.bubbleWrap')}
                                                        </button>
                                                    </li>
                                                    <li className="flex-1 text-center">
                                                        <button
                                                            className={`block py-3 px-4 text-sm font-medium leading-5 transition duration-150 ease-in-out border-b-2 ${activeTab === 'foam'
                                                                    ? 'text-blue-600 border-blue-600 focus:outline-none focus:border-blue-700'
                                                                    : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300'
                                                                }`}
                                                            onClick={() => setActiveTab('foam')}
                                                            role="tab"
                                                            aria-controls="tab2"
                                                            aria-selected={activeTab === 'foam'}
                                                        >
                                                            {t('packageShippingGuidelines.properPackagingRequirements.shippingFragileProducts.tabs.foam')}
                                                        </button>
                                                    </li>
                                                    <li className="flex-1 text-center">
                                                        <button
                                                            className={`block py-3 px-4 text-sm font-medium leading-5 transition duration-150 ease-in-out border-b-2 ${activeTab === 'padding'
                                                                    ? 'text-blue-600 border-blue-600 focus:outline-none focus:border-blue-700'
                                                                    : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300'
                                                                }`}
                                                            onClick={() => setActiveTab('padding')}
                                                            role="tab"
                                                            aria-controls="tab3"
                                                            aria-selected={activeTab === 'padding'}
                                                        >
                                                            {t('packageShippingGuidelines.properPackagingRequirements.shippingFragileProducts.tabs.padding')}
                                                        </button>
                                                    </li>
                                                </ul>

                                                <div className="tab-content mt-4">
                                                    {activeTab === 'bubbleWrap' && (
                                                        <div className="tab-pane fade show active block" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                                                            <div className="illustration-holder flex justify-center rounded-lg shadow-lg overflow-hidden">
                                                                <Image
                                                                    width={440}
                                                                    height={300}
                                                                    src="/images/assets/Bubble Wrap.jpg"
                                                                    alt="Bubble Wrap"
                                                                    layout="responsive"
                                                                    objectFit="cover"
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                                    {activeTab === 'foam' && (
                                                        <div className="tab-pane fade block" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                                                            <div className="illustration-holder flex justify-center rounded-lg shadow-lg overflow-hidden">
                                                                <Image
                                                                    width={440}
                                                                    height={300}
                                                                    src="/images/assets/elephants.jpg"
                                                                    alt="Foam"
                                                                    layout="responsive"
                                                                    objectFit="cover"
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                                    {activeTab === 'padding' && (
                                                        <div className="tab-pane fade block" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                                                            <div className="illustration-holder flex justify-center rounded-lg shadow-lg overflow-hidden">
                                                                <Image
                                                                    width={440}
                                                                    height={300}
                                                                    src="/images/assets/sfan.jpg"
                                                                    alt="Padding"
                                                                    layout="responsive"
                                                                    objectFit="cover"
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="w-full lg:w-6/12 lg:order-last mt-8 lg:mt-0 lg:pl-12"
                                            data-aos="fade-left"
                                            data-aos-duration="1200"
                                        >
                                            <div className="text-wrapper p-4 space-y-4">
                                                <h6 className="text-black text-xl font-semibold" style={{ color: 'black' }}>2</h6>
                                                <h2 className="title text-3xl font-bold mt-2 mb-4">
                                                    {t('packageShippingGuidelines.properPackagingRequirements.shippingFragileProducts.title')}
                                                </h2>
                                                <p className="text-gray-700 leading-relaxed">
                                                    {t('packageShippingGuidelines.properPackagingRequirements.shippingFragileProducts.description')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-style-twelve py-[80px]">
                                    <div className="flex flex-wrap justify-around items-center">
                                        <div
                                            className="w-full md:w-8/12 lg:w-6/12 lg:order-first"
                                            data-aos="fade-right"
                                            data-aos-duration="1200"
                                        >
                                            <div className="illustration-holder gozagel-block-image flex justify-center rounded-lg shadow-lg overflow-hidden">
                                                <Image
                                                    src="/images/assets/Labels.jpg"
                                                    alt="Labels"
                                                    width={600}
                                                    height={400}
                                                    layout="responsive"
                                                    objectFit="cover"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="w-full lg:w-6/12 lg:order-last mt-8 lg:mt-0 lg:pl-12"
                                            data-aos="fade-left"
                                            data-aos-duration="1200"
                                        >
                                            <div className="text-wrapper p-4 space-y-4">
                                                <h6 className="text-black text-xl font-semibold" style={{ color: 'black' }}>3</h6>
                                                <h2 className="title text-3xl font-bold mt-2 mb-4">
                                                    {t('packageShippingGuidelines.properPackagingRequirements.labels.title')}
                                                </h2>
                                                <p className="text-gray-700 leading-relaxed">
                                                    {t('packageShippingGuidelines.properPackagingRequirements.labels.description')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-t border-gray-200 my-8" />

                        <div className="feature-blog-five lg-container pt-[80px]">
                            <div className="container mx-auto px-4">
                                <div className="title-style-four text-center mb-[40px] md:mb-[40px]">
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-10/12 mx-auto">
                                            <h3 className="text-3xl font-bold text-gray-900">
                                                {t('packageShippingGuidelines.measuringDimensionsAndWeight.title')}
                                            </h3>
                                            <p className="mt-[40px] md:mt-[30px] text-lg text-gray-700 leading-relaxed">
                                                {t('packageShippingGuidelines.measuringDimensionsAndWeight.subtitle')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap -mx-4">
                                    <div
                                        className="w-full sm:w-1/2 flex px-4"
                                        data-aos="fade-up"
                                    >
                                        <article className="post-meta mt-[30px] flex flex-col h-full rounded-lg shadow-md overflow-hidden">
                                            <figure className="post-img overflow-hidden">
                                                <Image
                                                    style={{ maxHeight: '450px' }}
                                                    src="/images/assets/weights.jpg"
                                                    alt="Weight Example"
                                                    width={600}
                                                    height={450}
                                                    className="w-full tran4s object-cover transition-transform duration-300 hover:scale-105 rounded-t-lg"
                                                />
                                            </figure>
                                            <div className="post-data p-6 flex-grow">
                                                <div className="mb-[5px]">
                                                    <h4 className="text-xl font-semibold mb-2">
                                                        {t('packageShippingGuidelines.measuringDimensionsAndWeight.weightExample.title')}
                                                    </h4>
                                                </div>
                                                <div className="text-gray-700 leading-relaxed">
                                                    {t('packageShippingGuidelines.measuringDimensionsAndWeight.weightExample.value')}
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div
                                        className="w-full sm:w-1/2 flex px-4"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <article className="post-meta mt-[30px] flex flex-col h-full rounded-lg shadow-md overflow-hidden">
                                            <figure className="post-img overflow-hidden">
                                                <Image
                                                    style={{ maxHeight: '450px' }}
                                                    src="/images/assets/dimensions.jpg"
                                                    alt="Dimension Example"
                                                    width={600}
                                                    height={450}
                                                    className="w-full tran4s object-cover transition-transform duration-300 hover:scale-105 rounded-t-lg"
                                                />
                                            </figure>
                                            <div className="post-data p-6 flex-grow">
                                                <div className="mb-[5px]">
                                                    <h4 className="text-xl font-semibold mb-2">
                                                        {t('packageShippingGuidelines.measuringDimensionsAndWeight.dimensionExample.title')}
                                                    </h4>
                                                </div>
                                                <div className="text-gray-700 leading-relaxed">
                                                    {t('packageShippingGuidelines.measuringDimensionsAndWeight.dimensionExample.value')}
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fancy-text-block-nine relative py-20 md:py-32 mt-[130px] md:mt-[80px] pt-[80px] pb-[80px]">
                <div className="shapes shape-one" style={{ background: 'var(--main-color)' }}></div>
                <div className="shapes shape-two" style={{ background: 'var(--main-color)' }}></div>
                <div className="shapes shape-three" style={{ background: 'var(--main-color)' }}></div>
                <div className="shapes shape-four" style={{ background: 'var(--main-color)' }}></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="title-style-two text-center mb-[35px] md:mb-[10px]">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-10/12 mx-auto">
                                <h2 className="font-cairo text-4xl font-bold text-gray-900">
                                    {t('labelingCriteria.title')}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-full xl:w-10/12 mx-auto">
                            <p
                                className="text-meta font-cairo text-lg text-gray-700 leading-relaxed"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                {t('labelingCriteria.description1')}
                            </p>
                            <p
                                className="text-meta font-cairo text-lg text-gray-700 leading-relaxed mt-4"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="100"
                            >
                                {t('labelingCriteria.description2')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="fancy-short-banner-fifteen py-16"
                style={{ background: 'var(--secondry-bg)' }}
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div
                            className="w-full xl:w-8/12 lg:w-11/12 mx-auto"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <div className="title-style-seven text-center">
                                <h3 className="text-3xl font-bold text-gray-900">
                                    {t('importantNote.title')}
                                </h3>
                                <p className="text-lg mt-4 text-gray-700 leading-relaxed">
                                    {t('importantNote.description')}
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

export default PackagingStandards;