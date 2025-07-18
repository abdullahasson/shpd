"use client";

// Next
import Image from "next/image";
// React
import React, { useRef } from 'react';
// I18n
import { useTranslations } from 'next-intl';
// Framer Motion
import { motion, Variants } from 'framer-motion';
// Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
// React Hook Form & Zod
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Image Imports (kept as per previous request, ensure paths are correct)
import icon45 from "../../../../public/images/icon/45.svg";
import icon46 from "../../../../public/images/icon/46.svg";
import shape222 from "../../../../public/images/shape/222.jpg";
import shape223 from "../../../../public/images/shape/223.jpg";
import shape224 from "../../../../public/images/shape/224.jpg";
import shape225 from "../../../../public/images/shape/225.jpg";


const ContactUs = () => {

    const t = useTranslations('ContactUs');
    const formRef = useRef<HTMLFormElement>(null); // Ref for the form element

    // Define Zod schema for form validation
    const formSchema = z.object({
        SingleLine: z.string().min(1, { message: t('validation.fullNameRequired') }),
        Email: z.string().min(1, { message: t('validation.emailRequired') }).email({ message: t('validation.emailInvalid') }),
        PhoneNumber_countrycode: z.string().min(1, { message: t('validation.phoneRequired') }),
        Dropdown2: z.string().min(1, { message: t('validation.requestNatureRequired') }),
        MultiLine: z.string().min(1, { message: t('validation.messageRequired') }).max(65535, { message: t('validation.messageTooLong') }),
    });

    type FormData = z.infer<typeof formSchema>;

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });



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



    const onSubmit = (data: FormData) => {
        console.log("Form data valid:", data);
        if (formRef.current) {
            formRef.current.submit();
        }
    };

    return (
        <div className='main-page-wrapper'>
            <Header />
            <Hero title={t('heroHeading')} subTitle={t('heroSubHeading')} />

            <div className="contact-style-two py-20 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="contact-info-wrapper grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                        <motion.div className="w-full flex justify-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div className="address-info text-center flex flex-col items-center">
                                <div className="icon flex items-end justify-center mb-4">
                                    <Image src={icon45} alt="Contact Icon" width={60} height={60} />
                                </div>
                                <div className="title text-2xl font-bold mb-2">{t('contactTitle')}</div>
                                <ul className="text-center space-y-1">
                                    <li>{t('contactEmail')}</li>
                                    <li>{t('contactPhone')}</li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div className="w-full flex justify-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                            <div className="address-info text-center flex flex-col items-center">
                                <div className="icon flex items-end justify-center mb-4">
                                    <Image src={icon46} alt="Social Media Icon" width={60} height={60} />
                                </div>
                                <div className="title text-2xl font-bold mb-2">{t('socialMediaTitle')}</div>
                                <p className="font-rubik text-gray-700 mb-4">{t('socialMediaText')}</p>
                                <ul className="flex space-x-4">
                                    <li><a target="_blank" href="https://www.facebook.com/ShpdTo/" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-2xl"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                    <li><a target="_blank" href="https://www.instagram.com/go.zagel?igsh=Nmg3N2VhaWtha2g4" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 text-2xl"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                                    <li><a target="_blank" href="https://wa.me/+201222200613" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 text-2xl"><i className="fa fa-whatsapp" aria-hidden="true" /></a></li>
                                    <li><a target="_blank" href="https://www.linkedin.com/company/64648366" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-2xl"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    <div className="fancy-feature-twentySix lg-container pt-20 md:pt-16">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-wrap -mx-4 justify-center">
                                <motion.div className="w-full px-4 md:w-6/12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                                    <div className="block-style-twentySix text-center mb-8 p-8 rounded-lg relative overflow-hidden" style={{ background: '#E8FBFF' }}>
                                        <h6 className="text-xl font-semibold mb-2" style={{ color: '#8BBDC8' }}>{t('egyptLocationTitle')}</h6>
                                        <h5 className="text-2xl font-bold mb-2">{t('egyptAddress')}</h5>
                                        <p className="text-gray-700">{t('egyptHours')}</p>
                                        <Image src={shape222} alt="Shape One" className="shapes shape-one absolute top-0 left-0 w-24 h-24 object-cover" width={100} height={100} />
                                        <Image src={shape223} alt="Shape Two" className="shapes shape-two absolute bottom-0 right-0 w-24 h-24 object-cover" width={100} height={100} />
                                    </div>
                                </motion.div>
                                <motion.div className="w-full px-4 md:w-6/12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
                                    <div className="block-style-twentySix text-center mb-8 p-8 rounded-lg relative overflow-hidden" style={{ background: '#FFEFE7' }}>
                                        <h6 className="text-xl font-semibold mb-2" style={{ color: '#DCAC91' }}>{t('franceLocationTitle')}</h6>
                                        <h5 className="text-2xl font-bold mb-2">{t('franceAddress')}</h5>
                                        <p className="text-gray-700">{t('franceHours')}</p>
                                        <Image src={shape224} alt="Shape Three" className="shapes shape-one absolute top-0 left-0 w-24 h-24 object-cover" width={100} height={100} />
                                        <Image src={shape225} alt="Shape Four" className="shapes shape-two absolute bottom-0 right-0 w-24 h-24 object-cover" width={100} height={100} />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-us-light py-20 md:py-24 relative overflow-hidden">
                        <div className="bubble-one absolute rounded-full" style={{ backgroundColor: 'var(--main-color)' }} />
                        <div className="bubble-two absolute rounded-full" />
                        <div className="bubble-three absolute rounded-full" />
                        <div className="bubble-four absolute rounded-full" />
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="form-style-light max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
                                <div className="title-style-two text-center mb-8">
                                    <div className="sub-text mt-4 text-lg text-gray-700">{t('formIntro')}</div>
                                </div>
                                <form ref={formRef} action="https://forms.zohopublic.com/royalworksfortrade/form/GoZagelContactUs/formperma/R8JdowFdtw96xB8oQFeG8Yld0kVRk5E9xnZ6z0ZQhzY/htmlRecords/submit" name="form" method="POST" acceptCharset="UTF-8" encType="multipart/form-data" id="form" onSubmit={handleSubmit(onSubmit)}>
                                    <input type="hidden" name="zf_referrer_name" />
                                    <input type="hidden" name="zf_redirect_url" />
                                    <input type="hidden" name="zc_gad" />
                                    <div className="messages" />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                        <div className="col-span-1">
                                            <div className="form-group mb-4 relative">
                                                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">{t('fullNameLabel')}</label>
                                                <input type="text" id="fullName" {...register('SingleLine')} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.SingleLine ? 'border-red-500' : ''}`} />
                                                {errors.SingleLine && <p className="text-red-500 text-xs mt-1">{errors.SingleLine.message}</p>}
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <div className="form-group mb-4 relative">
                                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">{t('emailLabel')}</label>
                                                <input type="email" id="email" {...register('Email')} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.Email ? 'border-red-500' : ''}`} />
                                                {errors.Email && <p className="text-red-500 text-xs mt-1">{errors.Email.message}</p>}
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <div className="form-group mb-4 relative">
                                                <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">{t('phoneLabel')}</label>
                                                <input type="text" id="phoneNumber" {...register('PhoneNumber_countrycode')} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.PhoneNumber_countrycode ? 'border-red-500' : ''}`} />
                                                {errors.PhoneNumber_countrycode && <p className="text-red-500 text-xs mt-1">{errors.PhoneNumber_countrycode.message}</p>}
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <div className="form-group mb-4 relative">
                                                <label htmlFor="requestNature" className="block text-gray-700 text-sm font-bold mb-2">{t('requestNatureLabel')}</label>
                                                <select id="requestNature" {...register('Dropdown2')} className={`block appearance-none w-full bg-white border rounded shadow leading-tight focus:outline-none focus:shadow-outline h-full py-2 px-3 pr-8 ${errors.Dropdown2 ? 'border-red-500' : ''}`}>
                                                    <option value="">{t('requestNaturePlaceholder')}</option> {/* Added a placeholder option */}
                                                    <option value="Sales | المبيعات">{t('requestSales')}</option>
                                                    <option value="Support | الدعم">{t('requestSupport')}</option>
                                                    <option value="Partnerships | الشراكات">{t('requestPartnerships')}</option>
                                                    <option value="Complains | الشكاوى">{t('requestComplains')}</option>
                                                    <option value="Public Relations | العلاقات العامة">{t('requestPublicRelations')}</option>
                                                </select>
                                                {errors.Dropdown2 && <p className="text-red-500 text-xs mt-1">{errors.Dropdown2.message}</p>}
                                            </div>
                                        </div>
                                        <div className="col-span-full">
                                            <div className="form-group mb-4 relative">
                                                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">{t('messageLabel')}</label>
                                                <textarea id="message" placeholder={t('messagePlaceholder')} {...register('MultiLine')} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none ${errors.MultiLine ? 'border-red-500' : ''}`} />
                                                {errors.MultiLine && <p className="text-red-500 text-xs mt-1">{errors.MultiLine.message}</p>}
                                            </div>
                                        </div>
                                        <div className="col-span-full text-center">
                                            <button type="submit" className="theme-btn-one btn-lg gozagel-btn-one bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out">
                                                {t('sendMessageButton')}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs;