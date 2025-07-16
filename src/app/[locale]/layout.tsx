// Next js
import type { Metadata } from "next";
// Next.js Font Optimization
import { Cairo, Roboto } from "next/font/google"; // For Google Fonts

// Next Intl
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

// Styles
import "../globals.css";
import "../responsive.css"

// Define Google Fonts with CSS variables for consistent usage
const roboto = Roboto({
  weight: ['400', '700'], // Include weights you use
  subsets: ['latin'],
  variable: '--font-roboto', // Define CSS variable for Roboto
  display: 'swap',
});

const cairo = Cairo({
  weight: ['400', '700'], // Include weights you use
  subsets: ['arabic'],
  variable: '--font-cairo', // Define CSS variable for Cairo
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'Shpd - All Your Orders and Couriers Connected—Made Easy',
  description: 'Connect your online store or social media accounts, manage your orders seamlessly, and ship with confidence using 40+ trusted couriers worldwide.',
  keywords: 'Diverse courier delivery, Order completion, Delivery simplicity, Logistics coordination, E-commerce site, Shipping services, Order management, Inventory control, Order tracking, Delivery management, E-commerce integration, Social platform integration, Worldwide delivery services, Regional couriers, Online retail solutions',
  openGraph: {
    siteName: 'Shpd',
    url: 'https://heloshape.com/',
    type: 'website',
    title: 'Shpd: All Your Orders and Couriers Connected—Made Easy',
    images: ['/images/assets/ogg.png'], // Make sure this path is correct relative to the public directory
  },
  themeColor: '#7034FF'
};


// Define the valid locales as a type
type ValidLocale = "en" | "ar" | "fr";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {

  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as ValidLocale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      // Apply all font variables to the html tag
      className={`${roboto.variable} ${cairo.variable}`}
    >
      <body
        dir={locale == "ar" ? "rtl" : "ltr"}
        // Keep existing classNames for Roboto/Cairo as they might be used by other components
        // The CSS variables in globals.css will take precedence for body's font-family
        className={`${roboto.className} ${cairo.className} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <>
            {children}
          </>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
