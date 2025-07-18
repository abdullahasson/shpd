// Next
import Link from "next/link";
// Next Intl
import { useTranslations , useLocale } from "next-intl";

interface PricingFeature {
  text: string;
  disabled: boolean;
}

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  billing: string;
  shipmentLimit: string;
  cta: string;
  features: PricingFeature[];
}

interface PricingSectionTranslations {
  titleHighlight: string;
  title: string;
  subtitle: string;
  learnMore: string;
  plans: {
    starter: PricingPlan;
    growth: PricingPlan;
    enterprise: PricingPlan;
  };
}
const PricingSection = () => {
  const t = useTranslations("Home.PricingSection"); 
  const lang = useLocale()

  // Safely get translations with fallbacks
  const translations: PricingSectionTranslations = {
    titleHighlight: t("titleHighlight"),
    title: t("title"),
    subtitle: t("subtitle"),
    learnMore: t("learnMore"),
    plans: {
      starter: {
        name: t("plans.starter.name"),
        description: t("plans.starter.description"),
        price: t("plans.starter.price"),
        billing: t("plans.starter.billing"),
        shipmentLimit: t("plans.starter.shipmentLimit"),
        cta: t("plans.starter.cta"),
        features: t.raw("plans.starter.features") as PricingFeature[],
      },
      growth: {
        name: t("plans.growth.name"),
        description: t("plans.growth.description"),
        price: t("plans.growth.price"),
        billing: t("plans.growth.billing"),
        shipmentLimit: t("plans.growth.shipmentLimit"),
        cta: t("plans.growth.cta"),
        features: t.raw("plans.growth.features") as PricingFeature[],
      },
      enterprise: {
        name: t("plans.enterprise.name"),
        description: t("plans.enterprise.description"),
        price: t("plans.enterprise.price"),
        billing: t("plans.enterprise.billing"),
        shipmentLimit: t("plans.enterprise.shipmentLimit"),
        cta: t("plans.enterprise.cta"),
        features: t.raw("plans.enterprise.features") as PricingFeature[],
      },
    },
  };

  return (
    <div className="pricing-section-four pt-[100px] md:pt-[100px]" id="pricing">
      <div className="container mx-auto px-4 mb-[80px]">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-10/12 mx-auto">
            <div className="title-style-seven text-center mb-[50px] md:mb-[10px]">
              <h2>
                <span>{translations.titleHighlight}</span>
                {translations.title}
              </h2>
              <p>{translations.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-table-area-four">
        <div className="tab-content">
          <div className="tab-pane active" id="month">
            <div className="flex flex-wrap justify-center gap-6 gozagel-pricing-plans-container">
              {/* Starter Plan */}
              <div className="w-full sm:w-[calc(50%-24px)] lg:w-[calc(33.333%-32px)]">
                <div className="pr-table-wrapper h-full flex flex-col">
                  <div className="pack-name">{translations.plans.starter.name}</div>
                  <div className="pack-details">
                    {translations.plans.starter.description}
                  </div>
                  <div
                    className="top-banner flex flex-col md:flex-row items-center"
                    style={{ background: "#82ccf12d" }}
                  >
                    <div className="price">
                      <sup>$</sup>
                      {translations.plans.starter.price}
                    </div>
                    <div>
                      <span>{translations.plans.starter.billing}</span>
                      <em>{translations.plans.starter.shipmentLimit}</em>
                    </div>
                  </div>
                  <ul className="pr-feature gozagel-pricing-list flex-grow">
                    {translations.plans.starter.features.map((feature, index) => (
                      <li
                        key={`starter-${index}`}
                        className={feature.disabled ? "disable" : ""}
                      >
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/${lang}/sign-up`}
                    className="trial-button gozagel-btn-two mt-auto"
                  >
                    {translations.plans.starter.cta}
                  </Link>
                </div>
              </div>

              {/* Growth Plan - Most Popular */}
              <div className="w-full sm:w-[calc(50%-24px)] lg:w-[calc(33.333%-32px)]">
                <div className="pr-table-wrapper active most-popular h-full flex flex-col">
                  <div className="pack-name">{translations.plans.growth.name}</div>
                  <div className="pack-details">
                    {translations.plans.growth.description}
                  </div>
                  <div
                    className="top-banner flex flex-col md:flex-row items-center"
                    style={{ background: "#4da5d82a" }}
                  >
                    <div className="price">
                      <sup>$</sup>
                      {translations.plans.growth.price}
                    </div>
                    <div>
                      <span>{translations.plans.growth.billing}</span>
                      <em>{translations.plans.growth.shipmentLimit}</em>
                    </div>
                  </div>
                  <ul className="pr-feature gozagel-pricing-list flex-grow">
                    {translations.plans.growth.features.map((feature, index) => (
                      <li
                        key={`growth-${index}`}
                        className={feature.disabled ? "disable" : ""}
                      >
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/${lang}/sign-up`}
                    className="trial-button gozagel-btn-one mt-auto"
                  >
                    {translations.plans.growth.cta}
                  </Link>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="w-full sm:w-[calc(50%-24px)] lg:w-[calc(33.333%-32px)]">
                <div className="pr-table-wrapper h-full flex flex-col">
                  <div className="pack-name">
                    {translations.plans.enterprise.name}
                  </div>
                  <div className="pack-details">
                    {translations.plans.enterprise.description}
                  </div>
                  <div
                    className="top-banner flex flex-col md:flex-row items-center"
                    style={{ background: "#1a90bf2d", paddingBottom: "9px" }}
                  >
                    <div>
                      <span>{translations.plans.enterprise.billing}</span>
                      <em>{translations.plans.enterprise.shipmentLimit}</em>
                    </div>
                  </div>
                  <ul className="pr-feature gozagel-pricing-list flex-grow">
                    {translations.plans.enterprise.features.map(
                      (feature, index) => (
                        <li
                          key={`enterprise-${index}`}
                          className={feature.disabled ? "disable" : ""}
                        >
                          {feature.text}
                        </li>
                      )
                    )}
                  </ul>
                  <Link
                    href={`/${lang}/contact-us`}
                    className="trial-button gozagel-btn-two mt-auto"
                  >
                    {translations.plans.enterprise.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-[80px] md:mt-[50px]">
        <Link href={`/${lang}/pricing`} className="theme-btn-ten">
          {translations.learnMore}{" "}
          <i className="fa fa-chevron-right" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
};

export default PricingSection;