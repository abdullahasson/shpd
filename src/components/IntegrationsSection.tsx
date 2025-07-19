import Image from 'next/image';
// import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
// import { motion, Variants } from 'framer-motion';
// Images
import Channels from "../../public/images/assets/Channels-01.png";
import Social from '../../public/images/assets/Social Media.png';
import Shipping from '../../public/images/assets/Shipping companies.png';
// Icons
import Icon93 from '../../public/images/icon/93.svg';


const IntegrationsSection = () => {
  const t = useTranslations('Home.IntegrationsSection');
  const lang = useLocale()
  const isRTL = lang == "ar"

  return (
    <div className="fancy-feature-eight pt-[80px] md:pt-[80px] pb-[80px]" id="integrations">
      <div className="container mx-auto px-4">
        <div className="title-style-four text-center">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-10/12 mx-auto">
              <div className="title-style-seven text-center mb-[50px] md:mb-[10px]">
                <h2 className="text-4xl font-bold">
                  <span className="text-primary">
                    {t('highlight')}
                  </span>
                  {t('title').replace(t('highlight'), '')}
                </h2>
                <p className="mt-4 text-lg">
                  {t('description')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <Image className="integration-image-section" src={Channels} alt="integration-image-section" />
        </div>

        <div className="block-style-eighteen mt-[90px] md:mt-[80px]">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-5/12">
              <div className="text-wrapper">
                <h6>{t('salesChannels.subtitle')}</h6>
                <h3 className="title">{t('salesChannels.title')}</h3>
                <p>
                  {t('salesChannels.description')}
                </p>
                <a href="Integrations.html" className="flex items-center learn-more">
                  <span>{t('salesChannels.learnMore')}</span>
                  <Image src={Icon93} alt="icon-93" className="ml-2" />
                </a>
              </div>
            </div>

            <div className={`w-full lg:w-7/12 mt-10 lg:mt-0 flex items-center ${isRTL ? "justify-start" : "justify-end"}`}>
              <div className="screen-holder-three flex items-center justify-center p-6">
                <Image src={Social} style={{ animation: 'none' }} alt="social-media" />
              </div>
            </div>
          </div>
        </div>

        <div className="block-style-eighteen mt-[90px] md:mt-[80px]">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-5/12">
              <div className="text-wrapper">
                <h6>
                  {t('couriers.subtitle')}
                </h6>
                <h3 className="title">
                  {t('couriers.title')}
                </h3>
                <p>
                  {t('couriers.description')}
                </p>
                <a href="Integrations.html" className="flex items-center learn-more">
                  <span>{t('couriers.learnMore')}</span>
                  <Image src={Icon93} alt="icon-93" className="ml-2" />
                </a>
              </div>
            </div>
            <div className={`w-full lg:w-7/12 mt-10 lg:mt-0 flex items-center ${isRTL ? "justify-start" : "justify-end"}`}>
              <div className="screen-holder-three flex items-center justify-center p-6">
                <Image src={Shipping} style={{ animation: 'none' }} alt="shipping-companies" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsSection;