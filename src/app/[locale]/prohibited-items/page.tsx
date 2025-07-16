'use client'; // هذا السطر يجعل المكون مكون عميل

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
// Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProhibitedItemsPage() { // لم يعد المكون async
    const tProhibited = useTranslations('ProhibitedItems');
    const tCompliance = useTranslations('Compliance');
    const tNonCompensation = useTranslations('NonCompensation');

    return (
        <div className='main-page-wrapper'>
            <Header />
            <div className="fancy-hero-three relative" style={{ background: 'var(--secondry-bg)' }}>
                <div className="shapes shape-one absolute" style={{ backgroundColor: 'var(--main-color)' }}></div>
                <div className="shapes shape-two absolute" style={{ backgroundColor: 'var(--main-color)' }}></div>
                <div className="shapes shape-three absolute" style={{ backgroundColor: 'var(--main-color)' }}></div>
                <div className="shapes shape-four absolute" style={{ backgroundColor: 'var(--main-color)' }}></div>
                <div className="shapes shape-five absolute" style={{ backgroundColor: 'var(--main-color)' }}></div>
                <div className="shapes shape-six absolute" style={{ backgroundColor: 'var(--main-color)' }}></div>
                <div className="bg-wrapper">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full lg:w-10/12 xl:w-9/12 mx-auto px-4">
                                <h1 className="heading text-4xl font-bold text-center">
                                    {tProhibited('title')}
                                </h1>
                                <p className="sub-heading text-lg text-center mt-4">
                                    {tProhibited('description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20 gozagel-prohibited-list" data-aos="fade-up">
                <h2 className="text-center text-3xl font-semibold mb-8">
                    {tProhibited('listTitle')}
                </h2>
                <ul className="mt-4 border border-gray-200 rounded-lg">
                    {/* استخدام tProhibited.raw() لجلب المصفوفة مباشرةً */}
                    {tProhibited.raw('items').map((item: string, index: number) => (
                        <li key={index} className="p-4 border-b border-gray-200 last:border-b-0">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="lg-container mt-20 pt-20 pb-20 block-style-thirtySix">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4 items-center">
                        <div className="w-full lg:w-7/12 xl:w-6/12 px-4" data-aos="fade-left">
                            <div className="lg:pl-5">
                                <div className="title-style-fourteen">
                                    <h2 className="text-3xl font-bold mb-4">
                                        {tCompliance('title')}
                                    </h2>
                                </div>
                                <div className="tag-line">
                                    <p className="text-meta aos-init aos-animate text-gray-700 leading-relaxed">
                                        {tCompliance('descriptionPart1')}
                                        <br />
                                        {tCompliance('descriptionPart2')}
                                    </p>
                                </div>
                                <ul className="list-item drags mt-4 space-y-2">
                                    {/* استخدام tCompliance.raw() لجلب المصفوفة مباشرةً */}
                                    {tCompliance.raw('listItems').map((item: string, index: number) => (
                                        <li key={index} className="disable flex items-center text-red-600 font-medium">
                                            <span className="mr-2">&bull;</span>{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="w-full lg:w-5/12 xl:w-6/12 px-4 flex justify-center items-center" data-aos="fade-right">
                            <div>
                                <Image
                                    src="/images/assets/laws.png"
                                    alt="Compliance with Laws"
                                    width={600}
                                    height={490}
                                    className="w-full h-auto max-w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fancy-feature-ten mt-24 md:mt-16">
                <div className="bg-wrapper py-20" style={{ background: 'var(--secondry-bg)' }}>
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap -mx-4 justify-between items-center">
                            <div className="w-full md:w-6/12 px-4" data-aos="fade-right" data-aos-duration="1200">
                                <div className="title-style-six">
                                    <h2 className="text-4xl font-extrabold leading-tight">
                                        {tNonCompensation('title')}
                                    </h2>
                                </div>
                            </div>
                            <div className="w-full lg:w-5/12 md:w-6/12 px-4" data-aos="fade-left" data-aos-duration="1200">
                                <p className="sub-text pt-8 pb-8 text-lg text-gray-700">
                                    {tNonCompensation('subtitle')}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-4 justify-center mt-8 md:mt-5">
                            {/* استخدام tNonCompensation.raw() لجلب المصفوفة مباشرةً */}
                            {tNonCompensation.raw('cards').map((card: { heading: string; content: string }, index: number) => (
                                <div key={index} className="w-full md:w-6/12 lg:w-4/12 px-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay={index * 100}>
                                    <div className="block-style-fifteen gozagel-non-compensation-card mt-10 p-6 bg-white rounded-lg shadow-md">
                                        <h3 className="text-2xl font-semibold mb-2">{card.heading}</h3>
                                        <p className="mt-2 text-gray-600">{card.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Image src="/images/shape/137.svg" alt="Shape" width={100} height={100} className="shapes shape-one absolute" />
                </div>
            </div>
            <Footer />
        </div>
    );
}