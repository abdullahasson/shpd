// Next js
import Image from "next/image";
import Link from "next/link"
import { useTranslations , useLocale } from "next-intl";
// Images
import dashboard from "../../public/images/GoZagel_SVG/dashboard-graph-analytics-report-svgrepo-com.svg"
import account from "../../public/images/GoZagel_SVG/account-hub.svg"
import order from "../../public/images/GoZagel_SVG/order-food-svgrepo-com.svg"
import flexible from "../../public/images/GoZagel_SVG/flexible-access-svgrepo-com.svg"
import analytics from "../../public/images/GoZagel_SVG/analytics-svgrepo-com.svg"
import team from "../../public/images/GoZagel_SVG/team-work-svgrepo-com.svg"
import track from "../../public/images/GoZagel_SVG/track-svgrepo-com.svg"
import support from "../../public/images/GoZagel_SVG/support-online-center-svgrepo-com.svg"

const AdvantagesSection = () => {
    const t = useTranslations("Home.advantages")
    const lang = useLocale()

    return (
        <div className="fancy-text-block-five pt-[130px] pb-[160px] md:pt-[100px] md:pb-[100px]" style={{ background: 'var(--secondry-bg)' }} id="advantages">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-7/12 mx-auto">
                        <div className="title-style-seven text-center mb-[50px] md:mb-[30px]">
                            <h2><span>{t('titleHighlight')}</span> {t('title')}</h2>
                            <p className="font-rubik">{t('subtitle')}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-y-8 gap-x-4">
                    <div className="w-full md:w-[calc(50%-16px)] flex">
                        <div className="block-style-five gozagel-advantages-block text-center">
                            <div className="icon">
                                <Image src={dashboard} alt={t('items.0.alt')} />
                            </div>
                            <h6 className="title"><span>{t('items.0.title')}</span></h6>
                            <p className="font-rubik !text-lg text-lg">{t('items.0.description')}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[calc(50%-16px)] flex">
                        <div className="block-style-five gozagel-advantages-block text-center">
                            <div className="icon">
                                <Image src={account} alt={t('items.1.alt')} />
                            </div>
                            <h6 className="title"><span>{t('items.1.title')}</span></h6>
                            <p className="font-rubik !text-lg text-lg">{t('items.1.description')}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[calc(50%-16px)] flex">
                        <div className="block-style-five gozagel-advantages-block text-center">
                            <div className="icon">
                                <Image src={order} alt={t('items.2.alt')} />
                            </div>
                            <h6 className="title"><span>{t('items.2.title')}</span></h6>
                            <p className="font-rubik !text-lg text-lg">{t('items.2.description')}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[calc(50%-16px)] flex">
                        <div className="block-style-five gozagel-advantages-block text-center">
                            <div className="icon">
                                <Image src={flexible} alt={t('items.3.alt')} />
                            </div>
                            <h6 className="title"><span>{t('items.3.title')}</span></h6>
                            <p className="font-rubik !text-lg text-lg">{t('items.3.description')}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[calc(50%-16px)] flex">
                        <div className="block-style-five gozagel-advantages-block text-center">
                            <div className="icon">
                                <Image src={analytics} alt={t('items.4.alt')} />
                            </div>
                            <h6 className="title"><span>{t('items.4.title')}</span></h6>
                            <p className="font-rubik !text-lg text-lg">{t('items.4.description')}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[calc(50%-16px)] flex">
                        <div className="block-style-five gozagel-advantages-block text-center">
                            <div className="icon">
                                <Image src={team} alt={t('items.5.alt')} />
                            </div>
                            <h6 className="title"><span>{t('items.5.title')}</span></h6>
                            <p className="font-rubik !text-lg text-lg">{t('items.5.description')}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[calc(50%-16px)] flex">
                        <div className="block-style-five gozagel-advantages-block text-center">
                            <div className="icon">
                                <Image src={track} alt={t('items.6.alt')} />
                            </div>
                            <h6 className="title"><span>{t('items.6.title')}</span></h6>
                            <p className="font-rubik !text-lg text-lg">{t('items.6.description')}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[calc(50%-16px)] flex">
                        <div className="block-style-five gozagel-advantages-block text-center">
                            <div className="icon">
                                <Image src={support} alt={t('items.7.alt')} />
                            </div>
                            <h6 className="title"><span>{t('items.7.title')}</span></h6>
                            <p className="font-rubik !text-lg text-lg">{t('items.7.description')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-[80px] md:mt-[50px]">
                <Link href={`/${lang}/advantages`} className="theme-btn-ten">
                    {t('learnMore')}
                    <i className="fa fa-chevron-right" aria-hidden="true" />
                </Link>
            </div>
        </div>
    )
}

export default AdvantagesSection;