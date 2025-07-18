"use client";

// Next
import Image from "next/image";
// I18n
import { useTranslations } from 'next-intl';
// Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
// Framer Motion
import { motion , Variants } from "framer-motion";
// Image Imports
import shape171 from "../../../../public/images/shape/171.svg";
import shape172 from "../../../../public/images/shape/172.svg";

interface FeatureItem {
    text: string;
    disabled?: boolean;
}

interface PricingPlan {
    name: string;
    description: string;
    price: string;
    priceDescription: string;
    priceSubDescription: string;
    features: FeatureItem[];
    buttonText: string;
    buttonLink: string;
    isPopular?: boolean;
    bannerColor: string;
}

// Animation variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
};

const cardVariants: Variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    },
    hover: {
        y: -5,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
    }
};

const popularCardVariants: Variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2
        }
    },
    hover: {
        y: -10,
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)"
    }
};

const badgeVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 10
        }
    },
    hover: {
        rotate: [0, 5, -5, 0],
        transition: { duration: 0.5 }
    }
};

const Pricing = () => {
    const t = useTranslations('Pricing');

    const plans: PricingPlan[] = [
        {
            name: t('plans.starter.name'),
            description: t('plans.starter.description'),
            price: t('plans.starter.price'),
            priceDescription: t('plans.starter.priceDescription'),
            priceSubDescription: t('plans.starter.priceSubDescription'),
            features: [
                { text: t('plans.starter.features.store') },
                { text: t('plans.starter.features.courier') },
                { text: t('plans.starter.features.discount') },
                { text: t('plans.starter.features.users') },
                { text: t('commonFeatures.orderManagement') },
                { text: t('commonFeatures.shipmentManagement') },
                { text: t('commonFeatures.trackingBasic') },
                { text: t('commonFeatures.codReportsBasic') },
                { text: t('commonFeatures.analyticsBasic') },
                { text: t('commonFeatures.socialMedia') },
                { text: t('commonFeatures.supportBasic') },
                { text: t('commonFeatures.inventory'), disabled: true },
                { text: t('commonFeatures.automation'), disabled: true },
                { text: t('commonFeatures.customTracking'), disabled: true },
                { text: t('commonFeatures.addressValidation'), disabled: true },
                { text: t('commonFeatures.apiAccess'), disabled: true },
            ],
            buttonText: t('plans.starter.buttonText'),
            buttonLink: "/sign-up",
            bannerColor: '#82ccf12d'
        },
        {
            name: t('plans.growth.name'),
            description: t('plans.growth.description'),
            price: t('plans.growth.price'),
            priceDescription: t('plans.growth.priceDescription'),
            priceSubDescription: t('plans.growth.priceSubDescription'),
            features: [
                { text: t('plans.growth.features.store') },
                { text: t('plans.growth.features.courier') },
                { text: t('plans.growth.features.discount') },
                { text: t('plans.growth.features.users') },
                { text: t('commonFeatures.orderManagement') },
                { text: t('commonFeatures.shipmentManagement') },
                { text: t('commonFeatures.trackingBasic') },
                { text: t('commonFeatures.codReportsBasic') },
                { text: t('commonFeatures.analyticsBasic') },
                { text: t('commonFeatures.socialMedia') },
                { text: t('commonFeatures.supportBasic') },
                { text: t('commonFeatures.inventory'), disabled: true },
                { text: t('commonFeatures.automation'), disabled: true },
                { text: t('commonFeatures.customTracking'), disabled: true },
                { text: t('commonFeatures.addressValidation'), disabled: true },
                { text: t('commonFeatures.apiAccess'), disabled: true },
            ],
            buttonText: t('plans.growth.buttonText'),
            buttonLink: "/sign-up",
            isPopular: true,
            bannerColor: '#4da5d82a'
        },
        {
            name: t('plans.enterprise.name'),
            description: t('plans.enterprise.description'),
            price: t('plans.enterprise.price'),
            priceDescription: t('plans.enterprise.priceDescription'),
            priceSubDescription: t('plans.enterprise.priceSubDescription'),
            features: [
                { text: t('plans.enterprise.features.store') },
                { text: t('plans.enterprise.features.courier') },
                { text: t('plans.enterprise.features.discount') },
                { text: t('plans.enterprise.features.users') },
                { text: t('commonFeatures.orderManagement') },
                { text: t('commonFeatures.shipmentManagement') },
                { text: t('commonFeatures.trackingAdvanced') },
                { text: t('commonFeatures.codReportsAdvanced') },
                { text: t('commonFeatures.analyticsAdvanced') },
                { text: t('commonFeatures.socialMedia') },
                { text: t('commonFeatures.supportAdvanced') },
                { text: t('commonFeatures.inventory') },
                { text: t('commonFeatures.automation') },
                { text: t('commonFeatures.customTracking') },
                { text: t('commonFeatures.addressValidation') },
                { text: t('commonFeatures.apiAccess') },
            ],
            buttonText: t('plans.enterprise.buttonText'),
            buttonLink: "/contact-us",
            bannerColor: '#1a90bf2d'
        }
    ];

    return (
        <motion.div 
            className='main-page-wrapper'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <Header />
            <Hero title={t('heroHeading')} subTitle={t('heroSubHeading')} />

            <div className="pricing-section-four pt-24 pb-24 md:pt-24" id="pricing">
                <div className="container mx-auto px-4 mb-20">
                    <div className="flex flex-wrap">
                        <div className="w-full xl:w-10/12 mx-auto">
                            <motion.div 
                                className="title-style-seven text-center mb-12 md:mb-2"
                                variants={itemVariants}
                            >
                                <h2><span>{t('titleHighlight')}</span>, {t('title')}</h2>
                                <p>{t('subtitle')}</p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="pricing-table-area-four">
                    <div className="tab-content">
                        <div className="tab-pane active" id="month">
                            <motion.div 
                                className="flex flex-wrap justify-center gozagel-pricing-plans-container"
                                variants={containerVariants}
                            >
                                {plans.map((plan, index) => (
                                    <motion.div
                                        key={plan.name}
                                        className={`w-full lg:w-1/3 sm:w-1/2 px-4 ${index === 1 ? 'mt-8 lg:mt-0' : ''}`}
                                        variants={plan.isPopular ? popularCardVariants : cardVariants}
                                        whileHover={plan.isPopular ? "hover" : "hover"}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <div className={`pr-table-wrapper ${plan.isPopular ? 'active most-popular' : ''}`}>
                                            {plan.isPopular && (
                                                <motion.div 
                                                    className="popular-badge"
                                                    variants={badgeVariants}
                                                    whileHover="hover"
                                                >
                                                    {t('popularBadge')}
                                                </motion.div>
                                            )}
                                            <div className="pack-name">{plan.name}</div>
                                            <div className="pack-details">{plan.description}</div>
                                            <motion.div 
                                                className="top-banner md:flex" 
                                                style={{ background: plan.bannerColor }}
                                                whileHover={{ scale: 1.02 }}
                                            >
                                                {plan.price !== "Custom Pricing" ? (
                                                    <>
                                                        <div className="price"><sup>{plan.price.startsWith('$') ? '$' : ''}</sup>{plan.price.replace('$', '')}</div>
                                                        <div>
                                                            <span>{plan.priceDescription}</span>
                                                            <em>{plan.priceSubDescription}</em>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <div>
                                                        <span>{plan.priceDescription}</span>
                                                        <em>{plan.priceSubDescription}</em>
                                                    </div>
                                                )}
                                            </motion.div>
                                            <ul className="pr-feature gozagel-pricing-list">
                                                {plan.features.map((feature, i) => (
                                                    <motion.li 
                                                        key={i} 
                                                        className={feature.disabled ? 'disable' : ''}
                                                        variants={itemVariants}
                                                        whileHover={{ x: 5 }}
                                                    >
                                                        {feature.text}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                            <motion.a
                                                href={plan.buttonLink}
                                                className={`trial-button ${plan.isPopular ? 'gozagel-btn-one' : 'gozagel-btn-two'}`}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {plan.buttonText}
                                            </motion.a>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <motion.div 
                className="fancy-short-banner-eight" 
                style={{ backgroundColor: 'var(--bg-color-c1)' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="container mx-auto px-4 gozagel-mega">
                    <div className="flex flex-wrap">
                        <div className="w-full xl:w-8/12 lg:w-11/12 mx-auto">
                            <motion.div 
                                className="title-style-seven text-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h2>{t('cta.title')}</h2>
                                <p>{t('cta.subtitle')}</p>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div 
                        className="flex flex-wrap justify-center" 
                        style={{ gap: '8px' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <motion.a 
                            href="/sign-up" 
                            className="theme-btn-fourteen gozagel-btn-one"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('cta.primaryButton')}
                        </motion.a>
                        <motion.a 
                            href="https://meet.gozagel.com/" 
                            className="theme-btn-fourteen gozagel-btn-one"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('cta.secondaryButton')}
                        </motion.a>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Image src={shape171} alt="shape71" className="shapes shape-one" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Image src={shape172} alt="shape72" className="shapes shape-two" />
                </motion.div>
            </motion.div>

            <Footer />
        </motion.div>
    )
}

export default Pricing;