'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

// Define the types for a single pricing feature
interface Feature {
  key: string; // Translation key for the feature
  enabled: boolean; // True if the feature is included, false if disabled
}

// Define the types for a single pricing plan card
interface PricingCardProps {
  planNameKey: string; // Translation key for the plan name
  planDetailsKey: string; // Translation key for plan details (e.g., "For New Merchants")
  priceValue?: string; // e.g., "0" or omitted for custom pricing
  priceCurrencySymbol?: string; // e.g., "$"
  pricePeriodKey?: string; // Translation key for "Per Month"
  additionalInfoKey?: string; // Translation key for "30 Free Shipments/Month" or "$0.02 Per Shipment"
  backgroundColor: string; // Tailwind color class or hex string for the top banner
  features: Feature[];
  buttonTextKey: string; // Translation key for button text
  buttonLink: string;
  isPopular?: boolean; // To apply 'most-popular' styling
  delay?: number; // For framer-motion stagger
  buttonStyle: 'gozagel-btn-one' | 'gozagel-btn-two'; // Custom styling logic based on original classes
}

const PricingCard: React.FC<PricingCardProps> = ({
  planNameKey,
  planDetailsKey,
  priceValue,
  priceCurrencySymbol,
  pricePeriodKey,
  additionalInfoKey,
  backgroundColor,
  features,
  buttonTextKey,
  buttonLink,
  isPopular = false,
  delay = 0,
  buttonStyle,
}) => {
  const t = useTranslations('Home.PricingSection');

  const getButtonStyleClasses = (style: 'gozagel-btn-one' | 'gozagel-btn-two') => {
    switch (style) {
      case 'gozagel-btn-one':
        return 'theme-btn-two '; // Example primary button style
      case 'gozagel-btn-two':
        return 'gozagel-btn-one'; // Example secondary button style
      default:
        return 'gozagel-btn-two';
    }
  };

  return (
    <motion.div
      className="w-full sm:w-1/2 lg:w-1/3 p-4 flex" // Tailwind equivalent of col-lg-4 col-sm-6 and d-flex from original
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: delay }}
    >
      <div className={`pr-table-wrapper bg-white rounded-lg shadow-lg flex flex-col overflow-hidden w-full ${isPopular ? 'relative border-2 border-blue-600' : ''}`}>
        {isPopular && (
          <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
            {t('mostPopularLabel')}
          </div>
        )}
        <div className="pack-name text-center text-xl font-bold pt-8 pb-2 text-gray-800 uppercase">{t(planNameKey)}</div>
        <div className="pack-details text-center text-gray-500 mb-6">{t(planDetailsKey)}</div>

        <div className={`top-banner flex flex-col md:flex-row items-center justify-center p-6 ${backgroundColor}`}>
          {priceValue !== undefined && (
            <div className="price text-5xl font-bold text-gray-900 flex items-start">
              {priceCurrencySymbol && <sup className="text-xl font-normal mr-1 mt-2">{priceCurrencySymbol}</sup>}
              {priceValue}
            </div>
          )}
          <div className="md:ml-4 mt-2 md:mt-0 text-center md:text-left">
            {pricePeriodKey && <span className="block text-lg font-medium">{t(pricePeriodKey)}</span>}
            {additionalInfoKey && <em className="block text-sm text-gray-600">{t(additionalInfoKey)}</em>}
          </div>
        </div>

        <ul className="pr-feature gozagel-pricing-list flex-grow list-none p-8 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-center ${!feature.enabled ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
              {feature.enabled ? (
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              ) : (
                <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              )}
              {t(feature.key)}
            </li>
          ))}
        </ul>

        <div className="text-center p-8 pt-0">
          <a
            href={buttonLink}
            className={`trial-button ${getButtonStyleClasses(buttonStyle)}`}
          >
            {t(buttonTextKey)}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const PricingSection: React.FC = () => {
  const t = useTranslations('Home.PricingSection');

  // Define pricing plan data with translation keys
  const pricingPlans = [
    {
      planNameKey: 'starter.name',
      planDetailsKey: 'starter.details',
      priceValue: '0',
      priceCurrencySymbol: '$',
      pricePeriodKey: 'perMonth',
      additionalInfoKey: 'starter.freeShipmentsInfo',
      backgroundColor: 'bg-blue-100/30', // Using Tailwind color with opacity for #82ccf12d
      features: [
        { key: 'features.connectStores', enabled: true },
        { key: 'features.connectCourier', enabled: true },
        { key: 'features.discountedRates', enabled: true },
        { key: 'features.additionalUsers', enabled: true },
        { key: 'features.orderManagement', enabled: true },
        { key: 'features.shipmentManagement', enabled: true },
        { key: 'features.shipmentTrackingBasic', enabled: true },
        { key: 'features.codReportsBasic', enabled: true },
        { key: 'features.reportingAnalyticsBasic', enabled: true },
        { key: 'features.socialMediaLink', enabled: true },
        { key: 'features.supportChatEmail', enabled: true },
        { key: 'features.inventoryManagement', enabled: false },
        { key: 'features.shippingAutomation', enabled: false },
        { key: 'features.customTrackingPage', enabled: false },
        { key: 'features.addressValidation', enabled: false },
        { key: 'features.apiAccess', enabled: false },
      ],
      buttonTextKey: 'signUpFreeButton',
      buttonLink: 'sign-up.html',
      buttonStyle: 'gozagel-btn-two' as const,
      delay: 0,
    },
    {
      planNameKey: 'growth.name',
      planDetailsKey: 'growth.details',
      priceValue: '0',
      priceCurrencySymbol: '$',
      pricePeriodKey: 'perMonth',
      additionalInfoKey: 'growth.perShipmentInfo',
      backgroundColor: 'bg-blue-300/20', // Using Tailwind color with opacity for #4da5d82a
      features: [
        { key: 'features.connectStoresGrowth', enabled: true },
        { key: 'features.connectCourierGrowth', enabled: true },
        { key: 'features.discountedRatesGrowth', enabled: true },
        { key: 'features.additionalUsersGrowth', enabled: true },
        { key: 'features.orderManagement', enabled: true },
        { key: 'features.shipmentManagement', enabled: true },
        { key: 'features.shipmentTrackingBasic', enabled: true },
        { key: 'features.codReportsBasic', enabled: true },
        { key: 'features.reportingAnalyticsBasic', enabled: true },
        { key: 'features.socialMediaLink', enabled: true },
        { key: 'features.supportChatEmail', enabled: true },
        { key: 'features.inventoryManagement', enabled: false },
        { key: 'features.shippingAutomation', enabled: false },
        { key: 'features.customTrackingPage', enabled: false },
        { key: 'features.addressValidation', enabled: false },
        { key: 'features.apiAccess', enabled: false },
      ],
      buttonTextKey: 'signUpButton',
      buttonLink: 'sign-up.html',
      isPopular: true,
      buttonStyle: 'gozagel-btn-one' as const,
      delay: 0.1,
    },
    {
      planNameKey: 'enterprise.name',
      planDetailsKey: 'enterprise.details',
      priceValue: undefined, // No specific price value, custom pricing
      priceCurrencySymbol: undefined,
      pricePeriodKey: 'customPricing',
      additionalInfoKey: 'enterprise.perShipmentInfo',
      backgroundColor: 'bg-blue-400/20', // Using Tailwind color with opacity for #1a90bf2d
      features: [
        { key: 'features.connectStoresEnterprise', enabled: true },
        { key: 'features.connectCourierEnterprise', enabled: true },
        { key: 'features.discountedRatesEnterprise', enabled: true },
        { key: 'features.additionalUsersEnterprise', enabled: true },
        { key: 'features.orderManagement', enabled: true },
        { key: 'features.shipmentManagement', enabled: true },
        { key: 'features.shipmentTrackingAdvanced', enabled: true },
        { key: 'features.codReportsAdvanced', enabled: true },
        { key: 'features.reportingAnalyticsAdvanced', enabled: true },
        { key: 'features.socialMediaLink', enabled: true },
        { key: 'features.supportChatEmailPhone', enabled: true },
        { key: 'features.inventoryManagement', enabled: true },
        { key: 'features.shippingAutomation', enabled: true },
        { key: 'features.customTrackingPage', enabled: true },
        { key: 'features.addressValidation', enabled: true },
        { key: 'features.apiAccess', enabled: true },
      ],
      buttonTextKey: 'contactUsButton',
      buttonLink: 'contact-us.html',
      buttonStyle: 'gozagel-btn-two' as const,
      delay: 0.2,
    },
  ];

  return (
    <div className="pricing-section-four pt-24 pb-24 md:pt-24" id="pricing"> {/* Tailwind's pt-100 pb-100 md-pt-100 */}
      <div className="container mx-auto px-4 mb-20"> {/* Tailwind's container mb-80 */}
        <div className="flex justify-center"> {/* Tailwind's row */}
          <div className="w-full xl:w-10/12 mx-auto"> {/* Tailwind's col-xl-10 m-auto */}
            <div className="title-style-seven text-center mb-12 md:mb-4"> {/* Tailwind's mb-50 md-mb-10 */}
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-500 after:scale-x-0 after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                  {t('mainTitleSpan')}
                </span>
                {t('mainTitleRemainder')}
              </h2>
              <p className="text-xl text-gray-600">{t('mainDescription')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-table-area-four">
        {/* There's no tab content switch in the original HTML, so we'll render directly */}
        <div className="tab-content">
          <div className="tab-pane active" id="month">
            <div className="flex flex-wrap justify-center -m-4 gozagel-pricing-plans-container"> {/* Tailwind's row justify-content-center and negative margin for gap */}
              {pricingPlans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;