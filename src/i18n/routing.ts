// shpd\src\i18n\routing.ts
import {defineRouting} from 'next-intl/routing';
// import {createNavigation} from 'next-intl/navigation'; // هذا السطر يمكن إزالته، لا يستخدم هنا

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ar', 'fr'],

  // Used when no locale matches
  defaultLocale: 'en'
});

// إضافة هذه التعريفات لتمكين الـHeader
export const locales = routing.locales; // إعادة تصدير اللغات من تعريف الـrouting

// أسماء اللغات لعرضها في القائمة المنسدلة
export const localeNames = {
  en: 'English',
  ar: 'العربية',
  fr: 'Français',
};

// مسارات أيقونات الأعلام (تأكد من وجود هذه الصور في مجلد public/images/flags/)
export const flagIcons = {
  en: '/images/flags/flag-us-svgrepo-com.svg',
  ar: '/images/flags/flag-eg-svgrepo-com.svg',
  fr: '/images/flags/flag-fr-svgrepo-com.svg',
};