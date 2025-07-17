"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl';
import { motion , Variants } from "framer-motion"
import Logo from "../../public/images/logo/shpd_logo.jpg"

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const Footer = () => {
  const t = useTranslations('Footer');
  const locale = useLocale();

  return (
    <motion.footer 
      className="theme-footer-seven mt-[120px] md:mt-[100px] overflow-y-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="lg-container">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Logo Section */}
            <motion.div 
              className="w-full lg:w-1/4 xl:w-1/5 px-4 mb-10 lg:mb-0"
              variants={itemVariants}
            >
              <div className="logo">
                <Link href={`/${locale}`}>
                  <Image 
                    src={Logo} 
                    alt="shpd-logo" 
                    width={150} 
                    height={50} 
                  />
                </Link>
              </div>
            </motion.div>

            {/* Links Section */}
            <motion.div 
              className="w-full md:w-1/2 lg:w-1/6 px-4 mb-10 lg:mb-0"
              variants={itemVariants}
            >
              <h5 className="title text-lg font-medium mb-4">{t('links.title')}</h5>
              <ul className="footer-list space-y-2">
                {[
                  { path: 'about-us', key: 'about' },
                  { path: 'how-it-work', key: 'howItWorks' },
                  { path: 'integrations', key: 'integrations' },
                  { path: 'prohibited-items', key: 'prohibitedItems' },
                  { path: 'packaging', key: 'packaging' },
                  { path: 'contact-us', key: 'contact' }
                ].map((item, index) => (
                  <motion.li 
                    key={item.key}
                    variants={itemVariants}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link href={`/${locale}/${item.path}`}>
                      {t(`links.${item.key}`)}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Section */}
            <motion.div 
              className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10 lg:mb-0"
              variants={itemVariants}
            >
              <h5 className="title text-lg font-medium mb-4">{t('legal.title')}</h5>
              <ul className="footer-list space-y-2">
                {[
                  { path: 'insurance', key: 'insurance' },
                  { path: 'terms-and-condition', key: 'terms' },
                  { path: 'privacy-policy', key: 'privacy' }
                ].map((item, index) => (
                  <motion.li 
                    key={item.key}
                    variants={itemVariants}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link href={`/${locale}/${item.path}`}>
                      {t(`legal.${item.key}`)}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter Section */}
            <motion.div 
              className="w-full lg:w-5/12 xl:w-1/3 px-4 mb-10 lg:mb-0"
              variants={itemVariants}
            >
              <div className="newsletter">
                <h5 className="title text-lg font-medium mb-4">{t('newsletter.title')}</h5>
                <motion.p 
                  className="mb-4"
                  variants={itemVariants}
                >
                  {t('newsletter.description', { count: 68000 })}
                </motion.p>
                <motion.form 
                  action="https://forms.zohopublic.com/royalworksfortrade/form/Newsletter1/formperma/s4FlM2eSOdF9abP3RwTyu2L1kiP-T03YcZXl4Sp9Ig4/htmlRecords/submit" 
                  name="form" 
                  id="form" 
                  method="POST" 
                  acceptCharset="UTF-8" 
                  encType="multipart/form-data"
                  variants={itemVariants}
                >
                  <input type="hidden" name="zf_referrer_name" />
                  <input type="hidden" name="zf_redirect_url" />
                  <input type="hidden" name="zc_gad" />
                  <motion.input 
                    type="text" 
                    maxLength={255} 
                    name="Email" 
                    className="w-full p-2 mb-3 border !border-[var(--main-color)]" 
                    placeholder={t('newsletter.placeholder')}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <motion.button 
                    type="submit" 
                    className="dark-btn gozagel-btn-one bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('newsletter.button')}
                  </motion.button>
                </motion.form>
                <motion.div 
                  className="info mt-2 text-sm text-gray-500"
                  variants={itemVariants}
                >
                  {t('newsletter.info')}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright Section */}
        <motion.div 
          className="container mx-auto px-4"
          variants={itemVariants}
        >
          <div className="bottom-footer pt-6 border-t border-gray-200">
            <div className="w-full text-center mb-5">
              <p className="copyright text-center text-sm">
                {t('copyright')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer;