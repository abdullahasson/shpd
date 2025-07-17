// Next.js
import type { Metadata } from "next";
import { Cairo, Roboto } from "next/font/google";
import localFont from 'next/font/local'; // For local Gilroy font

// Next Intl
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

// Styles
import "../globals.css";
import "../responsive.css";

// Gilroy (local font)
const gilroy = localFont({
  src: [
    {
      path: '../../../public/fonts/gilroy/gilroy-ultralight-webfont.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/gilroy/gilroy-light-webfont.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/gilroy/gilroy-semibold-webfont.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/gilroy/gilroy-bold-webfont.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/gilroy/gilroy-black-webfont.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy',
});

// Google Fonts
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto',
});

const cairo = Cairo({
  weight: '400',
  subsets: ['arabic'],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: 'Shpd - All Your Orders and Couriers Connected—Made Easy',
  description: 'Connect your online store or social media accounts, manage your orders seamlessly, and ship with confidence using 40+ trusted couriers worldwide.',
};

type ValidLocale = "en" | "ar" | "fr";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as ValidLocale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${gilroy.variable} ${roboto.variable} ${cairo.variable}`}
    >
      <body
        dir={locale === "ar" ? "rtl" : "ltr"}
        className="font-sans antialiased"
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}