'use client';

import Image from 'next/image';
import Link from 'next/link'
import React from 'react';
import { useTranslations , useLocale } from 'next-intl';


const SignInPage = () => {
    const t = useTranslations('signInPage');
    const lang = useLocale()

    return (
        <div className='main-page-wrapper'>
            <div className="user-data-page clearfix flex flex-col lg:flex-row min-h-screen">
                <div
                    className="illustration-wrapper flex flex-col items-center justify-between p-8 lg:w-1/2 w-full"
                    style={{ background: 'var(--secondry-bg)' }}
                >
                    <h3 className="font-rubik text-center text-3xl lg:text-4xl text-gray-900 leading-tight">
                        {t('illustrationSection.title').split('<br>').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                {index < t('illustrationSection.title').split('<br>').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                        <Link href={`${lang}/sign-up`} className="text-blue-600 hover:underline ml-2">
                            {t('illustrationSection.signUpLink')}
                        </Link>
                    </h3>
                    <div className="illustration-holder flex justify-center items-center flex-grow">
                        <Image
                            src="/images/assets/ils_08.svg"
                            alt="Illustration"
                            width={500}
                            height={500}
                            className="illustration w-full max-w-sm lg:max-w-md h-auto"
                        />
                        <Image
                            src="/images/assets/ils_08.1.svg"
                            alt="Shape One"
                            width={100}
                            height={100}
                            className="shapes shape-one absolute top-1/4 left-1/4"
                        />
                        <Image
                            src="/images/assets/ils_08.2.svg"
                            alt="Shape Two"
                            width={80}
                            height={80}
                            className="shapes shape-two absolute bottom-1/4 right-1/4"
                        />
                    </div>
                </div>

                <div className="form-wrapper flex-grow p-8 lg:w-1/2 w-full flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-10">
                        <div className="logo">
                            <a href="index.html">
                                <Image width={150} height={40} src="/images/logo/shpd_logo.jpg" alt="Logo" />
                            </a>
                        </div>
                        <a href="index.html" className="font-rubik go-back-button text-gray-600 hover:text-blue-600 transition-colors duration-200">
                            {t('formSection.goToHome')}
                        </a>
                    </div>
                    <form action="#" className="user-data-form mt-[80px] md:mt-[40px]">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            {t('formSection.welcomeTitle')}
                        </h2>
                        <p className="header-info pt-[30px] pb-[50px] text-gray-600">
                            {t('formSection.headerInfo')}{' '}
                            <Link href={`/${lang}/sign-up`} className="text-blue-600 hover:underline">
                                {t('formSection.signUpLink')}
                            </Link>
                        </p>

                        <div className="flex flex-wrap -mx-2">
                            <div className="w-full px-2">
                                <div className="input-group-meta mb-[80px] sm:mb-[70px]">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        {t('formSection.emailLabel')}
                                    </label>
                                    <input
                                        type="email"
                                        placeholder={t('formSection.emailPlaceholder')}
                                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-2">
                                <div className="input-group-meta mb-[15px] relative">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        {t('formSection.passwordLabel')}
                                    </label>
                                    <input
                                        type="password"
                                        placeholder={t('formSection.passwordPlaceholder')}
                                        className="pass_log_id shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    <span className="placeholder_icon absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                        <span className="passVicon">
                                            <Image src="/images/icon/view.svg" alt="View Password" width={20} height={20} />
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="w-full px-2">
                                <div className="agreement-checkbox flex justify-between items-center mb-8">
                                    <div>
                                        <input type="checkbox" id="remember" className="mr-2 leading-tight" />
                                        <label htmlFor="remember" className="text-gray-700 text-sm">
                                            {t('formSection.keepLoggedIn')}
                                        </label>
                                    </div>
                                    <a href="#" className="text-blue-600 hover:underline text-sm">
                                        {t('formSection.forgotPassword')}
                                    </a>
                                </div>
                            </div>
                            <div className="w-full px-2">
                                <button className="theme-btn-one gozagel-btn-one w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 mt-[50px] mb-[50px]">
                                    {t('formSection.loginButton')}
                                </button>
                            </div>
                            <div className="w-full px-2">
                                <p className="text-center font-rubik copyright-text text-gray-500 text-sm">
                                    {t('formSection.copyrightText')}
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;